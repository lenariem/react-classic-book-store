import React from "react";
import "./CartItem.css";

export default function CartItem({title, price, image, quantity}) {
  return (
    <li className="collection-item avatar">
      <img src={image} alt={title} className="circle" />
      <span className="title">{title}</span>
      <p>
        {price} x {quantity}
      </p>
      <span className="secondary-content" title="delete from your cart">
        <i className="material-icons">close</i>
      </span>
    </li>
  );
}
