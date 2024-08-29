import React, { useEffect, useState } from "react";

function ApisDeGatos() {
  const [gato, setGato] = useState([]);

  useEffect(() => {
    consultaAPI();

    console.log("renderizando api DE GATOS");
  }, []);

  const consultaAPI = async () => {
    const url = "https://api.thecatapi.com/v1/images/search?limit=10";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data, "<---- DATA de gatos");
    setGato(data);
  };

  return (
    <div>
      <h3>Consulta de API DE GATOS</h3>

      {gato.map((g) => (
        <img src={g.url} alt="" width="300px" height="300px" key={g.id} />
      ))}
    </div>
  );
}

export default ApisDeGatos;
