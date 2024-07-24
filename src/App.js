import React, { useState } from "react";
import TodoForm from "./components/form";
import TodoItem from "./components/Item";
import Login from "./components/login";
import Register from "./components/Register";

function App() {
  const [page, setPage] = useState("login");
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { id: Date.now(), text, completed: false, important: false }];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    setTodos(newTodos);
  };

  const importantTodo = (id) => {
    const newTodos = todos.map(todo => todo.id === id ? { ...todo, important: !todo.important } : todo);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      {page === "login" && <Login setPage={setPage} />}
      {page === "register" && <Register setPage={setPage} />}
      {page === "home" && (
        <>
          <TodoForm addTodo={addTodo} />
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
              importantTodo={importantTodo}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default App;















// import React, { useState } from "react";
// import "./App.css";
// import TodoForm from "./components/Form";
// import TodoItem from "./components/Item";


// function App() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (text) => {
//     let id = 1;
//     if(todos.length > 0) {
//       id = todos[0].id + 1
//     }
//     let todo = {id: id, text: text, completed: false, important: false}
//     let newTodos = [todo, ...todos]
//     setTodos(newTodos)
//   };

//   const removeTodo = (id) => {
//     let updatedTodos = [...todos].filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   const completeTodo = (id) => {
//     let updatedTodos = todos.map((todo) => {
//       if(todo.id === id) {
//         todo.completed = !todo.completed
//       }
//       return todo
//     })
//     setTodos(updatedTodos)
//   }

//   const importantTodo = (id) => {
//     let updatedTodos = todos.map((todo) => {
//       if(todo.id === id) {
//         todo.important = !todo.important
//       }
//       return todo
//     })

//     setTodos(updatedTodos)
//   }
//   let sortedTodos = todos.sort((a, b) => b.important - a.important)
//   return (
//     <div className="todo-app">
//       <h1>Todo List</h1>
//       <TodoForm addTodo={addTodo} />
//       <hr className="seperator"/>
//       {sortedTodos.map((todo) => {
//         return (
//           <TodoItem removeTodo={removeTodo} completeTodo={completeTodo} importantTodo={importantTodo} todo={todo} key={todo.id}/>
//         )
//       })}
//     </div>
//   );
// }

// export default App;
