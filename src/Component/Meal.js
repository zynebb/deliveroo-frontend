import React from "react";

const Meal = ({ meal, carts, setCart }) => {
  return (
    <li
      key={meal.id}
      onClick={() => {
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
  );
};
export default Meal;
