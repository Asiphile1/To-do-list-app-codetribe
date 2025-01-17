import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { RiCloseCircleLine } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi";
import "./Item.css";

export default function Item({ todo, removeTodo, completeTodo, updateImportance }) {

  if (!todo || typeof todo.task !== "string") {
    return null;
  }

  // Determine priority color based on importance
  const getPriorityColor = () => {
    switch (todo.importance) {
      case "high":
        return "red";
      case "medium":
        return "orange";
      case "low":
        return "green";
      default:
        return "blue";
    }
  };

  return (
    <Box
      className={`todo-row ${todo.completed ? "complete" : ""}`}
      sx={{
        backgroundColor: "grey", 
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "10px",
        color: getPriorityColor(),
      }}
    >
      <Typography variant="body1" component="div" sx={{ fontWeight: "bold" }}>
        {todo.task}
      </Typography>
      <Box className="iconsContainer">
        <IconButton
          onClick={() => updateImportance(todo.id)}
          className="important-btn"
          sx={{ color: getPriorityColor() }}
        >
          !
        </IconButton>
        <IconButton
          onClick={() => removeTodo(todo.id)}
          sx={{ color: "white", marginRight: 1 }}
        >
          <RiCloseCircleLine />
        </IconButton>
        <IconButton
          onClick={() => completeTodo(todo.id)}
          sx={{ color: "white" }}
        >
          <BiCheckCircle />
        </IconButton>
      </Box>
    </Box>
  );
}










// import React from "react";
// import { Box, IconButton, Typography } from "@mui/material";
// import { RiCloseCircleLine } from "react-icons/ri";
// import { BiCheckCircle } from "react-icons/bi";
// import "./Item.css";





// export default function Item({ todo, removeTodo, completeTodo, updateImportance }) {
//   if (!todo || typeof todo.task !== 'string') {
//       return null; // Safeguard against invalid todo objects
//   }

//   const getPriorityColor = () => {
//     switch (todo.importance) {
//       case "high":
//         return "red";
//       case "medium":
//         return "orange";
//       case "low":
//         return "green";
//       default:
//         return "blue";
//     }
//   };

//   return (
//     <Box
//       className={`todo-row ${todo.completed ? "complete" : ""}`}
//       sx={{
//         backgroundColor: "blue", // Blue container background
//         borderRadius: "8px",
//         padding: "10px",
//         marginBottom: "10px",
//         color: getPriorityColor(),
//       }}
//     >
//       <Typography variant="body1" component="div" sx={{ fontWeight: "bold" }}>
//         {todo.task}
//       </Typography>
//       <Box className="iconsContainer">
//         <IconButton
//           onClick={() => updateImportance(todo.id)}
//           className="important-btn"
//           sx={{ color: getPriorityColor() }}
//         >
//           !
//         </IconButton>
//         <IconButton
//           onClick={() => removeTodo(todo.id)}
//           sx={{ color: "white", marginRight: 1 }}
//         >
//           <RiCloseCircleLine />
//         </IconButton>
//         <IconButton
//           onClick={() => completeTodo(todo.id)}
//           sx={{ color: "white" }}
//         >
//           <BiCheckCircle />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// }

// export default function Item({ todo, removeTodo, completeTodo, updateImportance }) {
//   const getPriorityColor = () => {
//     switch (todo.importance) {
//       case "high":
//         return "red";
//       case "medium":
//         return "orange";
//       case "low":
//         return "green";
//       default:
//         return "blue";
//     }
//   };

//   return (
//     <Box
//       className={`todo-row ${todo.completed ? "complete" : ""}`}
//       sx={{
//         backgroundColor: "blue", // Blue container background
//         borderRadius: "8px",
//         padding: "10px",
//         marginBottom: "10px",
//         color: getPriorityColor(),
//       }}
//     >
//       <Typography variant="body1" component="div" sx={{ fontWeight: "bold" }}>
//         {todo.task}
//       </Typography>
//       <Box className="iconsContainer">
//         <IconButton
//           onClick={() => updateImportance(todo.id)}
//           className="important-btn"
//           sx={{ color: getPriorityColor() }}
//         >
//           !
//         </IconButton>
//         <IconButton
//           onClick={() => removeTodo(todo.id)}
//           sx={{ color: "white", marginRight: 1 }}
//         >
//           <RiCloseCircleLine />
//         </IconButton>
//         <IconButton
//           onClick={() => completeTodo(todo.id)}
//           sx={{ color: "white" }}
//         >
//           <BiCheckCircle />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// }











// import React from 'react';
// import { Box, IconButton, Typography } from '@mui/material';
// import { RiCloseCircleLine } from "react-icons/ri";
// import { BiCheckCircle } from "react-icons/bi";
// import './Item.css';

// export default function TodoItem(props) {
//   const { todo, removeTodo, completeTodo, updateImportance } = props;

//   const handleImportanceClick = () => {
//     if (todo.importance === 'none') {
//       updateImportance(todo.id, 'orange');
//     } else if (todo.importance === 'orange') {
//       updateImportance(todo.id, 'red');
//     } else {
//       updateImportance(todo.id, 'none');
//     }
//   };

//   return (
//     <Box 
//       className={`todo-row ${todo.completed ? 'complete' : ''}`}
//       sx={{ background: todo.importance === 'red' ? 'red' : todo.importance === 'orange' ? 'orange' : '' }}
//     >
//       <Typography variant="body1" component="div">
//         {todo.task}
//       </Typography>
//       <Box className="iconsContainer">
//         <IconButton 
//           onClick={handleImportanceClick} 
//           className="important-btn"
//           sx={{ color: 'white' }}
//         >
//           !
//         </IconButton>
//         <IconButton onClick={() => removeTodo(todo.id)} sx={{ color: 'white', marginRight: 1 }}>
//           <RiCloseCircleLine />
//         </IconButton>
//         <IconButton onClick={() => completeTodo(todo.id)} sx={{ color: 'white' }}>
//           <BiCheckCircle />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// }

















// // import React from 'react';
// // import { RiCloseCircleLine } from "react-icons/ri";
// // import { BiCheckCircle } from "react-icons/bi";
// // import './Item.css';

// // export default function TodoItem(props) {
// //   const { todo, removeTodo, completeTodo, updateImportance } = props;

// //   return (
// //     <div 
// //       className={`todo-row ${todo.completed ? 'complete' : ''}`}
// //       style={{ background: todo.importance === 'red' ? 'red' : todo.importance === 'orange' ? 'orange' : '' }}
// //     >
// //       {todo.task}
// //       <div className="iconsContainer">
// //         <button 
// //           onClick={() => updateImportance(todo.id, 'orange')} 
// //           onDoubleClick={() => updateImportance(todo.id, 'red')} 
// //           className="important-btn"
// //         >
// //           !
// //         </button>
// //         <RiCloseCircleLine style={{ marginRight: 5 }} onClick={() => removeTodo(todo.id)}/>
// //         <BiCheckCircle onClick={() => completeTodo(todo.id)}/>
// //       </div>
// //     </div>
// //   );
// // }



















