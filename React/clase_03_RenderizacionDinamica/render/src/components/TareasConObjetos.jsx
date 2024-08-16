import React, { useState } from "react";
import tareasConObjetos from "../utils/TareasIniciales";

function TareasConObjetos() {
  const [nombreTarea, setNombreTarea] = useState("");
  const [listaTarea, setListaTarea] = useState(tareasConObjetos);
  const [idTarea, setIdTarea] = useState(
    tareasConObjetos[tareasConObjetos.length - 1].id
  );

  /* -------- Funcion para enviar el formulario -------- */

  function handleSubmit(e) {
    e.preventDefault();

    /* Generar un ID unico */

    const nuevoId = idTarea + 1;

    /* agregar la tarea */
    setListaTarea([
      ...listaTarea,
      { id: nuevoId, nombre: nombreTarea, completada: false },
    ]);

    /* Actualizar el Id */
    setIdTarea(nuevoId);

    /* Vaciar el formulario */
    setNombreTarea("");
  }

  /* -------- Funcion para renderizar el input -------- */

  function mostrarInput(e) {
    setNombreTarea(e.target.value);
  }

  /* -------- Funcion para completar la tarea -------- */
  function handleComplete(comun) {
    const nuevasTareas = [...listaTarea];

    /* Buscar una condicion unica */

    const encontrado = nuevasTareas.findIndex((obj) => obj.id === comun.id);

    nuevasTareas[encontrado].completada = true;

    setListaTarea(nuevasTareas);
  }

  /* -------- Funcion para eliminar la tarea -------- */

  function handleDelete(comun) {
    const nuevasTareas = listaTarea.filter((obj) => obj.id !== comun.id);

    setListaTarea(nuevasTareas);
  }

  /* -------- Mapeo de items -------- */
  const mapeoTareas = listaTarea.map((tarea) => (
    <li
      key={tarea.id}
      style={
        tarea.completada === true ? { textDecoration: "line-through" } : {}
      }
    >
      {tarea.nombre}

      {tarea.completada === false ? (
        <button onClick={() => handleComplete(tarea)}>COMPLETAR</button>
      ) : (
        ""
      )}

      <button onClick={() => handleDelete(tarea)}>X</button>
    </li>
  ));

  return (
    <div>
      <h1>Tarea con Arreglo de Objetos</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={mostrarInput} value={nombreTarea} />

        <button type="submit">Agregar Tarea</button>
      </form>

      <ul>{mapeoTareas}</ul>
    </div>
  );
}

export default TareasConObjetos;
