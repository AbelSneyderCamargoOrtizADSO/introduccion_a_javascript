/* 59. En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75. */

let n = parseFloat(prompt("INGRESE LA CANTIDAD DE ESTUDIANTES POSTULADOS"))

for (let i = 0; i <= n; i++) {
  let edad = parseFloat(prompt("INGRESE LA EDAD DEL ESTUDIANTE"))
  let estatura = parseFloat(prompt("INGRESE LA ESTATURA DEL ESTUDIANTE EN CM"))
  let peso = parseFloat(prompt("INGRESE EL PESO DEL ESTUDIANTE"))

  if (edad <= 19 && estatura > 175 && peso > 75 && peso < 80) {
    alert("EL ESTUDIANTE ES APTO PARA LA SELECCION")
  } else {
    alert("EL ESTUDIANTE NO ES APTO PARA LA SELECCION")
  }

}


