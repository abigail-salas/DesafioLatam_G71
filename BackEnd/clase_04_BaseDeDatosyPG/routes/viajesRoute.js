const express = require("express");
const {
  obtenerViajes,
  crearViajes,
  modificarPresupuesto,
  eliminarViaje,
} = require("../controllers/viajesController");

const router = express.Router();

//Ruta para obtener todos los viajes
router.get("/viajes", obtenerViajes);

//Ruta para agregar un viaje
router.post("/viajes", crearViajes);

//Ruta para modificar el presupuesto
router.put("/viajes/:id", modificarPresupuesto);

//Ruta para eliminar un viaje
router.delete("/viajes/:id", eliminarViaje);

module.exports = router;
