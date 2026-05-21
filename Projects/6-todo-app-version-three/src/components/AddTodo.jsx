import React, { useState } from "react";

const AddTodo = ({ onNewItems }) => {
  const [todoName, setTodoName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    console.log(event.target.value);
    
  };
  
  // comment 
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
    console.log(event.target.value);
  };

  const handleAddButtonClick = () =>{
    onNewItems(todoName, dueDate)
    setTodoName('')
    setDueDate('')
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={dueDate} />
        </div>
        <div className="col-2">
          <button
            className="btn btn-success kg-button"
            onClick={handleAddButtonClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
