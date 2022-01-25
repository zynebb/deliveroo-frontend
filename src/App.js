import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import logo from "../src/images/logo.jpg";

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
        <h1>Deliveroo</h1>
        {/* <span>
          <img src="logo.jpg" alt="" />
        </span>{" "} */}
      </div>
      <div className="banniere">
        <span>
          <h2>
            {data.restaurant.path}
            {data.restaurant.name}
          </h2>

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
                <h2>{categorie.name}</h2>
                <ul className="meal">
                  {categorie.meals.map((meal, index) => {
                    return (
                      <li key={index}>
                        <div className="meals">
                          <div>
                            <p> {meal.title}</p>
                            <p>{meal.description}</p>
                            <span>{meal.price} €</span>

                            <span>
                              {meal.popular && <i class="fas fa-star"> </i>}
                              {meal.popular && "populaire"}
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
