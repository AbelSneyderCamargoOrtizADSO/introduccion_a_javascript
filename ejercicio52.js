/* 52. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de
horas trabajadas. */

const p = 20000;
const a = 10000;
let pago;

let cargo = prompt("INGRESE EL CARGO: PLANTA O ADMINISTRATIVO (P O A)").toLowerCase();

let h = parseInt(prompt("INGRESE EL TOTAL DE HORAS TRABAJADAS"));

if (cargo === "p") {
  pago = p * h;
  alert("EL PAGO DEL TRABAJADOR ES DE: $" + pago)
} else if (cargo === "a") {
  pago = a * h;
  alert("EL PAGO DEL TRABAJADOR ES DE: $" + pago)
} else {
  alert("INGRESE UN CARGO VALIDO")
}






