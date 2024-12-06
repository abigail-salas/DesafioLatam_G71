const express = require("express");
const app = express();
const viajesRoute = require("./routes/viajesRoute");

const port = process.env.PORT;

//Middleware para interpretar un JSON
app.use(express.json());

//Ruta para los viajes
app.use(viajesRoute);

//Iniciar el server
app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`));
