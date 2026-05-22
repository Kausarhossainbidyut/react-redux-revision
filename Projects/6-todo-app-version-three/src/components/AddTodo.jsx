import React, {  useRef } from "react";

const AddTodo = ({ onNewItems }) => {
  // const [todoName, setTodoName] = useState('');
  // const [dueDate, setDueDate] = useState('');
  const todoNameElements = useRef();
  const dueDateElements = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);

  // };

  // comment
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElements.current.value;
    const dueDate = dueDateElements.current.value;
    console.log(todoName + " & " + dueDate);
    todoNameElements.current.value = "";
    dueDateElements.current.value = "";
    onNewItems(todoName, dueDate);

    // onNewItems(todoName, dueDate)
    // setTodoName('')
    // setDueDate('')
  };

  return (
    <div className="container">
      <form className="row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            ref={todoNameElements}
            type="text"
            placeholder="Enter Todo Here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElements}
            // onChange={handleDateChange}
            // value={dueDate}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
