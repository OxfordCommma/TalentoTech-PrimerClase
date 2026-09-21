export const sumaAsync = (a, b) => {
    // La función devuelve una promesa, que queda en estado "pending".
    return new Promise((resolve) => {
        // Simulamos una operación que tarda 1 segundo.
        setTimeout(() => {
            // Cuando pasa 1 segundo, resolvemos la promesa. Le pasamos como resultado la suma de a + b.
            resolve(a + b);
        }, 1000);
    });
};
// * Promise + resolve: la promesa y su resolución

// Llamamos a la función pasando 10 y 5. La función devuelve una Promesa.
sumaAsync(10, 5)
    // .then() se ejecuta cuando la Promesa se resuelve correctamente. "resultado" recibe el valor que enviamos con resolve().
    .then(resultado => {
        console.log("Suma async:", resultado);
    }
);
// * then: ejecución cuando la promesa se resuelve correctamente


// ==============================
// GUARDAR LA PROMESA EN UNA VARIABLE
// ==============================


const resultadoPromesa = sumaAsync(20, 10);
// ! IMPORTANTE: resultadoPromesa NO contiene 30.
// Contiene la PROMESA que todavía está esperando. "pending" significa que la promesa todavía no terminó.
// Eso pasa porque JS no espera a que la promesa se resuelva (no hay then ni await), sino que sigue ejecutando el código.
console.log("Resultado de la promesa:", resultadoPromesa); // Promise { <pending> }


// ==============================
// USO DE async / await
// ==============================


// Creamos una función asíncrona. La palabra "async" permite utilizar "await" dentro de ella.
const resultadoPromiseAwait = async () => {
    // Llamamos a sumaAsync(). "await" espera a que la Promesa se resuelva.
    // Cuando se resuelve, obtiene el valor enviado mediante resolve().
    const resultado = await sumaAsync(20, 10);
    console.log("Resultado con await:", resultado);
};

// * async + await: espera a que la promesa se resuelva y obtiene el valor de resolve().

resultadoPromiseAwait();

console.log("Esto se ejecuta antes de que la promesa se resuelva");