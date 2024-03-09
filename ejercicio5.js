/* 5. Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte
al usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe
tributar o no. */

let edad = prompt("INGRESE SU EDAD")
let ingreso = prompt("INGRESE EL VALOR DE SUS INGRESOS MENSUALES")


if (edad >= 16 && ingreso >= 1000) {
  alert("EL USUARIO DEBE TRIBUTAR")
} else {
  alert("EL USUARIO NO DEBE TRIBUTAR")
}
