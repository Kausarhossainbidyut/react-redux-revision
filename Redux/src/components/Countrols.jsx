import { useRef } from "react";
import { useDispatch } from "react-redux";

const Countrols = () => {
  const inputElement = useRef();
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    dispatch({ 
      type: "ADD", 
      payload: {
        num: Number(inputElement.current.value)
      }
    });
    inputElement.current.value = '';
  };

  const handleSubtract = () => {
    dispatch({ 
      type: "SUBTRACT", 
      payload: {
        num: Number(inputElement.current.value)
      }
    });
    inputElement.current.value = '';
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button onClick={handleIncrement} type="button" className="btn btn-primary">
          +1
        </button>
        <button onClick={handleDecrement} type="button" className="btn btn-success">
          -1
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
        <input type="text" placeholder="Enter Number" ref={inputElement} />
        <button onClick={handleAdd} type="button" className="btn btn-info">
          Add
        </button>
        <button onClick={handleSubtract} type="button" className="btn btn-danger">
          Subtract
        </button>
      </div>
    </>
  );
};

export default Countrols;
