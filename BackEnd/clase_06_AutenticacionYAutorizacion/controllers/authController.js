const pool = require("../config/db");
const jwt = require("jsonwebtoken");

// Obtener todos los eventos
const getClientes = async () => {
  const { rows: eventos } = await pool.query("SELECT * FROM clientes");
  return eventos;
};

// Verificar credenciales de usuario
const verificarCredenciales = async (email, password) => {
  const consulta = "SELECT * FROM clientes WHERE email = $1 AND password = $2";
  const { rowCount } = await pool.query(consulta, [email, password]);

  if (!rowCount) throw { code: 404, message: "Credenciales incorrectas" };
};

// Generar token JWT
const generarToken = (email) => {
  return jwt.sign({ email }, "clave_secreta");
};

module.exports = { verificarCredenciales, generarToken, getClientes };
