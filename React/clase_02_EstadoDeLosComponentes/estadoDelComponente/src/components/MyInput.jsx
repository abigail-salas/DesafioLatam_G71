import React, { useState } from "react";

function MyInput() {
  const [nombre, setNombre] = useState("");

  return (
    <div className="inputDiv">
      <h3>Input</h3>
      <div className="input-btn">
        <input type="text" onChange={(e) => setNombre(e.target.value)} />
        <p>Nombre: {nombre}</p>
      </div>
    </div>
  );
}

export default MyInput;
