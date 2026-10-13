// Exportando con CommonJS
const math = require('./otherThanIndex/math');

console.log("Hola.")
console.log(math.add(3, 5));
console.log(math.substract(10, 5));

// Exportando con ESModules
//import { sumar } from './otherThanIndex/functions';
//console.log(sumar(2, 3));


// const fs = require('fs');
// fs.readFile(
//     __dirname + '/otherThanIndex/ejemplo.txt',
//     'utf8',
//     (err, data) => {
//         if (err) {
//             console.error('Error al leer el archivo:', err);
//             return;
//         }
//         console.log('Contenido del archivo:', data);
//     }
// );

const path = require('path');
const fs = require('fs');

// Construimos la ruta al archivo ejemplo.txt
const filePath = path.join(__dirname, 'otherThanIndex', 'ejemplo.txt');

// Leemos el archivo
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    console.log('Contenido del archivo:', data);
});