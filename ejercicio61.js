/* 61. Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual
fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
obtuvieron las siguientes calificaciones:
a. «a» = menor que 100 y mayor igual que 90
b. «b» = menor que 90 y mayor igual que 80
c. «c» = menor que 80 y mayor igual que 70
d. «d» = menor que 70 y mayor igual que 60 */


let nA = 0;
let nB = 100;
let maxn = 0;
let a = 0;
let b = 0;
let c = 0;
let d = 0;


let n = parseInt(prompt("INGRESE LA CANTIDAD DE NOTAS "))

for (let i = 1; i <= n; i++) {
  let nota = parseInt(prompt("INGRESE LA NOTA NUMERO " + i));

  if (nota > nA) {
    nA = nota;
  }

  if (nota < nB) {
    nB = nota
  }

  if (nota === 100) {
    maxn++;
  }

  if (nota < 100 && nota >= 90) {
    a++;
  } else if (nota < 90 && nota >= 80) {
    b++;
  } else if (nota < 80 && nota >= 70) {
    c++;
  } else if (nota < 70 && nota >= 60) {
    d++;
  }
}

alert(`LA NOTA MAS ALTA FUE ${nA}
LA NOTA MAS BAJA FUE ${nB}
${maxn} ESTUDIANTES OBTUVIERON LA MAXIMA CALIFICACION
${a} ESTUDIANTES OBTUVIERON LA CALIFICACION DE A
${b} ESTUDIANTES OBTUVIERON LA CALIFICACION DE B
${c} ESTUDIANTES OBTUVIERON LA CALIFICACION DE C
${d} ESTUDIANTES OBTUVIERON LA CALIFICACION DE D
`)

