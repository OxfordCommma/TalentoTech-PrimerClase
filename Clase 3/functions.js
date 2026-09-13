//Suma mediante parametros
function suma(a, b) {
    return a + b;
}

//Resta mediante parametros
const resta = function(a, b) {
    return a - b;
}

//Multiplicacion mediante parametros
const multiplicacion = (a, b) => {
    return a * b;
}

console.log(suma(5, 3)); // Output: 8
console.log(resta(5, 3)); // Output: 2
console.log(multiplicacion(5, 3)); // Output: 15

// Diferencias
// Función: bloque de codigo que realiza una tarea especifica y puede reutilizarse en diferentes partes del programa. 
// Método: funcion asociada a un objeto y utilizada para manipular o acceder a los datos de ese objeto.

//Diferencias
// Parámetros: variables definidas en la declaracion de una funcion y se utilizan para recibir valores cuando la funcion es llamada.
// Argumentos: valores que se pasan a una funcion cuando se llama, y se asignan a los parametros correspondientes.

//---------------------------------------

//HOF (High Order Function):  funcion que recibe otra funcion como argumento o devuelve una funcion como resultado.
function calculadora(a, b, operacion) {
    return operacion(a, b);
}

console.log(calculadora(5, 3, suma));
console.log(calculadora(5, 3, resta));
console.log(calculadora(5, 3, multiplicacion));