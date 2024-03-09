/* 21. Escribir un programa que calcule el volumen de un elipsoide. */

let a = parseFloat(prompt("INGRESE EL VALOR DEL EJE A "));
let b = parseFloat(prompt("INGRESE EL VALOR DEL EJE B "));
let c = parseFloat(prompt("INGRESE EL VALOR DEL EJE C "));

let vol = (4 / 3) * Math.PI * a * b * c;

alert("EL VOLUMEN DEL ELIPSOIDE ES: " + vol);