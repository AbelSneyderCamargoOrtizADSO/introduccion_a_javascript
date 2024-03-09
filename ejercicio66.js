/* 66. Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
dura la inversión. */

let cantidad = parseFloat(prompt("INGRESE LA CANTIDAD A INVERTIR:"));
let interes = parseFloat(prompt("INGRESE EL INTERES ANUAL (en %):"));
let year = parseInt(prompt("INGRESE LA CANTIDAD DE AÑOS:"));

let cap = cantidad;

for (let i = 1; i <= year; i++) {
  cap += cap * (interes / 100);
  alert(`CAPITAL DESPUES DEL AÑO ${i}: $${cap.toFixed(2)}`);
}