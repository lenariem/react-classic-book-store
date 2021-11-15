import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../../config";
import "./Main.css";
import Preloader from "../Preloader/Preloader";

export default function Main() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  //get goods on componentDidMount
  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json)
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      {!loading ? <Preloader /> : <div>{goods}</div>}
    </main>
  );
}
