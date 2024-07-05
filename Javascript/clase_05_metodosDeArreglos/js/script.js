/* ------------- METODOS DE ARREGLOS -------------- */

let num = [1, 2, 3, 4, 5, 6, 7];

/* AGREGAR ELEMENTOS */

// METODO array.push(parametro) ==> AGREGA UN ELEMENTO AL FINAL DEL ARRAY
num.push("metodo push");
// queda en ---> [1, 2, 3, 4, 5, 6, 7, 'metodo push']

// METODO array.unshift(parametro) ==> AGREGA ELEMENTOS AL INICIO DEL ARRAY
num.unshift("metodo unshift");
// queda en ---> ['metodo unshift', 1, 2, 3, 4, 5, 6, 7, 'metodo push']

/* ELIMINAR ELEMENTOS */

//METODO array.pop() ==> QUITA EL ÚLTIMO ELEMENTO DEL ARRAY
//se puede guardar el elemento eliminado en una variable
let eliminado = num.pop();
// queda en ---> ['metodo unshift', 1, 2, 3, 4, 5, 6, 7]
console.log(eliminado); // devuelve ---> 'metodo push'

//METODO array.shift() ==> QUITA EL PRIMER ELEMENTO DEL ARRAY
let otroEliminado = num.shift();
// queda en ---> [1, 2, 3, 4, 5, 6, 7]
console.log(otroEliminado); // devuelve ---> 'metodo unshift'

//METODO array.splice(posicion, cantidadDeElementosABorrar) ==> REMUEVE DIFERENTES ELEMENTOS DEL ARRAY
let borrado = num.splice(2, 3);
// queda en ---> [1, 2, 6, 7]
console.log(borrado); // devuelve ---> [3, 4, 5]

/* BUSCAR SU POSICION */

//METODO array.findIndex(funcion) ==> VERIFICA LA POSICION DE UN ELEMENTO DEL ARRAY MEDIANTE UNA FUNCION  Y NOS DEVUELVE SU INDICE
// Si no lo encuentra, devuelve -1
let index = num.findIndex((e) => e == 7);
console.log(index); // devuelve ---> 3
index = num.findIndex((e) => e == 3);
console.log(index); // devuelve ---> -1

//METODO array.indexOf(parametro) ==> VERIFICA LA POSICION DE UN ELEMENTO DEL ARRAY  Y NOS DEVUELVE SU INDICE
//Si no lo encuentra, devuelve -1
num.indexOf(6);
// devuelve ---> 2
num.indexOf("hola");
// devuelve ---> -1

/* ---------- DOM + METODOS -------------- */

const listaDeItems = document.querySelector("#items");
const itemsInput = document.querySelector("#nuevo-item");
const btnAgregarItem = document.querySelector("#agregar-item");

const items = [
  { id: 100, nombre: "Jhonny Deep" },
  { id: 200, nombre: "Brad Pitt" },
  { id: 300, nombre: "Leonardo DiCaprio" },
  { id: 400, nombre: "Morgan Freeman" },
];

// METODO spread operator, CLONA EL ARREGLO ORIGINAL
const clonItems = [...items];

// console.log(clonItems, "<----- arreglo clonado");
// console.log(items, "<--- arreglo original");

btnAgregarItem.addEventListener("click", () => {
  const nuevoInvitado = { id: Date.now(), nombre: itemsInput.value };

  clonItems.push(nuevoInvitado);
  itemsInput.value = "";

  render();
});

function render() {
  let html = "";
  for (const iterator of clonItems) {
    html += `<li>${iterator.nombre} <button onclick="borrar(${iterator.id})">X</button></li>`;
  }
  listaDeItems.innerHTML = html;
}

function borrar(id) {
  const index = clonItems.findIndex((e) => e.id === id);
  console.log(index, "<--- index dentro de borrar");
  clonItems.splice(index, 1);

  render();
}
