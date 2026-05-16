import React from "react";
import TodoItem from "./TodoItem";
import style from './TodoItems.module.css'

const TodoItems = ({ todoItem }) => {
  console.log(todoItem);

  return (
    <div className={style.itemsContainer}>
      {todoItem.map((item, index) => (
        <TodoItem key={index} todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
