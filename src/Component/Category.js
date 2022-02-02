import React from "react";
import Meal from "./Meal";
const Category = ({ index, categorie, carts, setCart }) => {
  return (
    <div key={index}>
      <h3>{categorie.name}</h3>
      <ul className="meal">
        {categorie.meals.map((meal) => {
          return <Meal meal={meal} carts={carts} setCart={setCart} />;
        })}
      </ul>
    </div>
  );
};
export default Category;
