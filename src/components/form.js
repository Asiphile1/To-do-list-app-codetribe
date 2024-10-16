import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import "./form.css";
import Item from "./Item";

export default function Form({
  setPage,
  addTodo,
  todos,
  setTodos,
  removeTodo,
  completeTodo,
  updateImportance,
}) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    addTodo(input);
    setInput("");
  };

  return (
    <Box sx={{ textAlign: "center", p: 3 }}>
      <video autoPlay loop muted className="video-background">
        <source
          src="/assets/5561389-uhd_3840_2160_25fps.mp4"
          type="video/mp4"
        />
      </video>
      <form onSubmit={handleSubmit} className="todo-form">
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="todo-input"
          placeholder="Please type what must be done"
          variant="outlined"
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="todo-button"
        >
          Add Task
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Item
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            updateImportance={updateImportance}
          />
        ))}
      </ul>
      <Button
        onClick={() => setPage("login")}
        variant="contained"
        color="secondary"
        className="logout-button"
      >
        Logout
      </Button>
    </Box>
  );
}

// import React, { useState } from "react";
// import './form.css';
// import Item from './Item'; // Make sure Item is imported

// export default function Form({ setPage, addTodo, todos, setTodos }) {
//   const [input, setInput] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (input.trim() === '') return;
//     addTodo(input);
//     setInput("");
//   };

//   const updateImportance = (id, importance) => {
//     const updatedTodos = todos.map(todo => {
//       if (todo.id === id) {
//         return { ...todo, importance };
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <video autoPlay loop muted className="video-background">
//         <source src="/assets/5561389-uhd_3840_2160_25fps.mp4" type="video/mp4" />
//       </video>
//       <form onSubmit={handleSubmit} className="todo-form">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="todo-input"
//           placeholder="Please type what must be done"
//         />
//         <button type="submit" className="todo-button">Add Task</button>
//       </form>
//       <ul>
//         {todos.map(todo => (
//           <Item
//             key={todo.id}
//             todo={todo}
//             removeTodo={(id) => setTodos(todos.filter(t => t.id !== id))}
//             completeTodo={(id) => {
//               const updatedTodos = todos.map(t => {
//                 if (t.id === id) {
//                   return { ...t, completed: !t.completed };
//                 }
//                 return t;
//               });
//               setTodos(updatedTodos);
//             }}
//             updateImportance={updateImportance}
//           />
//         ))}
//       </ul>
//       <button onClick={() => setPage('login')} className="logout-button">Logout</button>
//     </div>
//   );
// }
