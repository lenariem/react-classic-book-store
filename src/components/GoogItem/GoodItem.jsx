import React, { useState } from "react";
import "./GoodItem.css";

export default function GoodItem(props) {
  const {
    isbn13: id,
    title = "No Info",
    subtitle = "No description",
    image = "No Book Cover available",
    price = "No Info",
    addToCart,
  } = props;

  const [btnText, setBtnText] = useState("About Book");
  const [singleBookData, setSingleBookData] = useState([]);
  const {authors,language, pages, year, desc } = singleBookData;
 
  const handleAboutBook = (bookId) => {
    if (btnText === "About Book") {
      setBtnText(<i className="material-icons">keyboard_backspace</i>);
    } else {
      setBtnText("About Book");
    }
   
    fetch(`https://api.itbook.store/1.0/books/${bookId}`)
      .then((response) => response.json())
      .then((data) => {
        data && setSingleBookData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  console.log(singleBookData)
  return (
    <div className="card">
      {btnText === "About Book" ? (
        <>
          <div className="card-image" title="About this book" onClick={() => handleAboutBook(id)} >
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
            <p><b>Author:</b> {authors}</p>
            <p><b>Language:</b> {language}</p>
            <p><b>Pages:</b> {pages}</p>
            <p><b>Year:</b> {year}</p>
            <p><b>Description:</b> {desc}</p>
          </div>
        </>
      )}

      <button
        className="btn deep-purple accent-2 moreBtn"
        onClick={() => handleAboutBook(id)}
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
