import React from "react";

function Banner() {
  /* + creando una variable que contenga estilos */
  const estilos = { color: "#62afb5", fontSize: "40px" };

  return (
    <div className="banner-css">
      {/* Aplicar css mediante en atributo className ↑↑↑↑ */}

      {/* Aplicar estilos en linea ↓↓↓↓ */}
      <h1 style={{ fontFamily: "fantasy" }}>Soy un Banner</h1>

      {/* + Aplicar estilos mediante una variable creada ↓↓↓↓ */}
      <p style={estilos}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sapiente!
      </p>

      <img
        src="https://images.unsplash.com/photo-1710781944947-7cd4a381499f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        width="500px"
        height="300px"
      />
    </div>
  );
}

export default Banner;
