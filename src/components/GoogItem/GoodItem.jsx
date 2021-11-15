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
        <span className="card-price">{price}</span>
        <button className="btn right deep-purple accent-2">Buy</button>
      </div>
    </div>
  );
}
