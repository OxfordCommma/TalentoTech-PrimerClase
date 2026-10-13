console.log("Iniciando servidor");

const args = process.argv.slice(2);

switch(args[0]){
    case 'GET':
        console.log('GET');
        console.log('Toma un dato');
        break;
    case 'POST':
        console.log('POST');
        if(args[1]) {
            console.log(`Recibimos ${args[1]} satisfactoriamente`);
        } else {
            console.log(`Recibimos incompleto, pero satisfactoriamente`);
        }
        break;
    case 'PUT':
        console.log('PUT');
        if(args[1]) {
            console.log(`Editamos dato con id: ${args[1]} satisfactoriamente`);
        } else {
            console.log(`Comando PUT incompleto, el id es necesario`);
        }
        break;
    case 'DELETE':
        console.log('DELETE');
        console.log('Elimina un dato');
        break;
    default:
        console.log('Coman do incompleto o inválido');
}