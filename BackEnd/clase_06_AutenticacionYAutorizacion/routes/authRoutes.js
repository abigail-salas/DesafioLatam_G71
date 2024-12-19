const express = require("express");
const {
  verificarCredenciales,
  generarToken,
  getClientes,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddlewares");

const router = express.Router();

// Ruta para obtener clientes
router.get("/", authMiddleware, async (req, res) => {
  try {
    const clientes = await getClientes();
    res.json(clientes);
  } catch (error) {
    res.status(error.code || 500).send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    await verificarCredenciales(email, password);
    const token = generarToken(email);

    res.send(token);
  } catch (error) {
    res.status(error.code || 500).send(error);
  }
});

module.exports = router;
