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

        return personajeSolicitado;

    } else {

        return "No se encontró personaje solicitado.";

    }

};

export const crearPersonaje = function (nombre, clase, nivel, vida, habilidades) {
    
    let personajeNuevo = new Object;

    personajeNuevo.nombre = nombre;
    personajeNuevo.clase = clase;
    personajeNuevo.nivel = Number(nivel);
    personajeNuevo.vida = Number(vida);
    personajeNuevo.habilidades = [habilidades];

    personajes.push(personajeNuevo);

    return personajeNuevo;

}

export const eliminarPersonaje = function (value) {
    
     const indice = personajes.findIndex(
        personaje => personaje.nombre === value);
    
    if (indice !== -1) {
        personajes.splice(indice, 1);

        return "Se eliminó al personaje";

    }

    return "No se eliminó al personaje"

}