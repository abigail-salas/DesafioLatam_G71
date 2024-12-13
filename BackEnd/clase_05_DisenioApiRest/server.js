const express = require("express");
const app = express();
const farmaciaRoute = require("./routes/farmaciaRoute");

require("dotenv").config();
const port = process.env.PORT;

//Middleware para interpretar un JSON
app.use(express.json());

//Ruta para los viajes
app.use(farmaciaRoute);

//Iniciar el server
app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`));
