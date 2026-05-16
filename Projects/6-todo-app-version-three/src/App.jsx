import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";

const App = () => {
  const todoItem = [
    { name: "Buy Milk", dueDate: "4/10/2026" },
    { name: "Go to Collage", dueDate: "4/10/2026" },
  ];
  return (
    <div className="todo-container text-center">
      <AppName />
      <AddTodo />
      <TodoItems todoItem={todoItem}></TodoItems>
      
    </div>
  );
};

export default App;
