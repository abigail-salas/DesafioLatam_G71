import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Cart() {
  const { carrito } = useContext(CartContext);

  const { token } = useContext(UserContext);

  const processPayment = async () => {
    const response = await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorizathion: `Bearer ${token}`,
      },
      body: JSON.stringify({
        cart: carrito,
      }),
    });

    const data = await response.json();

    return data;
  };

  return (
    <div>
      CART
      <button onClick={processPayment}>
        {!token ? "Inicia sesion" : "Pagar"}
      </button>
    </div>
  );
}

export default Cart;
