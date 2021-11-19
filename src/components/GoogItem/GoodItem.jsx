import React, { useState } from "react";
import "./GoodItem.css";

export default function GoodItem(props) {
  const {
    isbn13: id,
    title = "No Info",
    subtitle = "No description",
    image = "No Book Cover available",
    price = "No Info",
    addToCart = Function.prototype,
  } = props;

  const [btnText, setBtnText] = useState("About Book");

  const handleAboutBook = () => {
    if (btnText === "About Book") {
      setBtnText(<i className="material-icons">keyboard_backspace</i>);
    } else {
      setBtnText("About Book");
    }
  };

  return (
    <div className="card">
      {btnText === "About Book" ? (
        <>
          <div className="card-image">
            <img src={image} alt={title} />
          </div>
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{subtitle}</p>
          </div>
        </>
      ) : (
        <>
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p>Author</p>
          </div>
        </>
      )}

      <button
        className="btn deep-purple accent-2 moreBtn"
        onClick={handleAboutBook}
      >
        {btnText}
      </button>
      <div className="card-action">
        <span className="card-price">{price}</span>
        <button
          className="btn right cyan"
          onClick={() => addToCart({ id, title, price, image })}
        >
          Buy
        </button>
      </div>
    </div>
  );
}
