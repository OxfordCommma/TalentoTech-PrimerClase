/* “Imaginá que los precios de los productos del cliente están listos para 
cargarse en el sistema”. Pero hay un detalle: antes de enviarlos, 
tenés que calcular el IVA del 21% y presentarlos de manera clara.  */

// 1.  Creá un array con 10 números que representen los precios de los productos.

let prices = [50, 100, 125, 150, 175, 200, 225, 250, 275, 300];

// 2.  Utiliza un método de array para calcular el precio con IVA incluido para cada valor.

console.log(`Cantidad de productos: ${prices.length}`);

const pricesWithIVA = prices.map(price => price * 1.21);

console.log(`Precios con IVA: ${pricesWithIVA.join(' - ')}`);

/* Ejercicio 2 
Matías te desafía a usar template literals para estructurar tu salida de esta forma: 
El precio es: ${valor}.- IVA incluido. 
Imprimí cada precio ajustado en la consola siguiendo este formato. Cada mensaje debe ser 
claro y profesional, como si estuvieras preparando un reporte para el cliente.  */

pricesWithIVA.forEach(price => {
    console.log(`El precio es: $${price}.- IVA incluido.`);
});