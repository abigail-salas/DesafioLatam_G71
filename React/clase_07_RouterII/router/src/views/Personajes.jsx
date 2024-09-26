import React from "react";
import { useParams } from "react-router-dom";

function Personajes() {
  const { id } = useParams();

  return (
    <div className="mt-5">
      <h1>Personaje {id}</h1>
    </div>
  );
}

export default Personajes;
