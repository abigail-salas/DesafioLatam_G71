import React, { useState } from "react";

/* EJEMPLO SPREED OPERATOR */

/*   let a = [1, 2, 3, 4, 5];
  a.push("a", "e", "i");
  console.log(a, "<--- Arreglo original modificado");

  let b = [...a, "o", "u"];
  console.log(b, "<--- copia y nuevos items agregados");
  console.log(a, "<--- arreglo original"); */

function Tareas() {
  const arrayTareas = [
    "Estudiar",
    "Doblar la Ropa",
    "Pasear al perro",
    "Trabajar",
    "Correr",
  ];
  const [nombreTarea, setNombreTarea] = useState("");
  const [listaTarea, setListaTarea] = useState(arrayTareas);

  const arrayColores = ["green", "blue", "red", "violet", "yellow", "white"];
  const mapeoColores = arrayColores.map((colores) => (
    <li key={colores} style={{ color: colores }}>
      {colores}
    </li>
  ));

  /* --------- Funcion para renderizar el formulario --------- */

  function handleSubmit(e) {
    e.preventDefault();

    /* agregar la tarea */
    setListaTarea([...listaTarea, nombreTarea]);

    /* Vaciar el formulario */
    setNombreTarea("");
  }

  /* --------- Funcion para renderizar el input --------- */

  function mostrarInput(e) {
    setNombreTarea(e.target.value);
  }

  /* --------- Funcion para mostrar los items --------- */
  const mapeoTareas = listaTarea.map((tarea) => <li key={tarea}>{tarea}</li>);

  return (
    <div>
      <div>
        <h1>Colores</h1>
        <ol>{mapeoColores}</ol>
      </div>

      <div>
        <h1>Tarea con arreglos simple</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={mostrarInput} value={nombreTarea} />

          <button type="submit">Agregar Tarea</button>
        </form>

        <ul>{mapeoTareas}</ul>
      </div>
    </div>
  );
}

export default Tareas;
