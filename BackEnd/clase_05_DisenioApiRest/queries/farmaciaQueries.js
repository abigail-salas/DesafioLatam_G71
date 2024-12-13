const pool = require("../config/config");
const format = require("pg-format");

// Obtener medicamentos con limite
const obtenerMedicamentosLimitados = async ({ limit = 5 }) => {
  const consulta = "SELECT * FROM medicamentos LIMIT $1";

  const { rows: medicamentos } = await pool.query(consulta, [limit]);
  return medicamentos;
};

// Obtener medicamentos ordenados
const obtenerMedicamentosOrdenados = async ({
  limit = 5,
  order_by = "id_ASC",
}) => {
  const [campo, direccion] = order_by.split("_");
  const sql = format(
    "SELECT * FROM medicamentos ORDER BY %s %s LIMIT %s",
    campo,
    direccion,
    limit
  );

  const { rows: medicamentos } = await pool.query(sql);
  return medicamentos;
};

// Obtener medicamentos paginados
const obtenerMedicamentosPaginados = async ({ limit = 5, page = 1 }) => {
  const offset = (page - 1) * limit;

  const sql = format(
    "SELECT * FROM medicamentos LIMIT %s OFFSET %s",
    limit,
    offset
  );

  const { rows: medicamentos } = await pool.query(sql);
  return medicamentos;
};

// Obtener medicamentos por filtros (precio y stock)
const obtenerMedicamentosPorFiltro = async ({ precio_max, stock_min }) => {
  let filtros = [];

  if (precio_max) filtros.push(`precio <= ${precio_max}`);
  if (stock_min) filtros.push(`stock >= ${stock_min}`);

  let consulta = "SELECT * FROM medicamentos";

  if (filtros.length > 0) {
    consulta += ` WHERE ${filtros.join(" AND ")}`;
  }

  const { rows: medicamentos } = await pool.query(consulta);
  return medicamentos;
};

module.exports = {
  obtenerMedicamentosLimitados,
  obtenerMedicamentosOrdenados,
  obtenerMedicamentosPaginados,
  obtenerMedicamentosPorFiltro,
};
