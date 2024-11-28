const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "1234",
  database: "gestion_usuarios",
  allowExitOnIdle: true,
});

// Agregar usuarios
const agregarUsuario = async (nombre, apellido, edad, pais) => {
  const consulta =
    "INSERT INTO usuarios (nombre, apellido, edad, pais) VALUES ($1, $2, $3, $4)";

  const values = [nombre, apellido, edad, pais];
  await pool.query(consulta, values);
  console.log("Usuario agregado");
};

// Obtener todos los ususarios
const obtenerUsuarios = async () => {
  const result = await pool.query("SELECT * FROM usuarios");
  return result.rows;
};

// Obtener usuarios mayores de edad
const obtenerUsuariosMayores = async () => {
  const result = await pool.query("SELECT * FROM usuarios WHERE edad >= 18");
  return result.rows;
};

// Obtener usuarios por pais
const obtenerUsuariosPorPais = async (pais) => {
  const result = await pool.query("SELECT * FROM usuarios WHERE pais = $1", [
    pais,
  ]);
  return result.rows;
};

module.exports = {
  agregarUsuario,
  obtenerUsuarios,
  obtenerUsuariosMayores,
  obtenerUsuariosPorPais,
};
