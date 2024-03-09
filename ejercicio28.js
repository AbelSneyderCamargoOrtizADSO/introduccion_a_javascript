/* 28. Calcular el sueldo de un empleado dados como datos de entrada:
a. Nombre.
b. horas de trabajo.
c. pago en hora. */

let nom = prompt("INGRESE EL NOMBRE DEL EMPLEADO ")
let h = parseFloat(prompt("INGRESE LAS HORAS DE TRABAJO "))
let pagoh = parseFloat(prompt("INGRESE EL VALOR DEL PAGO POR HORA "))

let sueldo = h * pagoh;

alert("EL SUELDO DEL EMPLEADO " + nom + " ES DE: $" + sueldo)