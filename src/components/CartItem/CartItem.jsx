import React from "react";
import "./CartItem.css";

export default function CartItem({
  id,
  title,
  price,
  image,
  quantity,
  deleteFromCart,
}) {
  return (
    <li className="collection-item avatar">
      <img src={image} alt={title} className="circle" />
      <span className="title">{title}</span>
      <p>
        {price} x {quantity} = {(+price.slice(1) * +quantity).toFixed(2)}$
      </p>
      <span
        className="secondary-content"
        title="delete from your cart"
        onClick={() => deleteFromCart(id)}
      >
        <i className="material-icons item-delete-icon">delete</i>
      </span>
    </li>
  );
}
