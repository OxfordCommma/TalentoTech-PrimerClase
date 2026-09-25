import * as gameFunctions from "./gameFunctions.js";
import readline from "readline";

//------------------------------------
// Crea una interfaz para poder leer lo que se escribe en terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const menu = function() {

    console.log("====== MI JUEGO ======");
    console.log("\x1b[31m1. Ver total de personajes\x1b[0m");
    console.log("\x1b[32m2. Buscar un personaje en especial\x1b[0m");
    console.log("3. Salir");

    // Método que pregunta por terminal y espera respuesta del usuario
    rl.question("Elegí una opción: ", respuesta => {

        if (respuesta === "1") {

            const { personajesCantidad, personajesNombres } = gameFunctions.obtenerPersonajes();

            const res = `Existen ${personajesCantidad} y sus nombres son: ${personajesNombres.join(', ')}`;
            console.log(res);

            menu();
        }

        if (respuesta === "2") {
            
            rl.question("Elegí al personaje: ", personaje => {

               console.log(gameFunctions.obtenerPersonaje(personaje))

                menu();
            });

        }

        if (respuesta === "3") {
            console.log("¡Chau!");
            rl.close();
        }
    });
}

menu();