import React from "react";

function Propiedades({ title, price }) {
  /* Ejemplo Destructure */
  //   const usuario = {
  //     id: 2,
  //     nombre: "Eduardo",
  //     apellido: "Gomez",
  //     edad: 34,
  //     pais: "Canada",
  //     mascota: "Chucho",
  //     trabajo: "Arquitecto",
  //   };
  //   console.log(usuario.edad, "<--- OBJETO NORMAL");

  //   let { id, nombre, edad } = usuario;
  //   console.log(id, "<--- DESTRUCTURE");

  const estilos = { backgroundColor: "#C4B9A5", color: "#725A2C" };

  /* ↓↓↓↓ props comun */
  /* return (
    <div>
      <h1>{props.title}</h1>

      <h2>{props.price}</h2>
    </div>
  ) */

  /* ↓↓↓↓ props con destructure */
  return (
    <div style={estilos}>
      <h1>{title}</h1>
      <h2>{price}</h2>
    </div>
  );
}

export default Propiedades;
