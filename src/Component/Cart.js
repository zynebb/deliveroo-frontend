import React from "react";
const Cart = ({ carts, setCart }) => {
  let total = 0;
  for (let i = 0; i < carts.length; i++) {
    total = total + Number(carts[i].price) * carts[i].quantity;
  }
  let total2 = 0;
  for (let j = 0; j < carts.length; j++) {
    total2 = total + 2.5;
  }
  console.log(total2);
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
              style={{
                borderRadius: 50,
                color: "#00CCBC",

                backgroundColor: "white",
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
              style={{
                borderRadius: 50,
                color: "#00CCBC",

                backgroundColor: "white",
              }}
            >
              +
            </button>{" "}
            <span style={{ fontWeight: "lighter" }}> {cart.title}</span>
          </div>
        );
      })}{" "}
      {carts.length === 0 ? (
        <div
          style={{
            marginLeft: 90,
            marginTop: 60,
            fontWeight: "lighter",
            color: "grey",
          }}
        >
          Mon panier est vide
        </div>
      ) : (
        <div>
          {" "}
          <hr style={{ color: "grey" }} />
          <div style={{ fontWeight: "lighter" }}>
            {" "}
            Sous-Total{" "}
            <span style={{ marginLeft: 190 }}> {total.toFixed(2)} €</span>
          </div>
          <div style={{ fontWeight: "lighter" }}>
            Frais de Livraison <span style={{ marginLeft: 152 }}>2,50 €</span>{" "}
          </div>
          <hr style={{ color: "grey" }} />
          <div>
            Total{" "}
            <span style={{ fontWeight: "bolder", marginLeft: 240 }}>
              {" "}
              {total2} €
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
