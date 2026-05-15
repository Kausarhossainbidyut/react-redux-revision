import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

const App = () => {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = ''
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems)
      console.log(newFoodItem);
    }
  };

  return (
    <Container>
      <h1 className="food-heading item-khb">Healthy Food</h1>
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems key={foodItems} items={foodItems}></FoodItems>
    </Container>
  );
};

export default App;
