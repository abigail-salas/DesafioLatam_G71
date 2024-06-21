/* --------------- DIFERENCIA ENTRE LAS VARIABLES Y SU ALCANCE --------------- */

/* VAR */
// Se puede repetir su declaracion
var prueba = "Aquí se declara";
console.log(prueba);
var prueba = "aqui tambien se declara pero rompe todo";
console.log(prueba);

/* LET */
// Se declara una sola vez PERO despues se puede MODIFICAR su valor
let intento = "aca declaro let";
console.log(intento, "<----- primera declaracion");
//let intento = ""
intento = "acá MODIFICO el valor de let";
console.log(intento, "<---- intento modificada");

/* CONST */
const fija = "ésto no se puede modificar";
console.log(fija);
//fija = "otro valor";
//console.log(fija);

/* ALCANCE DE LAS VARIABLES */
// Hace referencia al bloque de código en el que se encuentra (los bloques de código usualmente es todo lo que se encuentra entre {})

/* variables globales */
// Estan por fuera de cualquier bloque de código y se pueden llamar en cualquier lugar del código
let global = "variable global";

if (true) {
  // Las variables locales, solo existen dentro de su bloque de código
  let local = "solo existo dentro del if";
  console.log(local, "<--- dentro del if");

  console.log(global, "<-- global dentro del if");
}

console.log(global, "<-- global fuera del bloque");
// Si intento llamar a una variable local por fuera de su ambito, no existe

//console.log(local, "<--- local fuera del bloque");

// Si una variable es local, puedo volver a declararla con su mismo nombre en otras partes del código sin que genere ningun error
let local = "ahora estoy afuera pero me converti en una variable global";

console.log(local, "<--- local modificado por fuera");

/* -------- FUNCIONES -------- */
// Es una maquina perfecta donde uno le da instrucciones y las repite la cantidad de veces que uno la llame/utilice

function pintarRojo() {
  let elemento = document.querySelector("body");
  elemento.style.backgroundColor = "rgb(53, 6, 6)";
}
//pintarRojo();

function tamañoTitulo() {
  let elemento = document.querySelector("h1");
  elemento.style.fontSize = "50px";
}

function pintarLetrasP() {
  let elemento = document.querySelector("#parrafo");
  elemento.style.color = "rgb(110, 150, 207)";
}

/* utilizando parametros */

function pintarFontoTi(color) {
  let elemento = document.querySelector("h1");
  elemento.style.backgroundColor = color;
}

/*  pasamos más parametros */

/* function pintarFondo(color, tag) {
  let elemento = document.querySelector(tag);
  elemento.style.backgroundColor = color;
} */

/* valores por defecto */

function pintarFondo(color = "red", tag = "h4") {
  let elemento = document.querySelector(tag);
  elemento.style.backgroundColor = color;
}

/* Orden de los parametros */

function presentacion(nombreCompleto, edad, ciudad, vocacion) {
  console.log(
    `Hola! Soy ${nombreCompleto}, tengo ${edad} años. Me dedico a ${vocacion} en la ciudad de ${ciudad}.`
  );
}

presentacion("Cristian Vega", 25, "Santiago", "Pintar");
// devuelve ---> Hola! Soy Cristian Vega, tengo 25 años. Me dedico a Pintor en la ciudad de Santiago.

presentacion("Pintar", "Cristian Vega", 25, "Santiago");
//devuelve ---> Hola! Soy Pintar, tengo Cristian Vega años. Me dedico a Santiago en la ciudad de 25.

/* --------- RETORNO DE FUNCIONES --------- */

function suma(a, b) {
  //console.log(a + b);
  return a + b;
}

console.log(`Soy la funcion suma y devuelvo ${suma(10, 10)}`);

/* ----------- ARROW FUNCTION ----------- */

/* const resta = (a, b) => {
  return a - b;
}; */

//Cuando esta en la MISMA LINEA DE CÓDIGO, tanto el return como las llaves están implicitas en la funcion

const resta = (a, b) => a - b;

console.log(`Soy la funcion resta y devuelvo ${resta(8, 5)}`);

/* ---------------------------------------------- */

function pintarFondo(color, tag) {
  /* let elemento = document.querySelector(tag); */
  tag.style.backgroundColor = color;
}

let elemento = document.getElementById("parrafo");

elemento.addEventListener("click", () => {
  pintarFondo("rgb(110, 150, 207)", elemento);
});