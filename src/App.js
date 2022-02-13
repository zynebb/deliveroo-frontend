import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import logo from "./images/logo.svg";
import reactDom from "react-dom";
import Category from "./Component/Category";
import Cart from "./Component/Cart";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [carts, setCart] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      " https://deliveroo-backend-zyneb.herokuapp.com/"
    );
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="deliveroo">
      <div className="header">
        <span>
          <img className="logo" src={logo} alt="" />
        </span>{" "}
      </div>
      <div className="banniere">
        <span>
          <h2>{data.restaurant.name}</h2>

          <p>{data.restaurant.description} </p>
        </span>
        <span>
          {" "}
          <img
            src="https://f.roocdn.com/images/menus/17697/header-image.jpg"
            alt=""
          />
        </span>
      </div>
      <div className="main">
        <div className="body">
          {data.categories.map((categorie, index) => {
            return (
              categorie.meals.length > 0 && (
                <Category
                  categorie={categorie}
                  index={categorie.name}
                  carts={carts}
                  setCart={setCart}
                />
              )
            );
          })}
        </div>{" "}
        <div>
          <Cart setCart={setCart} carts={carts} />
        </div>
      </div>
    </div>
  );
}

export default App;
