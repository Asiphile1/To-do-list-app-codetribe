
import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItems';
import { getTodos } from '../services/db';

import { Container, Button, Typography } from '@mui/material';

const Home = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const fetchedTodos = await getTodos();
    setTodos(fetchedTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Container>
      <Typography variant="h4">To-Do List</Typography>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} refreshTodos={fetchTodos} />
      ))}
      <Button variant="contained" color="primary">Add New Todo</Button>
    </Container>
  );
};

export default Home;
























// import React, { useState, useEffect } from 'react';
// import { getTodos, addTodo, deleteTodo, updateTodo } from '../services/db';
// import TodoItem from './TodoItem';
// import { TextField, Button, Container, Typography, Select, MenuItem } from '@mui/material';

// const Home = () => {
//   const [todos, setTodos] = useState([]);
//   const [description, setDescription] = useState('');
//   const [priority, setPriority] = useState('Low');

//   useEffect(() => {
//     async function fetchTodos() {
//       const todos = await getTodos();
//       setTodos(todos);
//     }
//     fetchTodos();
//   }, []);

//   const handleAddTodo = async () => {
//     await addTodo(description, priority);
//     const todos = await getTodos();
//     setTodos(todos);
//     setDescription('');
//     setPriority('Low');
//   };

//   return (
//     <Container>
//       <Typography variant="h4">Todo List</Typography>
//       <TextField label="Task Description" fullWidth value={description} onChange={(e) => setDescription(e.target.value)} />
//       <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
//         <MenuItem value="High">High</MenuItem>
//         <MenuItem value="Medium">Medium</MenuItem>
//         <MenuItem value="Low">Low</MenuItem>
//       </Select>
//       <Button onClick={handleAddTodo} variant="contained" color="primary">Add</Button>
//       <div>
//         {todos.map(todo => (
//           <TodoItem key={todo[0]} todo={todo} setTodos={setTodos} />
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default Home;
