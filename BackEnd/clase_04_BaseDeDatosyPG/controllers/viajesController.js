const pool = require("../config/config");
const {
  obtenerTodosLosViajes,
  actualizarPresupuesto,
  agregarViaje,
  borrarViaje,
} = require("../queries/viajesQueries");

// Obtener todos los viajes

const obtenerViajes = async (req, res) => {
  try {
    const viajes = await obtenerTodosLosViajes();
    res.json(viajes);
  } catch (error) {
    res.status(500).send("Error al obtener los viajes");
  }
};

const modificarPresupuesto = async (req, res) => {
  const { id } = req.params;
  const { presupuesto } = req.query;

  try {
    await actualizarPresupuesto(presupuesto, id);
    res.send("Presupuesto modificado con exito");
  } catch (error) {
    res.status(500).send("Error al modificar el presupuesto");
  }
};

const crearViajes = async (req, res) => {
  try {
    const { destino, presupuesto } = req.body;
    await agregarViaje(destino, presupuesto);
    res.send("Viaje agregado con exito");
  } catch (error) {
    res.status(500).send("Error al obtener los viajes");
  }
};

const eliminarViaje = async (req, res) => {
  const { id } = req.params;

  try {
    await borrarViaje(id);
    res.send("Viaje eliminado con exito");
  } catch (error) {
    res.status(500).send("Error al obtener los viajes");
  }
};

module.exports = {
  obtenerViajes,
  modificarPresupuesto,
  crearViajes,
  eliminarViaje,
};
