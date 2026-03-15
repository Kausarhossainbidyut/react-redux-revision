import React from "react";
import Item from "./Item";

const FoodItems = ({items}) => {

  return (
    <ul className="list-group">
      {items.map((items) => (
        <Item key={items} fooditem={items}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
