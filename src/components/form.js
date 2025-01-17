import React, { useState } from "react";
import { Box, Button, TextField, Select, MenuItem } from "@mui/material";
import "./form.css";
import Item from "./Item";

export default function Form({
  setPage,
  addTodo,
  todos,
  removeTodo,
  completeTodo,
  updateImportance,
}) {
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("low"); // Default priority

  // Function to add a new todo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    const newTodo = {
      id: Date.now(), // Unique ID
      task: input,
      importance: priority,
      completed: false,
    };
    addTodo(newTodo); // Add the new task
    setInput(""); // Reset input field
    setPriority("low"); // Reset priority
  };

  return (
    <Box sx={{ position: "relative", height: "100vh", width: "100%" }}>
      <video autoPlay loop muted className="video-background">
        <source src="/assets/5561389-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>

      <Box
        sx={{
          position: "absolute", // Position the form relative to the viewport
          top: "50%", // Vertically center
          left: "50%", // Horizontally center
          transform: "translate(-50%, -50%)", // Adjust for true center alignment
          textAlign: "center",
          p: 3,
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.7)",
          maxWidth: "600px",
          width: "100%", // Responsive width
        }}
      >
        <form onSubmit={handleSubmit} className="todo-form">
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="todo-input"
            placeholder="Please type what must be done"
            variant="outlined"
            fullWidth
          />
          <Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="priority-select"
            sx={{ marginLeft: 2 }}
          >
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="high">High</MenuItem>
          </Select>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="todo-button"
          >
            Add Task
          </Button>
        </form>
        <ul className="task-list">
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
    </Box>
  );
}









// import React, { useState } from "react";
// import { Box, Button, TextField, Select, MenuItem } from "@mui/material";
// import "./form.css";
// import Item from "./Item";

// export default function Form({
//   setPage,
//   addTodo,
//   todos,
//   setTodos,
//   removeTodo,
//   completeTodo,
//   updateImportance,
// }) {
//   const [input, setInput] = useState("");
//   const [priority, setPriority] = useState("low"); // Default priority

//   // Function to add a new todo with a unique ID
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (input.trim() === "") return;
//     addTodo({
//       id: Date.now(), // Unique ID for each task
//       task: input,
//       importance: priority,
//       completed: false,
//     });
//     setInput("");
//     setPriority("low"); // Reset priority
//   };

//   return (
//     <Box sx={{ textAlign: "center", p: 3 }}>
//       <video autoPlay loop muted className="video-background">
//         <source
//           // src="/assets/5561389-uhd_3840_2160_25fps.mp4"
//           type="video/mp4"
//         />
//       </video>
//       <form onSubmit={handleSubmit} className="todo-form">
//         <TextField
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="todo-input"
//           placeholder="Please type what must be done"
//           variant="outlined"
//           fullWidth
//         />
//         <Select
//           value={priority}
//           onChange={(e) => setPriority(e.target.value)}
//           className="priority-select"
//           sx={{ marginLeft: 2 }}
//         >
//           <MenuItem value="low">Low</MenuItem>
//           <MenuItem value="medium">Medium</MenuItem>
//           <MenuItem value="high">High</MenuItem>
//         </Select>
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           className="todo-button"
//         >
//           Add Task
//         </Button>
//       </form>
//       <ul className="task-list">
//         {todos.map((todo) => (
//           <Item
//             key={todo.id}
//             todo={todo}
//             removeTodo={removeTodo}
//             completeTodo={completeTodo}
//             updateImportance={updateImportance}
//           />
//         ))}
//       </ul>
//       <Button
//         onClick={() => setPage("login")}
//         variant="contained"
//         color="secondary"
//         className="logout-button"
//       >
//         Logout
//       </Button>
//     </Box>
//   );
// }






// import React, { useState } from "react";
// import { Box, Button, TextField, Select, MenuItem } from "@mui/material";
// import "./form.css";
// import Item from "./Item";

// export default function Form({
//   setPage,
//   addTodo,
//   todos,
//   setTodos,
//   removeTodo,
//   completeTodo,
//   updateImportance,
// }) {
//   const [input, setInput] = useState("");
//   const [priority, setPriority] = useState("low"); // Default priority

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (input.trim() === "") return;
//     addTodo({ task: input, importance: priority, completed: false }); // Pass priority
//     setInput("");
//     setPriority("low"); // Reset priority
//   };

//   return (
//     <Box sx={{ textAlign: "center", p: 3 }}>
//       <video autoPlay loop muted className="video-background">
//         <source
//           // src="/assets/5561389-uhd_3840_2160_25fps.mp4"
//           type="video/mp4"
//         />
//       </video>
//       <form onSubmit={handleSubmit} className="todo-form">
//         <TextField
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="todo-input"
//           placeholder="Please type what must be done"
//           variant="outlined"
//           fullWidth
//         />
//         <Select
//           value={priority}
//           onChange={(e) => setPriority(e.target.value)}
//           className="priority-select"
//           sx={{ marginLeft: 2 }}
//         >
//           <MenuItem value="low">Low</MenuItem>
//           <MenuItem value="medium">Medium</MenuItem>
//           <MenuItem value="high">High</MenuItem>
//         </Select>
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           className="todo-button"
//         >
//           Add Task
//         </Button>
//       </form>
//       <ul className="task-list">
//         {todos.map((todo) => (
//           <Item
//             key={todo.id}
//             todo={todo}
//             removeTodo={removeTodo}
//             completeTodo={completeTodo}
//             updateImportance={updateImportance}
//           />
//         ))}
//       </ul>
//       <Button
//         onClick={() => setPage("login")}
//         variant="contained"
//         color="secondary"
//         className="logout-button"
//       >
//         Logout
//       </Button>
//     </Box>
//   );
// }









// import React, { useState } from "react";
// import { Box, Button, TextField,  } from "@mui/material";
// import "./form.css";
// import Item from "./Item";

// export default function Form({
//   setPage,
//   addTodo,
//   todos,
//   setTodos,
//   removeTodo,
//   completeTodo,
//   updateImportance,
// }) {
//   const [input, setInput] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (input.trim() === "") return;
//     addTodo(input);
//     setInput("");
//   };

//   return (
//     <Box sx={{ textAlign: "center", p: 3 }}>
//       <video autoPlay loop muted className="video-background">
//         <source
//           // src="/assets/5561389-uhd_3840_2160_25fps.mp4"
//           type="video/mp4"
//         />
//       </video>
//       <form onSubmit={handleSubmit} className="todo-form">
//         <TextField
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="todo-input"
//           placeholder="Please type what must be done"
//           variant="outlined"
//           fullWidth
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           className="todo-button"
//         >
//           Add Task
//         </Button>
//       </form>
//       <ul>
//         {todos.map((todo) => (
//           <Item
//             key={todo.id}
//             todo={todo}
//             removeTodo={removeTodo}
//             completeTodo={completeTodo}
//             updateImportance={updateImportance}
//           />
//         ))}
//       </ul>
//       <Button
//         onClick={() => setPage("login")}
//         variant="contained"
//         color="secondary"
//         className="logout-button"
//       >
//         Logout
//       </Button>
//     </Box>
//   );
// }

// // import React, { useState } from "react";
// // import './form.css';
// // import Item from './Item'; // Make sure Item is imported

// // export default function Form({ setPage, addTodo, todos, setTodos }) {
// //   const [input, setInput] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (input.trim() === '') return;
// //     addTodo(input);
// //     setInput("");
// //   };

// //   const updateImportance = (id, importance) => {
// //     const updatedTodos = todos.map(todo => {
// //       if (todo.id === id) {
// //         return { ...todo, importance };
// //       }
// //       return todo;
// //     });
// //     setTodos(updatedTodos);
// //   };

// //   return (
// //     <div>
// //       <video autoPlay loop muted className="video-background">
// //         <source src="/assets/5561389-uhd_3840_2160_25fps.mp4" type="video/mp4" />
// //       </video>
// //       <form onSubmit={handleSubmit} className="todo-form">
// //         <input
// //           value={input}
// //           onChange={(e) => setInput(e.target.value)}
// //           className="todo-input"
// //           placeholder="Please type what must be done"
// //         />
// //         <button type="submit" className="todo-button">Add Task</button>
// //       </form>
// //       <ul>
// //         {todos.map(todo => (
// //           <Item
// //             key={todo.id}
// //             todo={todo}
// //             removeTodo={(id) => setTodos(todos.filter(t => t.id !== id))}
// //             completeTodo={(id) => {
// //               const updatedTodos = todos.map(t => {
// //                 if (t.id === id) {
// //                   return { ...t, completed: !t.completed };
// //                 }
// //                 return t;
// //               });
// //               setTodos(updatedTodos);
// //             }}
// //             updateImportance={updateImportance}
// //           />
// //         ))}
// //       </ul>
// //       <button onClick={() => setPage('login')} className="logout-button">Logout</button>
// //     </div>
// //   );
// // }
