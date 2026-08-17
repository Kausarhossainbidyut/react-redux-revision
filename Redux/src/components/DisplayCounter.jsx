import { useSelector } from "react-redux";

const DisplayCounter = () => {
   const counter = useSelector(stop => stop.counter)
  return (
    <>
      <p className="lead mb-4">
        Counter current value: {counter}
        
      </p>
    </>
  );
};

export default DisplayCounter;
