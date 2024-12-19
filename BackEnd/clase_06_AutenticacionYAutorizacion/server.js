const express = require("express");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(authRoutes);

app.listen(port, () => {
  console.log("Servidor levantado en el puerto 3000");
});
