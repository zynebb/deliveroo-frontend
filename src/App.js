import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import logo from "./images/logo.svg";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
      <div className="body">
        <div>
          {data.categories.map((categorie, index) => {
            return (
              <div key={index}>
                <h3>{categorie.name}</h3>
                <ul className="meal">
                  {categorie.meals.map((meal, index) => {
                    return (
                      <li key={index}>
                        <div className="meals">
                          <div>
                            <p className="title"> {meal.title}</p>
                            <p className="description">{meal.description}</p>
                            <span className="price">{meal.price} €</span>

                            <span className="star">
                              {meal.popular && <i className="fas fa-star"> </i>}

                              {meal.popular && " populaire"}
                            </span>
                          </div>
                          <span>
                            {meal.picture && <img src={meal.picture} alt="" />}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
