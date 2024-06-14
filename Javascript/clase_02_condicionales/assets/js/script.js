/* CONDICIONALES */
// let edad = prompt("Decime tu edad")
/* let edad = Number(prompt("Decime tu edad"));

if (edad < 18) {
  console.log("No podés entrar a esta página");
} */

/* --------------------OPERADORES----------------------- */

//=========> OPERADORES DE ASIGNACION <=========
let nn = "hola";
nn = "chau";

//=========> OPERADORES DE COMPARACION <=========
//DE IGUALDAD
//simple
12 == 12;
//devuelve ---> true
"hola" == "Hola";
//devuelve ---> false
"hola" == "hola";
//devuelve ---> true
"43" == 43;
//devuelve ---> true

//estricta -------> Compara el VALOR y el TIPO DE DATO ingresado
12 === 12;
//devuelve ---> true
"hola" === "Hola";
//devuelve ---> false;
"43" === 43;
//devuelve ---> false

//DE DESIGUALDAD
//simple
56 != 56;
//devuelve ---> false
"hola" != "Hola";
//devuelve ---> true
"43" != 43;
//devuelve ---> false
23 != 34;
//devuelve ---> true

//estricta
56 !== 56;
//devuelve ---> false
"hola" !== "Hola";
//devuelve ---> true
"43" !== 43;
//devuelve ---> true
23 !== 34;
//devuelve ---> true

/* -----if-----else------- */

let pedazosDeTorta = 8;
let invitados = 4;
let cantidadDePedazosPorInvitados = pedazosDeTorta / invitados;

if (cantidadDePedazosPorInvitados >= 1) {
  console.log("hay suficiente porciones de torta para cada invitado");
} else {
  console.log("Hay más invitados que porciones de tortas");
}

/* -------if-------else-------else if--------- */

if (false) {
  console.log("Aquí no entro");
} else if (false) {
  console.log("Aquí tampoco");
} else if (true) {
  console.log("Aquí si entro");
} else {
  console.log("No existo");
}

/* EJERCICIOS */

/* let grados = parseInt(prompt("Cuántos grados hace en tu ciudad?"));
if (grados > 30) {
  console.log("Uf! que calor!!");
} */

let px = Number(prompt("Ingresa un número de pixeles"));

/* if (px < 576) {
  console.log(`${px} equivalen al tamaño de pantalla en XS`);
} else if (px >= 576) {
  console.log(`${px} equivalen al tamaño de pantalla en SM`);
} else if (px >= 768) {
  console.log(`${px} equivalen al tamaño de pantalla en MD`);
} else if (px >= 962) {
  console.log(`${px} equivalen al tamaño de pantalla en XL`);
} else {
  console.log(`Ingresa un número valido`);
} */

if (px < 576) {
  console.log(`${px} equivalen al tamaño de pantalla en XS`);
} else if (px >= 962) {
  console.log(`${px} equivalen al tamaño de pantalla en XL`);
} else if (px >= 768) {
  console.log(`${px} equivalen al tamaño de pantalla en MD`);
} else if (px >= 576) {
  console.log(`${px} equivalen al tamaño de pantalla en SM`);
} else {
  console.log(`Ingresa un número valido`);
}
