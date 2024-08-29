import React, { useEffect, useState } from "react";

function ExampleApis() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    consultaAPI();

    console.log("renderizando api");
  }, []);

  const consultaAPI = async () => {
    const url = "https://api.gameofthronesquotes.xyz/v1/random";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data, "<---- DATA");
    setInfo(`${data.character.name}`);
  };

  return (
    <div>
      <h3>Consulta de API</h3>
      <p>{info}</p>
    </div>
  );
}

export default ExampleApis;
