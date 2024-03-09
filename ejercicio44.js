/* 44. Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como
constante el valor de una moneda. */

let copausd = 3904.69;
let copaeur = 4273.10;


let cop = parseFloat(prompt("INGRESE LA CANTIDAD DE PESOS"))

let usd = cop / copausd;
let eur = cop / copaeur;

alert(`LA CONVERSION A DOLARES SON: ${usd.toFixed(2)} DOLARES
LA CONVERSION A EUROS SON: ${eur.toFixed(2)} EUROS`)