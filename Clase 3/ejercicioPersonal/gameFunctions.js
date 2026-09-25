import { personajes } from "./characters.js"

// Devuelve cantidad y nombre de personajes
export const obtenerPersonajes = function () {
    
    let personajesCantidad = 0;
    let personajesNombres = [];

    personajesCantidad = personajes.length;

    for (let personaje of personajes) {

        personajesNombres.push(personaje.nombre)

    }

    return { personajesCantidad, personajesNombres };
};

export const obtenerPersonaje = function (value) { 
    
    const personajeSolicitado = personajes.find(
        personaje => personaje.nombre === value);

    if (personajeSolicitado) {

        // let personajeSolicitadoFormateado = '';
        // const personajeSolicitadoArray = Object.entries(personajeSolicitado);
    
        // personajeSolicitadoArray.forEach()

        return personajeSolicitado;

    } else {

        return "No se encontró personaje solicitado.";

    }

    
};