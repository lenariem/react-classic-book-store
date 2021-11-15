import React from "react";
import "./CartList.css";
import CartItem from "../CartItem/CartItem";

export default function CartList({ order = [] }) {
  return (
    <div className="cartContainer">
      <ul class="collection">
        Your Cart:
        {order.length ? (
          order.map((item) => <CartItem key={item.id} {...item} />)
        ) : (
          <li className="collection-item avatar">
            <p>Your cart is empty</p>
          </li>
        )}
      </ul>
      <div>Total price: </div>
    </div>
  );
}
