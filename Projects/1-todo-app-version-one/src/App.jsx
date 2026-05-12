import React from 'react';
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItem1 from './components/TodoItem1';
import TodoItem2 from './components/TodoItem2';
import './App.css'
const App = () => {
  return (
    <div className="todo-container text-center">
      <AppName />
      <div className="items-container">
        <AddTodo />
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </div>
  );
};

export default App;