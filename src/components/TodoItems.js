
import React, { useState } from 'react';
import { TextField, Button, Container, MenuItem, Select } from '@mui/material';
import { updateTodo, deleteTodo } from '../services/db'


const TodoItem = ({ todo, refreshTodos }) => {
  const [description, setDescription] = useState(todo.description);
  const [priority, setPriority] = useState(todo.priority);

  const handleUpdate = async () => {
    await updateTodo(todo.id, description, priority);
    refreshTodos();
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
    refreshTodos();
  };

  return (
    <Container>
      <TextField value={description} onChange={(e) => setDescription(e.target.value)} />
      <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <MenuItem value="High">High</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
        <MenuItem value="Low">Low</MenuItem>
      </Select>
      <Button onClick={handleUpdate} variant="contained" color="secondary">Update</Button>
      <Button onClick={handleDelete} variant="contained" color="default">Delete</Button>
    </Container>
  );
};

export default TodoItem;










// import React, { useState } from 'react';
// import { deleteTodo, updateTodo, getTodos } from '../services/db';
// import { TextField, Button, Select, MenuItem, Container } from '@mui/material';

// const TodoItem = ({ todo, setTodos }) => {
//   const [description, setDescription] = useState(todo[1]);
//   const [priority, setPriority] = useState(todo[2]);

//   const handleUpdate = async () => {
//     await updateTodo(todo[0], description, priority);
//     const todos = await getTodos();
//     setTodos(todos);
//   };

//   const handleDelete = async () => {
//     await deleteTodo(todo[0]);
//     const todos = await getTodos();
//     setTodos(todos);
//   };

//   return (
//     <Container style={{ backgroundColor: priorityColor(priority), marginBottom: '10px', padding: '10px', borderRadius: '5px' }}>
//       <TextField value={description} onChange={(e) => setDescription(e.target.value)} />
//       <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
//         <MenuItem value="High">High</MenuItem>
//         <MenuItem value="Medium">Medium</MenuItem>
//         <MenuItem value="Low">Low</MenuItem>
//       </Select>
//       <Button onClick={handleUpdate} variant="contained" color="secondary">Update</Button>
//       <Button onClick={handleDelete} variant="contained" color="default">Delete</Button>
//     </Container>
//   );
// };

// const priorityColor = (priority) => {
//   switch (priority) {
//     case 'High':
//       return 'red';
//     case 'Medium':
//       return 'yellow';
//     case 'Low':
//       return 'green';
//     default:
//       return 'white';
//   }
// };

// export default TodoItem;
