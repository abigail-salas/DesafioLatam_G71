import React, { useContext } from "react";
import { InfoContext } from "../context/infoContext";

function BotonCambio() {
  const { setInfoM } = useContext(InfoContext);
  const infoFemenino = ["Graciela", "Rocio", "Alejandra", "Sandra", "Silvia"];

  return (
    <div>
      <button
        onClick={() => {
          setInfoM(infoFemenino);
        }}
      >
        Cambiar data
      </button>
    </div>
  );
}

export default BotonCambio;
