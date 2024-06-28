let nombre1 = "Violeta";
let nombre2 = "Esteban";
let nombre3 = "Carla";
let nombre4 = "Dario";

/* -------- ARREGLOS ----------- */

let nombres = ["Violeta", "Esteban", "Carla", "Dario"];

/* ===> ACCEDER A LOS ELEMENTOS <=== */

nombres[0]; // duevuelve ---> Violeta
console.log(nombres[3]); // duevuelve ---> Dario
console.log(nombres[4]); // duevuelve ---> Undefined

/* ===> CANTIDAD DE ELEMENTOS <=== */
console.log(nombres.length); // devuelve ---> 4

// acceder al último elemento
console.log(nombres[nombres.length - 1]);

/* ------------ BUCLES --------------- */

for (const iterator of nombres) {
  console.log(iterator);
}

/* for loop */
for (let i = 0; i < nombres.length; i++) {
  const element = nombres[i];
  console.log(element, "<--- FOR LOOP");
}

/* while loop */
let i = 0;
while (i < nombres.length) {
  // codigo
  const element = nombres[i];
  console.log(element, "<--- while LOOP");

  // condicion de corte
  i++;
}

console.log("AQUI SALGO DEL LOOP");

/* --------- OPERADORES ARITMETICOS --------- */

// ===> SUMA DE A 1
let numero = 0;
numero++;
//devuelve --> 0
numero++;
//devuelve --> 1
numero++;
//devuelve --> 2
numero;
//devuelve --> 3

// ===> RESTA DE A 1
numero = 10;
numero--;
// devuelve --> 10
numero--;
// devuelve --> 9
numero--;
// devuelve --> 8
numero;
// devuelve --> 7

// ===> SUMA, RESTA, MULTIPLICA , ETC, EN BASE AL VALOR DADO

numero = 100;
numero += 20;
// devuelve --> 120
numero += 20;
// devuelve --> 140
numero;
// devuelve --> 140

numero -= 20;
// devuelve --> 120
numero -= 20;
// devuelve --> 100
numero;
// devuelve --> 100

numero *= 2;
// devuelve --> 200
numero *= 2;
// devuelve --> 400
numero;
// devuelve --> 400

numero /= 2;
// devuelve --> 200
numero /= 2;
// devuelve --> 100
numero;
// devuelve --> 100

/* -------- BUCLES -------- DOM -------- TEMPLATE LITERAL -------- */

const data = [
  "Violeta",
  "Esteban",
  "Carla",
  "Dario",
  "Camila",
  "Jorge",
  "Agustina",
  "Francisco",
];

let final = "";

const dynamic = document.querySelector("#dynamic-content");

for (const iterator of data) {
  console.log(iterator, "<--- DATA");
  final += `<li>${iterator}</li>`;
}
console.log(final);

dynamic.innerHTML = final;

/* ----------------OBJETOS---------------- */

let datos = [
  "Marisa",
  "Martinez",
  45,
  "Uruguay",
  ["Pepe", "Toto"],
  () => {
    console.log("Hola soy Mari");
  },
];

let persona = {
  nombre: "Marisa",
  apellido: "Martinez",
  edad: 45,
  pais: "Uruguay",
  mascotas: ["Pepe", "Toto"],
  saludo: () => {
    console.log("Hola soy Mari");
  },
};

let variable = "pais";

/* ===> ACCEDER A LOS VALORES <=== */
/* BRACKET NOTATION */
persona["nombre"];
// devuelve --> 'Marisa'
persona["saludo"]();
// devuelve --> Hola soy Mari
persona["mascotas"][0];
// devuelve --> 'Pepe'

/* DOT NOTATION */
persona.edad;
// devuelve --> 45
persona.saludo();
// devuelve --> Hola soy Mari

/* ===> AGREGAR VALORES <=== */
/* BRACKET NOTATION */
persona["profesion"] = "Maestra";

/* DOT NOTATION */
persona.pasatiempo = "Pintura";

/* ===> MODIFICAR LOS VALORES <=== */
/* BRACKET NOTATION */
persona["pais"] = "Inglaterra";

/* DOT NOTATION */
persona.edad = 46;

/* ===> RECORRER UN OBJETO <=== */
for (const key in persona) {
  /* console.log(key, "<--- KEY");
  console.log(persona[key], "<---- VALOR"); */

  console.log(`${key}: ${persona[key]}`);
}

/* ------------- ARREGLOS DE OBJETOS ------------- */

const productos = [
  {
    id: 1,
    nombre: "Item 1",
    valor: 1200,
  },
  {
    id: 2,
    nombre: "Item 2",
    valor: 1600,
  },
  {
    id: 3,
    nombre: "Item 3",
    valor: 2000,
  },
  {
    id: 4,
    nombre: "Item 4",
    valor: 1250,
  },
];

let html = "";

const elemento = document.querySelector("#productos");

for (const iterator of productos) {
  // console.log(iterator, "<--- productos");
  // console.log(iterator.id);
  // console.log(iterator["nombre"]);

  html += `<div class="producto" id="${iterator.id}">
      <h2>${iterator.nombre}</h2>
      <p>$${iterator.valor}</p>
    </div>`;
}

elemento.innerHTML = html;

`<p class="${iterator.fumar ? "text-success" : "text-danger"}">
<i class="fas ${iterator.fumar ? "fa-smoking" : "fa-smoking-ban"}"></i>
 <p class="${iterator.fumar ? "text-permitido-fumar" : "text-no-fumar"}"></p>
    </p>`;
