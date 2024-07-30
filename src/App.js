import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Form from './components/Form'; 
import './App.css'; // Import your App.css or any global styles

function App() {
  const [page, setPage] = useState('login'); 
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    const newTodo = {
      id: Date.now(),
      task,
      completed: false,
      
      importance: 'none',
    };
    setTodos([...todos, newTodo]);
  };

  const renderPage = () => {
    switch (page) {
      case 'login':
        return <Login setPage={setPage} />;
      case 'register':
        return <Register setPage={setPage} />;
      case 'home':
        return <Form setPage={setPage} addTodo={addTodo} todos={todos} setTodos={setTodos} />;
      default:
        return <Register setPage={setPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;



























// import React, { useState } from 'react';
// import Register from './components/Register';
// import Login from './components/login';
// import Form from './components/form'
// // import other components like Home, Form, etc.

// function App() {
//   const [page, setPage] = useState('login'); // initial page set to 'register'

//   const renderPage = () => {
//     switch (page) {
//       case 'login':
//         return <Login setPage={setPage} />;
//       case 'register':
//         return <Register setPage={setPage} />;
//        case 'home':
//        return <Form setPage={setPage} />;
//       // case 'form':
//       //   return <Form setPage={setPage} />;
//       default:
//         return <Register setPage={setPage} />;
//     }
//   };

//   return (
//     <div className="App">
//       {renderPage()}
//     </div>
//   );
// }

// export default App;












// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from './firebase';
// import './components/Register';



// export default function Register({ setPage }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateEmail(username)) {
//       setError('Invalid email format');
//       return;
//     }

//     createUserWithEmailAndPassword(auth, username, password)
//       .then(() => {
//         setPage('login');
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   };

//   return (
//     <div className="register-container">
//       <video autoPlay loop muted className="video-background">
//         <source src="/assets/5561389-uhd_3840_2160_25fps.mp4" type="video/mp4" />
//       </video>
//       <form onSubmit={handleSubmit} className="register-form">
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Username"
//           className="register-input"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           className="register-input"
//         />
//         <button type="submit" className="register-button">Register</button>
//         <button type="button" onClick={() => setPage('login')} className="back-to-login-button">Back to Login</button>
//         {error && <p className="error-message">{error}</p>}
//       </form>
//     </div>
//   );
// }









// import React, { useState } from "react";
// import "./App.css";
// import TodoForm from "./components/Form";
// import TodoItem from "./components/Item";


// function App() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (text) => {
//     let id = 1;
//     if(todos.length > 0) {
//       id = todos[0].id + 1
//     }
//     let todo = {id: id, text: text, completed: false, important: false}
//     let newTodos = [todo, ...todos]
//     setTodos(newTodos)
//   };

//   const removeTodo = (id) => {
//     let updatedTodos = [...todos].filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   const completeTodo = (id) => {
//     let updatedTodos = todos.map((todo) => {
//       if(todo.id === id) {
//         todo.completed = !todo.completed
//       }
//       return todo
//     })
//     setTodos(updatedTodos)
//   }

//   const importantTodo = (id) => {
//     let updatedTodos = todos.map((todo) => {
//       if(todo.id === id) {
//         todo.important = !todo.important
//       }
//       return todo
//     })

//     setTodos(updatedTodos)
//   }
//   let sortedTodos = todos.sort((a, b) => b.important - a.important)
//   return (
//     <div className="todo-app">
//       <h1>Todo List</h1>
//       <TodoForm addTodo={addTodo} />
//       <hr className="seperator"/>
//       {sortedTodos.map((todo) => {
//         return (
//           <TodoItem removeTodo={removeTodo} completeTodo={completeTodo} importantTodo={importantTodo} todo={todo} key={todo.id}/>
//         )
//       })}
//     </div>
//   );
// }

// export default App;
