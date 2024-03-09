/* 60. Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que
lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad
de cursos es mayor que 6 el pago será únicamente de $1.200.000. */

let n = parseInt(prompt("INGRESE LA CANTIDAD DE CURSOS "))

let pago;

if (n < 6) {
  pago = 2000000 * n;
} else if (n > 6) {
  pago = 1200000 * n;
}

alert("EL TOTAL A PAGAR ES DE: $" + pago);
