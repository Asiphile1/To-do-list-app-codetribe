import React, { useState } from "react";
import Form from "./components/Form";
import Login from "./components/Login";

export default function App() {
  const [page, setPage] = useState("login"); // State to track the current page
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]); // Append the new task
  };

  // Function to remove a todo by ID
  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Function to mark a todo as complete
  const completeTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to update the importance of a todo
  const updateImportance = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              importance:
                todo.importance === "low"
                  ? "medium"
                  : todo.importance === "medium"
                  ? "high"
                  : "low",
            }
          : todo
      )
    );
  };

  // Render different components based on the current page
  return (
    <div>
      {page === "login" ? (
        <Login setPage={setPage} />
      ) : (
        <Form
          todos={todos}
          setTodos={setTodos}
          addTodo={addTodo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          updateImportance={updateImportance}
          setPage={setPage} // Pass the setPage function to navigate back to login
        />
      )}
    </div>
  );
}















// import React, { useState } from "react";
// import Form from "./components/Form"

// export default function App() {
//   const [todos, setTodos] = useState([]);

//   // Function to add a new todo
//   const addTodo = (newTodo) => {
//     setTodos((prevTodos) => [...prevTodos, newTodo]); // Append the new task
//   };

//   // Function to remove a todo by ID
//   const removeTodo = (id) => {
//     setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
//   };

//   // Function to mark a todo as complete
//   const completeTodo = (id) => {
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   // Function to update the importance of a todo
//   const updateImportance = (id) => {
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) =>
//         todo.id === id
//           ? {
//               ...todo,
//               importance:
//                 todo.importance === "low"
//                   ? "medium"
//                   : todo.importance === "medium"
//                   ? "high"
//                   : "low",
//             }
//           : todo
//       )
//     );
//   };

//   return (
//     <div>
//       <Form
//         todos={todos}
//         setTodos={setTodos}
//         addTodo={addTodo}
//         removeTodo={removeTodo}
//         completeTodo={completeTodo}
//         updateImportance={updateImportance}
//         setPage={() => console.log("Navigating to login...")} // 
//       />
//     </div>
//   );
// }










// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, CssBaseline } from '@mui/material';
// import Register from './components/Register';
// import Login from './components/Login';
// import Form from './components/Form';
// import './App.css';

// function App() {
//   const [page, setPage] = useState('login');
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/todos')
//       .then(response => {
//         setTodos(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching todos:', error);
//       });
//   }, []);

//   const addTodo = (task) => {
//     const newTodo = {
//       task,
//       completed: false,
//       importance: 'none',
//     };
//     axios.post('http://localhost:5000/todos', newTodo)
//       .then(response => {
//         setTodos([...todos, response.data]);
//       })
//       .catch(error => {
//         console.error('Error adding todo:', error);
//       });
//   };

//   const removeTodo = (id) => {
//     axios.delete(`http://localhost:5000/todos/${id}`)
//       .then(() => {
//         setTodos(todos.filter(t => t.id !== id));
//       })
//       .catch(error => {
//         console.error('Error removing todo:', error);
//       });
//   };

//   const completeTodo = (id) => {
//     const todoToUpdate = todos.find(t => t.id === id);
//     const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };
//     axios.put(`http://localhost:5000/todos/${id}`, updatedTodo)
//       .then(response => {
//         setTodos(todos.map(t => t.id === id ? response.data : t));
//       })
//       .catch(error => {
//         console.error('Error updating todo:', error);
//       });
//   };

//   const updateImportance = (id, importance) => {
//     const todoToUpdate = todos.find(t => t.id === id);
//     const updatedTodo = { ...todoToUpdate, importance };
//     axios.put(`http://localhost:5000/todos/${id}`, updatedTodo)
//       .then(response => {
//         setTodos(todos.map(t => t.id === id ? response.data : t));
//       })
//       .catch(error => {
//         console.error('Error updating importance:', error);
//       });
//   };

//   const renderPage = () => {
//     switch (page) {
//       case 'login':
//         return <Login setPage={setPage} />;
//       case 'register':
//         return <Register setPage={setPage} />;
//       case 'home':
//         return <Form setPage={setPage} addTodo={addTodo} todos={todos} setTodos={setTodos} removeTodo={removeTodo} completeTodo={completeTodo} updateImportance={updateImportance} />;
//       default:
//         return <Register setPage={setPage} />;
//     }
//   };

//   return (
//     <Container component="main">
//       <CssBaseline />
//       {renderPage()}
//     </Container>
//   );
// }

// export default App;





































// import React, { useState } from 'react';
// import Register from './components/Register';
// import Login from './components/Login';
// import Form from './components/Form'; 
// import './App.css'; // Import your App.css or any global styles

// function App() {
//   const [page, setPage] = useState('login'); 
//   const [todos, setTodos] = useState([]);

//   const addTodo = (task) => {
//     const newTodo = {
//       id: Date.now(),
//       task,
//       completed: false,

//       importance: 'none',
//     };
//     setTodos([...todos, newTodo]);
//   };

//   const renderPage = () => {
//     switch (page) {
//       case 'login':
//         return <Login setPage={setPage} />;
//       case 'register':
//         return <Register setPage={setPage} />;
//       case 'home':
//         return <Form setPage={setPage} addTodo={addTodo} todos={todos} setTodos={setTodos} />;
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


