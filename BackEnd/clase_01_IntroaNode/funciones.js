function saludar(params) {
  console.log(`Hola ${params}! Un gusto saludarte`);
}

function pais(params) {
  console.log(`Ahora vivis en el pais ${params}`);
}

function suma(a, b) {
  return a + b;
}

module.exports = { saludar, pais, suma };
