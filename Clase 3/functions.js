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

//Diferencia entre funciones y metodos
//Una funcion es un bloque de codigo que realiza una tarea especifica y puede ser reutilizada en diferentes partes del programa. 
//Un metodo es una funcion que esta asociada a un objeto y se utiliza para manipular o acceder a los datos de ese objeto.

//Diferencia entre parametros y argumentos
//Los parametros son variables que se definen en la declaracion de una funcion y se utilizan para recibir valores cuando la funcion es llamada.
//Los argumentos son los valores que se pasan a una funcion cuando se llama, y se asignan a los parametros correspondientes.

function calculadora(a, b, operacion) {
    return operacion(a, b);
}

//HOF: High Order Function, es una funcion que recibe otra funcion como argumento o devuelve una funcion como resultado.

console.log(calculadora(5, 3, suma)); // Output: 8
console.log(calculadora(5, 3, resta)); // Output: 2
console.log(calculadora(5, 3, multiplicacion)); // Output: 15