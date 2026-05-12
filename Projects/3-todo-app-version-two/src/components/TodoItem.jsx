import React from "react";

const TodoItem = ({ todoName, todoDate }) => {
  return (
    <div class="container">
      <div className="row kg-row todo-item-margin">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button class="btn btn-danger kg-button">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
