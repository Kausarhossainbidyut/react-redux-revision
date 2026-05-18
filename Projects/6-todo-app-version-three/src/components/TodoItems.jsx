import React from "react";
import TodoItem from "./TodoItem";
import style from './TodoItems.module.css'

const TodoItems = ({ todoItem,onDeleteClick }) => {

  return (
    <div className={style.itemsContainer}>
      {todoItem.map((item, index) => (
        <TodoItem key={index} todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
