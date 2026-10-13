// Crea un array con 10 objetos, donde cada objeto represente un automóvil con la 
// siguiente información: 
// ○  Marca 
// ○  Modelo 
// ○  Año 
// ○  Color 

// Usa un método de array para recorrer la lista e imprime por consola todos los datos 
// de los automóviles cuyo año sea mayor a 2018. 

const automoviles = [
    {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2015,
        color: "negro"
    },
    {
        marca: "Volkswagen",
        modelo: "Golf",
        ano: 2017,
        color: "negro"
    },
    {
        marca: "Ford",
        modelo: "Focus",
        ano: 2012,
        color: "gris"
    },
    {
        marca: "Chevrolet",
        modelo: "Cruze",
        ano: 2016,
        color: "azul"
    },
    {
        marca: "Renault",
        modelo: "Clio",
        ano: 2010,
        color: "rojo"
    },
    {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2020,
        color: "gris"
    },
    {
        marca: "Ford",
        modelo: "Mustang",
        ano: 2021,
        color: "azul"
    },
    {
        marca: "Volkswagen",
        modelo: "T-Cross",
        ano: 2019,
        color: "blanco"
    },
    {
        marca: "Chevrolet",
        modelo: "Tracker",
        ano: 2022,
        color: "negro"
    },
    {
        marca: "Renault",
        modelo: "Sandero",
        ano: 2023,
        color: "rojo"
    }
];

// const autosPost2018 = automoviles.filter((automovil) => automovil.ano >= 2018);
// console.log(autosPost2018);

// automoviles.forEach((auto) => {
//     if (auto.ano >= 2018) [
//         console.log(auto)
//     ]
// })

//-----------------------------------------------------------------------------------

// 1.  Crea una función que recorra el array de automóviles. 
// 2.  Usa destructuring dentro de la función para obtener el color de cada automóvil. 
// 3.  La función debe aceptar un color como parámetro y devolver por consola cuántos 
// automóviles tienen ese color. 
import readline from "readline";

const autoColorCounter = function (color1) {

    let colors = [];

    automoviles.forEach((auto) => {
        let { color } = auto;
        colors.push(color);
    })

    const colorsQuantity = colors.filter((value) => value === color1).length;

    let result = `La cantidad de autos con el color indicado es de ${colorsQuantity}`;

    return result;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Elegí un color: ", respuesta => {
    console.log(autoColorCounter(respuesta));
})

//-------Resolución del profesor
function recorrerAutos(autos = [], color_if = false) {
    if (color_if) {
        let cantidad = 0;

        autos.forEach((auto) => {
            const { color } = auto;

            if (color_if.toLowerCase() == color.toLowerCase()) {
                cantidad++;
            }
        });

        console.log(`La cantidad de autos de color ${color_if} es: ${cantidad}`);
    } else {
        console.log("Se necesita un color para poder contar");
    }
}

recorrerAutos(automoviles, 'azul');