import React, { useState } from "react";
import './form.css';
import { addTodo as addTodoAPI, removeTodo, updateTodo } from '../components/api';

export default function Form({ setPage, addTodo, todos }) {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    try {
      await addTodoAPI(input);
      addTodo(input);
      setInput("");
    } catch (error) {
      console.error('Error adding todo:', error);
    }
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
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}

