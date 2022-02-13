import React, { useState } from "react";
const Cart = ({ carts, setCart }) => {
  // const [carts, setCart] = useState([]);

  let total = 0;
  for (let i = 0; i < carts.length; i++) {
    total = total + Number(carts[i].price) * carts[i].quantity;
  }
  return (
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
            Total : {total.toFixed(2)} €
          </div>
        );
      })}{" "}
      <div
        style={{
          fontWeight: "lighter",
          color: "grey",
          textAlign: "center",
          marginTop: 50,
        }}
      >
        Votre panier est vide
      </div>{" "}
    </div>
  );
};

export default Cart;
