import React from "react";
import "./GoodsList.css";
import GoodItem from "../GoogItem/GoodItem";

export default function GoodsList({ goods = [], addToCart=Function.prototype }) {
  if (!goods.length) {
    return <h3>No goods in shop now</h3>;
  }

  return (
      <div className="goods">
          {goods.map(item => ( 
              <GoodItem key={item.isbn13} {...item} addToCart={addToCart}/>
          ))}
      </div>
  );
}

