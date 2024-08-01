import React, { useState, useEffect } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Form from './components/Form';
import Loader from './components/Loader';
import { getTodos, addTodo as addTodoAPI, removeTodo, updateTodo } from './api';

function App() {
  const [page, setPage] = useState('login');
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todos = await getTodos();
        setTodos(todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async (task) => {
    const newTodo = {
      id: Date.now(),
      task,
      completed: false,
    };
    try {
      const addedTodo = await addTodoAPI(newTodo);
      setTodos([...todos, addedTodo]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const renderPage = () => {
    switch (page) {
      case 'login':
        return <Login setPage={setPage} />;
      case 'register':
        return <Register setPage={setPage} />;
      case 'home':
        return <Form setPage={setPage} addTodo={addTodo} todos={todos} />;
      default:
        return <Register setPage={setPage} />;
    }
  };

  return (
    <div className="App">
      {loading && <Loader />}
      {!loading && renderPage()}
    </div>
  );
}

export default App;
