/* 22. Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada
minuto cuesta $355 pesos y un IVA 20 %. */

let min = parseFloat(prompt("INGRESE LA CANTIDAD DE MINUTOS "));


let iva = (355 * min) * 0.20;

let pago = (355 * min) + iva;

alert("EL PAGO DE LA LLAMADA ES DE: $" + pago);

