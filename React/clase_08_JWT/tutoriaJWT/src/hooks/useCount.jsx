import React, { useState } from "react";

function useCount(valorInicial = 0) {
  const [contador, setContador] = useState(valorInicial);

  // Metodos personalizados

  const suma = () => {
    setContador(contador + 1);
  };

  const resta = () => {
    setContador(contador - 1);
  };

  const reset = () => {
    setContador(0);
  };

  return { contador, suma, reset, resta };
}

export default useCount;
