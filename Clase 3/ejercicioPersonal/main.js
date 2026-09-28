import * as gameFunctions from "./gameFunctions.js";
import readline from "readline";

//------------------------------------
// Crea una interfaz para poder leer lo que se escribe en terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const menu = function () {

    console.log("====== MI JUEGO ======");
    console.log("\x1b[31m1. Ver total de personajes\x1b[0m");
    console.log("\x1b[32m2. Buscar un personaje en especial\x1b[0m");
    console.log("\x1b[33m3. Ingresar un nuevo personaje\x1b[0m");
    console.log("\x1b[34m4. Eliminar un personaje\x1b[0m");
    console.log("5. Salir");

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

            rl.question("Escribe su nombre: ", nombre => {

                rl.question("Escribe su clase: ", clase => {

                    rl.question("Escribe su nivel: ", nivel => {

                        rl.question("Escribe su cantidad de vida: ", vida => {

                            rl.question("Escribe sus habilidades: ", habilidades => {

                                console.log("Se agregó al siguiente personaje: ")

                                console.log(gameFunctions.crearPersonaje(nombre, clase, nivel, vida, habilidades))

                                menu();

                            });

                        });

                    });

                });

            });

        }

        if (respuesta === "4") {

            rl.question("Elegí al personaje a eliminar: ", respuesta => {

                console.log(gameFunctions.eliminarPersonaje(respuesta))

                menu();
            });

        }

        if (respuesta === "5") {
            console.log("¡Chau!");
            rl.close();
        }
    });
}

menu();