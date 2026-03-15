import React from 'react';

const TodoItem2 = () => {
  let todoName = "Go to collage"
  let todoDate = "11/03/2026"
  return (
    <div class="container ">
      <div className="row kg-row">
        <div class="col-6">
          {todoName}
        </div>
        <div class="col-4">
          {todoDate}
        </div>
        <div class="col-2">
          <button class="btn btn-danger kg-button">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem2;