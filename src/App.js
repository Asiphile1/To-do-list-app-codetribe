import React, { useState, useEffect } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Form from './components/Form';
import Loader from './components/Loader';
import {
  initDatabase,
  addUser,
  getUser,
  addTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  updateImportance
} from './database';

function App() {
  const [page, setPage] = useState('login');
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [db, setDb] = useState(null);

  useEffect(() => {
<<<<<<< HEAD
    const initializeDb = async () => {
      const dbInstance = await initDatabase();
      setDb(dbInstance);
      const todos = await getTodos(dbInstance);
      setTodos(todos);
      setLoading(false);
    };
    initializeDb();
  }, []);

  const handleAddTodo = async (task) => {
    await addTodo(db, task);
    const todos = await getTodos(db);
    setTodos(todos);
  };

  const handleRemoveTodo = async (id) => {
    await deleteTodo(db, id);
    const todos = await getTodos(db);
    setTodos(todos);
  };

  const handleCompleteTodo = async (id) => {
    const todo = todos.find(t => t.id === id);
    await updateTodo(db, id, !todo.completed);
    const todos = await getTodos(db);
    setTodos(todos);
  };

  const handleUpdateImportance = async (id, importance) => {
    await updateImportance(db, id, importance);
    const todos = await getTodos(db);
    setTodos(todos);
=======
    axios.get('http://localhost:3000/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }, []);

  const addTodo = (task) => {
    const newTodo = {
      task,
      completed: false,
      importance: 'none',
    };
    axios.post('http://localhost:3000/todos', newTodo)
      .then(response => {
        setTodos([...todos, response.data]);
      })
      .catch(error => {
        console.error('Error adding todo:', error);
      });
  };

  const removeTodo = (id) => {
    axios.delete(`http://localhost:3000/todos/${id}`)
      .then(() => {
        setTodos(todos.filter(t => t.id !== id));
      })
      .catch(error => {
        console.error('Error removing todo:', error);
      });
  };

  const completeTodo = (id) => {
    const todoToUpdate = todos.find(t => t.id === id);
    const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };
    axios.put(`http://localhost:3000/todos/${id}`, updatedTodo)
      .then(response => {
        setTodos(todos.map(t => t.id === id ? response.data : t));
      })
      .catch(error => {
        console.error('Error updating todo:', error);
      });
  };

  const updateImportance = (id, importance) => {
    const todoToUpdate = todos.find(t => t.id === id);
    const updatedTodo = { ...todoToUpdate, importance };
    axios.put(`http://localhost:3000/todos/${id}`, updatedTodo)
      .then(response => {
        setTodos(todos.map(t => t.id === id ? response.data : t));
      })
      .catch(error => {
        console.error('Error updating importance:', error);
      });
>>>>>>> 1b31acaf9232b46aafa7456b81183f5cc25ef0be
  };

  const renderPage = () => {
    switch (page) {
      case 'login':
        return <Login setPage={setPage} db={db} />;
      case 'register':
        return <Register setPage={setPage} db={db} />;
      case 'home':
        return (
          <Form
            setPage={setPage}
            addTodo={handleAddTodo}
            todos={todos}
            removeTodo={handleRemoveTodo}
            completeTodo={handleCompleteTodo}
            updateImportance={handleUpdateImportance}
          />
        );
      default:
        return <Register setPage={setPage} db={db} />;
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

<<<<<<< HEAD





















// import React, { useState, useEffect } from 'react';
// import Register from './components/Register';
// import Login from './components/Login';
// import Form from './components/form';
// import Loader from './components/Loader';
// import { getTodos, addTodo as addTodoAPI, removeTodo as removeTodoAPI } from './components/api';

// function App() {
//   const [page, setPage] = useState('login');
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTodos = async () => {
//       try {
//         const todos = await getTodos();
//         setTodos(todos);
//       } catch (error) {
//         console.error('Error fetching todos:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchTodos();
//   }, []);

//   const addTodo = async (task) => {
//     const newTodo = {
//       id: Date.now(),
//       task,
//       completed: false,
//       importance: ''
//     };
//     try {
//       const addedTodo = await addTodoAPI(newTodo);
//       setTodos([...todos, addedTodo]);
//     } catch (error) {
//       console.error('Error adding todo:', error);
//     }
//   };

//   const removeTodo = async (id) => {
//     try {
//       await removeTodoAPI(id);
//       setTodos(todos.filter(todo => todo.id !== id));
//     } catch (error) {
//       console.error('Error removing todo:', error);
//     }
//   };

//   const completeTodo = (id) => {
//     setTodos(todos.map(todo =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     ));
//   };

//   const updateImportance = (id, importance) => {
//     setTodos(todos.map(todo =>
//       todo.id === id ? { ...todo, importance } : todo
//     ));
//   };

//   const renderPage = () => {
//     switch (page) {
//       case 'login':
//         return <Login setPage={setPage} />;
//       case 'register':
//         return <Register setPage={setPage} />;
//       case 'home':
//         return (
//           <Form
//             setPage={setPage}
//             addTodo={addTodo}
//             todos={todos}
//             removeTodo={removeTodo}
//             completeTodo={completeTodo}
//             updateImportance={updateImportance}
//           />
//         );
//       default:
//         return <Register setPage={setPage} />;
//     }
//   };

//   return (
//     <div className="App">
//       {loading && <Loader />}
//       {!loading && renderPage()}
//     </div>
//   );
// }

// export default App;
=======
>>>>>>> 1b31acaf9232b46aafa7456b81183f5cc25ef0be
