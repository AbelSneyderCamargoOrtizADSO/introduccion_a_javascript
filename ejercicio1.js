/* 1. Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es
mayor o menor de edad, el programa debe validar que solo se puedan ingresar
números positivos.
*/

let edad = prompt("INGRESE SU EDAD")

if (edad <= 0) {
  alert("INGRESE UNA EDAD VALIDA")
} else if (edad < 18) {
  alert("USTED ES MENOR DE EDAD")
} else if (edad >= 18) {
  alert("USTED ES MAYOR DE EDAD")
}