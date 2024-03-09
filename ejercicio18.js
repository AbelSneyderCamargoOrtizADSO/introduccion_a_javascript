/* 18. Escribir un programa que evalúe la siguiente expresión(a + 7 * c) / (b + 2 - a) + 2 * b */

let a = parseFloat(prompt("INGRESE EL VALOR DE A"));
let b = parseFloat(prompt("INGRESE EL VALOR DE B"));
let c = parseFloat(prompt("INGRESE EL VALOR DE C"));

let result = (a + 7 * c) / (b + 2 - a) + 2 * b;

alert("EL RESULTADO DE LA EXPRESION (a + 7 * c) / (b + 2 - a) + 2 * b ES: " + result);