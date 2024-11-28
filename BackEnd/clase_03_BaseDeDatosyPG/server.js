const express = require("express");
const {
  agregarUsuario,
  obtenerUsuarios,
  obtenerUsuariosMayores,
  obtenerUsuariosPorPais,
} = require("./consultas");
const app = express();

app.use(express.json());

// Ruta para agregar un usuario
app.post("/usuarios", async (req, res) => {
  const { nombre, apellido, edad, pais } = req.body;
  await agregarUsuario(nombre, apellido, edad, pais);
  res.send("Usuario agregado con exito");
});

// Ruta para obtener todos los usuarios
app.get("/usuarios", async (req, res) => {
  const usuario = await obtenerUsuarios();
  res.json(usuario);
});

// Ruta para obtener solo los usuarios mayores de edad
app.get("/usuarios/mayores", async (req, res) => {
  const usuario = await obtenerUsuariosMayores();
  res.json(usuario);
});

// Ruta para obtener usuarios por pais
app.get("/usuarios/:pais", async (req, res) => {
  const { pais } = req.params;
  const usuario = await obtenerUsuariosPorPais(pais);
  res.json(usuario);
});

app.listen(3000, () => console.log("Servidor levantado en el puerto 3000"));
