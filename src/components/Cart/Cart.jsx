import React from 'react';
import './Cart.css';

export default function Cart({quantity=0, toggleCartDisplay=Function.prototype}) {
    return (
        <div className="cart white-text deep-purple darken-2" onClick={toggleCartDisplay}>
             <i className="material-icons">shopping_cart</i>
             {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    )
}
