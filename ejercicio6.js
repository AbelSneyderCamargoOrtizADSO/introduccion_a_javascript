/* 6. los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo
y el nombre, el grupo A está formado por las mujeres con un nombre anterior a la
M y los hombres con un nombre posterior a la N y el grupo B por el resto, escribir
un programa que pregunte al usuario su nombre y sexo y muestre por pantalla el
grupo al que corresponde. */

let nombre = prompt("INGRESE SU NOMBRE").toLowerCase()
let sexo = prompt("INGRESE SU SEXO (hombre o mujer)").toLowerCase()

if (/^[A-Ma-m]/.test(nombre[0]) && sexo === "mujer") {
  alert("EL USUARIO PERTENECE AL GRUPO A")
} else if (/^[N-Zn-z]/.test(nombre[0]) && sexo === "hombre") {
  alert("EL USUARIO PERTENECE AL GRUPO A")
} else if (/^[N-Zn-z]/.test(nombre[0]) && sexo === "mujer") {
  alert("EL USUARIO PERTENECE AL GRUPO B")
} else if (/^[A-Ma-m]/.test(nombre[0]) && sexo === "hombre") {
  alert("EL USUARIO PERTENECE AL GRUPO B")
} else if (sexo != "hombre" || sexo != "mujer") {
  alert("INGRESE UN GENERO VALIDO")
}