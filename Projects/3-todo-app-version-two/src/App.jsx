import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItem from "./components/TodoItem";

const App = () => {
  const todoItem = [
    { name: "Buy Milk", dueDate: "4/10/2026" },
    { name: "Go to Collage", dueDate: "4/10/2026" },
  ];
  return (
    <div className="todo-container text-center">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem todoDate="4/10/2026" todoName="Buy Milk"></TodoItem>
        <TodoItem todoDate="4/10/2026" todoName="Go to College"></TodoItem>
      </div>
    </div>
  );
};

export default App;
