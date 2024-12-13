const express = require("express");
const {
  ctrlObtenerMedicamentosLimitados,
  ctrlobtenerMedicamentosOrdenados,
  ctrlObtenerMedicamentosPaginados,
  ctrlObtenerMedicamentosPorFiltro,
} = require("../controllers/farmaciaControllers");

const router = express.Router();

// Obtener medicamentos con limite
router.get("/medicamentos", ctrlObtenerMedicamentosLimitados);

/* Probar en POSTMAN
http://localhost:3000/medicamentos?limit=10 */

// Obtener medicamentos ordenados
router.get("/medicamentos/orden", ctrlobtenerMedicamentosOrdenados);

/* Probar en POSTMAN
http://localhost:3000/medicamentos/orden?limit=2&order_by=precio_DESC */

// Obtener medicamentos paginados
router.get("/medicamentos/paginacion", ctrlObtenerMedicamentosPaginados);

/* Probar en POSTMAN
http://localhost:3000/medicamentos/paginacion?limit=3&page=8 */

// Obtener medicamentos por filtros (precio y stock)
router.get("/medicamentos/filtros", ctrlObtenerMedicamentosPorFiltro);

/* Probar en POSTMAN
http://localhost:3000/medicamentos/filtros?precio_max=100&stock_min=150 */

module.exports = router;
