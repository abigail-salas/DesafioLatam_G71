const {
  obtenerMedicamentosLimitados,
  obtenerMedicamentosOrdenados,
  obtenerMedicamentosPaginados,
  obtenerMedicamentosPorFiltro,
} = require("../queries/farmaciaQueries");

// Obtener medicamentos con limite
const ctrlObtenerMedicamentosLimitados = async (req, res) => {
  try {
    const medicamentos = await obtenerMedicamentosLimitados(req.query);

    res.json(medicamentos);
  } catch (error) {
    res.status(500).send("Error al obtener los medicamentos limitados");
  }
};

// Obtener medicamentos ordenados

const ctrlobtenerMedicamentosOrdenados = async (req, res) => {
  try {
    const medicamentos = await obtenerMedicamentosOrdenados(req.query);

    res.json(medicamentos);
  } catch (error) {
    res.status(500).send("Error al obtener los medicamentos ordenados");
  }
};

// Obtener medicamentos paginados
const ctrlObtenerMedicamentosPaginados = async (req, res) => {
  try {
    const medicamentos = await obtenerMedicamentosPaginados(req.query);

    res.json(medicamentos);
  } catch (error) {
    res.status(500).send("Error al obtener los medicamentos paginados");
  }
};

// Obtener medicamentos por filtros (precio y stock)

const ctrlObtenerMedicamentosPorFiltro = async (req, res) => {
  try {
    const medicamentos = await obtenerMedicamentosPorFiltro(req.query);

    res.json(medicamentos);
  } catch (error) {
    res.status(500).send("Error al obtener los medicamentos por filtro");
  }
};

module.exports = {
  ctrlObtenerMedicamentosLimitados,
  ctrlobtenerMedicamentosOrdenados,
  ctrlObtenerMedicamentosPaginados,
  ctrlObtenerMedicamentosPorFiltro,
};
