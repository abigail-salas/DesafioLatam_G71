import React from "react";
import Banner from "./Banner";

const nombre = "Candela";

function Titulo() {
  return (
    <div>
      <h1>Componente Titulo</h1>

      <Banner />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae non
        voluptatem molestiae doloremque, obcaecati aliquid? Possimus numquam
        nostrum excepturi, quod recusandae dolores, nam aperiam itaque sint iure
        ex, saepe laborum.
      </p>

      <h3>Mi nombre es {nombre}</h3>
    </div>
  );
}

export default Titulo;
