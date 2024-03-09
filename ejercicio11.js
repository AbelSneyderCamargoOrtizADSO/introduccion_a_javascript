/* 11. Escribir un programa que sume, resta, multiplique y divida dos números. */

let n1 = parseFloat(prompt("INGRESE EL PRIMER NUMERO"))
let n2 = parseFloat(prompt("INGRESE EL SEGUNDO NUMERO"))

let suma = n1 + n2;
let resta = n1 - n2;
let multi = n1 * n2;
let div = n1 / n2;

alert(`LA SUMA DE LOS DOS NUMEROS ES: ${suma} 
LA RESTA DE LOS DOS NUMEROS ES: ${resta}
LA MULTPLICACION DE LOS DOS NUMEROS ES: ${multi}
LA DIVISION DE LOS DOS NUMEROS ES: ${div}`)