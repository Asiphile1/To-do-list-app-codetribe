import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { RiCloseCircleLine } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi";
import './Item.css';

export default function TodoItem(props) {
  const { todo, removeTodo, completeTodo, updateImportance } = props;

  const handleImportanceClick = () => {
    if (todo.importance === 'none') {
      updateImportance(todo.id, 'orange');
    } else if (todo.importance === 'orange') {
      updateImportance(todo.id, 'red');
    } else {
      updateImportance(todo.id, 'none');
    }
  };

  return (
    <Box 
      className={`todo-row ${todo.completed ? 'complete' : ''}`}
      sx={{ background: todo.importance === 'red' ? 'red' : todo.importance === 'orange' ? 'orange' : '' }}
    >
      <Typography variant="body1" component="div">
        {todo.task}
      </Typography>
      <Box className="iconsContainer">
        <IconButton 
          onClick={handleImportanceClick} 
          className="important-btn"
          sx={{ color: 'white' }}
        >
          !
        </IconButton>
        <IconButton onClick={() => removeTodo(todo.id)} sx={{ color: 'white', marginRight: 1 }}>
          <RiCloseCircleLine />
        </IconButton>
        <IconButton onClick={() => completeTodo(todo.id)} sx={{ color: 'white' }}>
          <BiCheckCircle />
        </IconButton>
      </Box>
    </Box>
  );
}

















// import React from 'react';
// import { RiCloseCircleLine } from "react-icons/ri";
// import { BiCheckCircle } from "react-icons/bi";
// import './Item.css';

// export default function TodoItem(props) {
//   const { todo, removeTodo, completeTodo, updateImportance } = props;

//   return (
//     <div 
//       className={`todo-row ${todo.completed ? 'complete' : ''}`}
//       style={{ background: todo.importance === 'red' ? 'red' : todo.importance === 'orange' ? 'orange' : '' }}
//     >
//       {todo.task}
//       <div className="iconsContainer">
//         <button 
//           onClick={() => updateImportance(todo.id, 'orange')} 
//           onDoubleClick={() => updateImportance(todo.id, 'red')} 
//           className="important-btn"
//         >
//           !
//         </button>
//         <RiCloseCircleLine style={{ marginRight: 5 }} onClick={() => removeTodo(todo.id)}/>
//         <BiCheckCircle onClick={() => completeTodo(todo.id)}/>
//       </div>
//     </div>
//   );
// }



















