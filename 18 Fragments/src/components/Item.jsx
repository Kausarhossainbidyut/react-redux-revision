import React from "react";
import style from "./Item.module.css";

const Item = ({ fooditem, bought, handleBuyButtonClick }) => {


  return (
    <li className={`list-group-item ${bought && 'active'}`}>
      <span> {fooditem}</span>
      <button
        className={`${style.button} btn btn-info`}
        onClick={handleBuyButtonClick}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
