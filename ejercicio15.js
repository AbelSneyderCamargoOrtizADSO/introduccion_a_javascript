/* 15. Escribir un programa que calcule la longitud y el área de una circunferencia. */


let r = parseFloat(prompt("INGRESE EL RADIO DE LA CIRCUNFERENCIA"));

let l = 2 * Math.PI * r;
let a = Math.PI * r * r;

alert(`LA LONGITUD DE LA CIRCUNFERENCIA ES: ${l}
EL AREA DE UNA CIRCUNFERENCIA ES: ${a}`);