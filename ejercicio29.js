/* 29. Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para
obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5 puntos. */

let sexam = 0;

for (let i = 1; i <= 4; i++) {
  let exam = parseFloat(prompt("INGRESE LA CALIFICACION DEL EXAMEN " + i));

  if (exam < 1 || exam > 5) {
    alert("INGRESE UNA CALIFICACION VALIDA (DE 1 A 5)")
    i--;
  } else {
    sexam += exam;
  }

}

prom = sexam / 4;

alert("EL PROMEDIO DE LAS CALIFICACIONES ES: " + prom)