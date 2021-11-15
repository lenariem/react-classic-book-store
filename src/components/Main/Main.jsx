import React, { useState, useEffect } from "react";
import { API_URL } from "../../config";
import "./Main.css";
import Preloader from "../Preloader/Preloader";
import GoodsList from "../GoodsList/GoodsList";

export default function Main() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  
  //get goods on componentDidMount
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        data.books && setGoods(data.books);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      {loading ? <Preloader /> : <div><GoodsList goods={goods}/></div>}
    </main>
  );
}
