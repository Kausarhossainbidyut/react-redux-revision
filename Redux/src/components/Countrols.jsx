import { useRef } from "react";
import { useDispatch } from "react-redux";
const Countrols = () => {
  const inputElement = useRef()
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: INCREMENT });
  };

  const handleDecrement = () => {
    dispatch({ type: DECREMENT });
  };
  const handleAdd = () => {
    
    dispatch({ type: ADD , payload:{
      num:inputElement.current.value
    }});
    inputElement.current.value = ''
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button onClick={handleIncrement} type="button" class="btn btn-primary">
          +1
        </button>
        <button onClick={handleDecrement} type="button" class="btn btn-success">
          -1
        </button>
        {/* <button type="button" class="btn btn-danger">
          Danger
        </button>
        <button type="button" class="btn btn-warning">
          Warning
        </button>
        <button type="button" class="btn btn-info">
          Info
        </button>
        <button type="button" class="btn btn-light">
          Light
        </button>
        <button type="button" class="btn btn-dark">
          Dark
        </button>

        <button type="button" class="btn btn-link">
          Link
        </button> */}
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
        <input type="text" placeholder="Enter Number" ref={inputElement} />
        <button onClick={handleAdd} type="button" class="btn btn-info">
          Add
        </button>
        <button type="button" class="btn btn-danger">
          Subtract
        </button>
        {/* 
        <button type="button" class="btn btn-warning">
          Warning
        </button>
        <button type="button" class="btn btn-info">
          Info
        </button>
        <button type="button" class="btn btn-light">
          Light
        </button>
        <button type="button" class="btn btn-dark">
          Dark
        </button>

        <button type="button" class="btn btn-link">
          Link
        </button> */}
      </div>
    </>
  );
};

export default Countrols;
