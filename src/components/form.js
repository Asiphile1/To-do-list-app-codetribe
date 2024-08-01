import React, { useState } from "react";
import { Box, Button, TextField } from '@mui/material';
import './form.css';
import Item from './Item';

export default function Form({ setPage, addTodo, todos, removeTodo, completeTodo, updateImportance }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    addTodo(input);
    setInput("");
  };

  return (
    <Box sx={{ textAlign: 'center', p: 3 }}>
      <video autoPlay loop muted className="video-background">
        <source src="/assets/5561389-uhd_3840_2160_25fps.mp4" type="video/mp4" />
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
        <Button type="submit" variant="contained" color="primary" className="todo-button">Add Task</Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Item 
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            updateImportance={updateImportance}
          />
        ))}
      </ul>
      <Button onClick={() => setPage('login')} variant="contained" color="secondary" className="logout-button">Logout</Button>
    </Box>
  );
}
