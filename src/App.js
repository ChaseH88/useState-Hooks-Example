import React, { useState } from "react";
import './App.css';

// Individual To-do component
function Todo({ todo, index }) {
  return(
    <div className="todo">
      {todo.text}
    </div>
  )
}

// To-do Form Component
function TodoForm({ addTodo }){
  // state
  const [value, setValue] = useState("");

  // submit of the form
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return
    addTodo(value);
    setValue("");
  }

  // render
  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Enter To-do..."
      />
    </form>
  )
}

// Main Compononent
function App() {
  // state
  const [todos, setTodos] = useState([
    {
      text: "Learn about hooks",
      isCompleted: false
    },
    {
      text: "Hooks are awesome",
      isCompleted: false
    },
    {
      text: "Use state is really cool",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    // update the state
    setTodos(newTodos)
  }

  // render
  return(
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;