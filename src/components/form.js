import React, { useState } from "react";
import './form.css';
import Item from './Item'; // Make sure Item is imported

export default function Form({ setPage, addTodo, todos, setTodos }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    addTodo(input);
    setInput("");
  };

  return (
    <div>
      <video autoPlay loop muted className="video-background">
        <source src="/assets/5561389-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="todo-input"
          placeholder="Please type what must be done"
        />
        <button type="submit" className="todo-button">Add Task</button>
      </form>
      <button onClick={() => setPage('login')} className="logout-button">Logout</button>

      <ul>
        {todos.map(todo => (
          <Item 
            key={todo.id}
            todo={todo}
            removeTodo={(id) => setTodos(todos.filter(t => t.id !== id))}
            completeTodo={(id) => {
              const updatedTodos = todos.map(t => {
                if (t.id === id) {
                  return { ...t, completed: !t.completed };
                }
                return t;
              });
              setTodos(updatedTodos);
            }}
            importantTodo={(id) => {
              const updatedTodos = todos.map(t => {
                if (t.id === id) {
                  return { ...t, important: !t.important };
                }
                return t;
              });
              setTodos(updatedTodos);
            }}
          />
        ))}
      </ul>
      
    </div>
  );
}





































// import React, { useState } from "react";
// import './form.css';


// export default function Form({ setPage, addTodo, todos }) {
//   const [input, setInput] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (input.trim() === '') return;
//     addTodo(input);
//     setInput("");
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
//           <li key={todo.id}>{todo.task}</li>
//         ))}
//       </ul>
// //     </div>
// //   );
// }


































// import React, { useState } from "react";
// import './form.css';

// export default function TodoForm(props) {
//   const [input, setInput] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     props.addTodo(input)
//     setInput("")
//   }

//   return (
//     <div>
//        <video autoPlay loop muted className="video-background">
//         <source src="/assets/5561389-uhd_3840_2160_25fps.mp4" type="video/mp4" />
//       </video>
//       <form onSubmit={handleSubmit} className="todo-form">

//     <input
//       value={input}
//       onChange={(e) => setInput(e.target.value)}
//       className="todo-input"
//       placeholder="Please type what must be done"
//     />
//     <button type="submit" className="todo-button">Add Task</button>
//   </form></div>
    
//   );
// }
