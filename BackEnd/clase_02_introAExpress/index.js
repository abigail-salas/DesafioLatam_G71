const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json()); //Ejecuta el MIDDLEWARE

app.listen(3000, () => {
  console.log("Servidor levantado en el puerto 3000");
});

app.get("/", (req, res) => {
  res.send("Esta es la pagina principal");
});

app.get("/home", (req, res) => {
  res.send("Esta es la pagina DE HOME");
});

app.get("/productos", (req, res) => {
  const productos = JSON.parse(fs.readFileSync("productos.json", "utf-8"));
  res.json(productos);
});

app.post("/productos", (req, res) => {
  const nuevoProducto = req.body;
  const productos = JSON.parse(fs.readFileSync("productos.json", "utf-8"));

  productos.push(nuevoProducto);

  fs.writeFileSync("productos.json", JSON.stringify(productos));

  res.send("Producto agregado con Exito!");
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Usuario con id ${userId} obtenido`);
});
