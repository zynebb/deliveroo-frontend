import React from "react";
import Cart from "./Cart";

const Meal = ({ meal, carts, setCart }) => {
  return (
    <div>
      <li
        key={meal.id}
        onClick={() => {
          console.log(meal);
          let newCarts = [...carts];
          let isFound = false;
          for (let i = 0; i < carts.length; i++) {
            if (carts[i].id === meal.id) {
              newCarts[i].quantity++;
              isFound = true;
              break;
            }
          }
          if (isFound === false) {
            newCarts.push({
              title: meal.title,
              id: meal.id,
              price: meal.price,
              quantity: 1,
            });
          } else {
            <div
              className="empty"
              style={{
                fontWeight: "lighter",
                color: "grey",
                textAlign: "center",
                marginTop: 50,
              }}
            >
              Votre panier est vide
            </div>;
          }

          // console.log(newCart);

          setCart(newCarts);
        }}
      >
        <div className="meals">
          <div
            style={{
              cursor: "pointer",
            }}
          >
            <p className="title"> {meal.title}</p>
            <p className="description">{meal.description}</p>
            <span className="price">{meal.price} €</span>
            <span className="star">
              {meal.popular && <i className="fas fa-star"> </i>}

              {meal.popular && " populaire"}
            </span>
          </div>
          <span>{meal.picture && <img src={meal.picture} alt="" />}</span>
        </div>
      </li>
    </div>
  );
};
export default Meal;
