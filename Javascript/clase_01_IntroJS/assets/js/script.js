/* --------- VALORES PRIMITIVOS --------- */

/* Números */
(3 + 2) * 3 + 1; // devuelve ---> 16
3 + 2 * 3 + 1; // devuelve ---> 10

/* String */
("Hola, cómo estás?");
("2");

/* Boolleans */
true;
false;

/* Funcion para saber el tipo de dato ingresado (SIEMPRE LO DEVUELVE COMO UN STRING) */
typeof 12; // devuelve ---> 'number'
typeof "hola"; // devuelve ---> 'string'
typeof true; // devuelve ---> 'boolean'
typeof "23"; // devuelve ---> 'string'

/* --------- MENSAJES DE CONSOLA --------- */
console.log("Probando un mensaje");

/* --------- ALERTAS --------- */
// alert("Soy una alerta");
// confirm("Acepta los terminos y condiciones");
// prompt("Decime como te llamas");

/* --------- VARIABLES --------- */
let numero = 123;
console.log(numero, "<--- Esto es la variable numero");

let nombre = "Juan"; // Declarando la Variable
console.log(nombre, "<---- nombre original");

nombre = "Alberto"; // Modificando el valor
console.log(nombre, "<---- nombre modificado");

/* --------- CONCATENACION --------- */

// let nombreCompleto = prompt("Decime tu nombre completo");
// alert("Hola " + nombreCompleto);

/* El prompt SIEMPRE DEVUELVE UN TIPO DE DATO STRING */

// let primerNum = prompt("Decime un numero");
// let segundoNum = prompt("Decime otro numero");
// let resultado = primerNum + segundoNum;
// alert("La suma de tus numeros es: " + resultado);

/* Trasformar el tipo de dato para que quede una suma numerito en vez de una concatenacion */
// let primerNum = Number(prompt("Decime un numero"));
// let segundoNum = Number(prompt("Decime otro numero"));
// let resultado = primerNum + segundoNum;
// alert("La suma de tus numeros es: " + resultado);

/* Otra resolucion del mismo problema ↓↓↓↓ */
// let primerNum = prompt("Decime un numero");
// let segundoNum = prompt("Decime otro numero");
// let resultado = Number(primerNum) + Number(segundoNum);
// alert("La suma de tus numeros es: " + resultado);

/* --------- TEMPLATE LITERALS --------- */
let edad = 23;
let apellido = "Salas";
let primerNombre = "Abigail";
// concatenacion ↓↓↓↓
console.log(
  "Hola, mi nombre es" +
    primerNombre +
    " y mi apellido es" +
    apellido +
    ". Tengo " +
    edad +
    " años de edad"
);

// template literal ↓↓↓↓
console.log(
  `Hola, mi nombre es ${primerNombre} y mi apellido es ${apellido}. Tengo ${edad} años de edad`
);

//let nombreCompleto = `${primerNombre} ${apellido}`
//let nombreCompleto = primerNombre + " " + apellido;
// console.log(
//   `Hola, mi nombre completo es ${nombreCompleto} y tengo ${edad} años de edad`
// );

/* --------- DOM (Document Object Model) --------- */

let elemento = document.querySelector("p");
console.log(elemento);

let menu = document.querySelector(".navbar");
let cardSection = document.querySelector("#card-section");
let footer = document.querySelector("footer");

/* MANIPULANDO EL DOM */

/* Cambiar o agregar texto */
menu.innerHTML = "Modificando el menú desde JS";
cardSection.innerHTML = "Agregando contenido desde JS";

/* Cambiar o agregar ESTILOS */
elemento.style.color = "red";
menu.style.backgroundColor = "#03563f";
cardSection.style.fontSize = "30px";
footer.style.fontFamily = "Fantasy";

let cuerpo = document.querySelector("body");
cuerpo.style.backgroundColor = "rgb(89, 62, 7)";
