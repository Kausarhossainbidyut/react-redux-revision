import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "./App.css"

const App = () => {
  let foodItem = ["dal", "green vegrafd", "adfa", "adflkja", "akdfla"];
  // let foodItem = []

  return (
    <>
      <h1 className="food-heading item-khb">Healthy Food</h1>
      <ErrorMessage items={foodItem}></ErrorMessage>
      <FoodItems items={foodItem}></FoodItems>
    </>
  );
};

export default App;
