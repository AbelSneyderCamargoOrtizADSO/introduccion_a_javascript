/* 27. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha
calificación se compone de los siguientes porcentajes:
a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
b. 30% de la calificación examen final.
c. 15% de la calificación trabajo final.
*/

let sumexam = 0;

for (let i = 1; i <= 3; i++) {
  let exam = parseFloat(prompt("INGRESE LA CALIFICACION DEL PARCIAL " + i))

  sumexam += exam
}

let examf = parseFloat(prompt("INGRESE LA CALIFICACION DEL EXAMEN FINAL "))

let trabf = parseFloat(prompt("INGRESE LA CALIFICACION DEL TABAJO FINAL "))

promf = ((sumexam / 3) * 0.55) + (examf * 0.30) + (trabf * 0.15)

alert("EL PROMEDIO FINAL DE LA MATERIA ALGORTIMOS ES: " + promf);
