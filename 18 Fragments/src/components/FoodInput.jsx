import React from "react";
import style from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      className={style.foodInput}
      placeholder="Enter Food Item here"
      type="text"
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
