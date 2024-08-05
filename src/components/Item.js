import React from 'react';

import { RiCloseCircleLine } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi";
import './Item.css';

export default function TodoItem(props) {
  const { todo, removeTodo, completeTodo, updateImportance } = props;

  return (
    <div 
      className={`todo-row ${todo.completed ? 'complete' : ''}`}
      style={{ background: todo.importance === 'red' ? 'red' : todo.importance === 'orange' ? 'orange' : '' }}
    >
      {todo.task}
      <div className="iconsContainer">
        <button 
          onClick={() => updateImportance(todo.id, 'orange')} 
          onDoubleClick={() => updateImportance(todo.id, 'red')} 
          className="important-btn"
        >
          !
        </button>
        <RiCloseCircleLine style={{ marginRight: 5 }} onClick={() => removeTodo(todo.id)}/>
        <BiCheckCircle onClick={() => completeTodo(todo.id)}/>
      </div>
    </div>
  );
}
