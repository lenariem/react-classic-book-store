import React from 'react';
import './Cart.css';

export default function Cart(props) {
    const {quantity=0, toggleCartDisplay=Function.prototype} = props;
    return (
        <div className="cart white-text deep-purple darken-2" onClick={toggleCartDisplay} title="show your order">
             <i className="material-icons">shopping_cart</i>
             {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    )
}
