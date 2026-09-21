export const sumaAsync = (a, b) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
};

// uso de promesa
sumaAsync(10, 5)
    .then(resultado => {
        console.log("Suma async:", resultado);
    }
);

const resultadoPromesa = sumaAsync(20, 10);
console.log("Resultado de la promesa:", resultadoPromesa); // Promise { <pending> }

const resultadoPromiseaAwait = async () => {
    const resultado = await sumaAsync(20, 10);
    console.log("Resultado con await:", resultado);
};

resultadoPromiseaAwait();

console.log("Esto se ejecuta antes de que la promesa se resuelva");