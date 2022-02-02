import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import logo from "./images/logo.svg";
import reactDom from "react-dom";
import Category from "./Component/Category";
// import Cart from "./Component/Cart";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [carts, setCart] = useState([]);
  let total = 0;
  for (let i = 0; i < carts.length; i++) {
    total = total + Number(carts[i].price) * carts[i].quantity;
  }
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
        </div>
        <div
          className="cart"
          style={{
            borderRadius: 5,
            backgroundColor: "white",
            height: 190,
            width: 350,
            marginTop: 30,
            marginRight: 60,
            borderRadius: 5,
          }}
        >
          <button style={{ height: 50, width: 320, margin: 10 }}>
            valider mon panier
          </button>
          <div
            style={{
              fontWeight: "lighter",
              color: "grey",
              textAlign: "center",
              marginTop: 50,
            }}
          >
            {" "}
            Votre panier est vide
          </div>
          {carts.map((cart, index) => {
            return (
              <div>
                <button
                  onClick={() => {
                    let newCarts = [...carts];
                    if (newCarts[index].quantity === 1) {
                      newCarts.splice(index, 1);
                    } else {
                      newCarts[index].quantity--;
                    }

                    setCart(newCarts);
                  }}
                >
                  -
                </button>
                {cart.quantity}{" "}
                <button
                  onClick={() => {
                    let newCarts = [...carts];

                    newCarts[index].quantity++;
                    setCart(newCarts);
                  }}
                >
                  +
                </button>{" "}
                {cart.title}
              </div>
            );
          })}
          Total : {total.toFixed(2)} €
        </div>
      </div>
    </div>
  );
}

export default App;
