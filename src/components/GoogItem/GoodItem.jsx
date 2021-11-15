import React from "react";
import "./GoodItem.css";

export default function GoodItem(props) {
  const {
    isbn13: id,
    title = "No Info",
    subtitle = "No Info",
    image,
    price = "No Info",
  } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>{subtitle}</p>
      </div>
      <div className="card-action">
        <span >{price}</span>
        <button className="btn right">Buy</button>
      </div>
    </div>
  );
}
