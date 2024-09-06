import React, { useContext } from "react";
import { InfoContext } from "../context/infoContext";

function Component1() {
  const { infoM } = useContext(InfoContext);
  return (
    <div>
      <h1> Componente 1</h1>
      <hr />
      <p>{infoM}</p>
    </div>
  );
}

export default Component1;
