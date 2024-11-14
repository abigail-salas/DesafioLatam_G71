const fs = require("fs");
const { saludar, pais, suma } = require("./funciones.js");

// const tareas = `
// 1. Ir al gym
// 2. Sacar la basura
// 3. Pasear al perro
// `;

//fs.writeFileSync("tareas.txt", tareas);

const tareas = [
  { text: "Ir al gym" },
  { text: "Sacar la basura" },
  { text: "Pasear al perro" },
];

fs.writeFileSync("tareas.json", JSON.stringify(tareas));

const lectura = fs.readFileSync("tareas.json", "utf8");
console.log(lectura);

saludar("Sebastian");
pais("España");
console.log(suma(10, 50));
