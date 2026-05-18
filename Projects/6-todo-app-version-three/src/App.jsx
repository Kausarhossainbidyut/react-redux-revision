import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

const App = () => {
  const FirstTodoItems = [
    { name: "Buy Milk", dueDate: "4/10/2026" },
    { name: "Go to Collage", dueDate: "4/10/2026" },
  ];
  const [todoItem, setTodoItem] = useState(FirstTodoItems)

  const handleNewItems =(itemName, dueDate) =>{
    console.log(itemName + "= " + dueDate);
    const newItems = [...FirstTodoItems, {name: itemName, dueDate: dueDate }]
    setTodoItem(newItems)
  }

  const handleDeleteItem = (todoItemName) =>{
    const newItems = todoItem.filter(item => item.name !== todoItemName)
    setTodoItem(newItems)
    console.log("Delete items= " + todoItemName);
    
  }

  return (
    <div className="todo-container text-center">
      <AppName />
      <AddTodo onNewItems={handleNewItems} />
      <WelcomeMessage todoItem={todoItem}></WelcomeMessage>
      <TodoItems todoItem={todoItem} onDeleteClick={handleDeleteItem}></TodoItems>
      
    </div>
  );
};

export default App;
