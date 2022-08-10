import { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import React from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const addTask = (userInput) => {
    if (userInput) {
      const newTodo = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  const handleToggole = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
      ),
    ]);
  };
  return (
    <div className="App">
      <header>
        <h1> Количество задач № {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            key={todo.id}
            todo={todo}
            removeTask={removeTask}
            toggleTask={handleToggole}
          />
        );
      })}
    </div>
  );
}

export default App;
