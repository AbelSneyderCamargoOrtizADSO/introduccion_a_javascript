/* 57. Consideramos la asignación de una calificación literal a un rango dado de calificaciones
numéricas de la siguiente manera: Rango de calificaciones: 9.1 a 10 Asignar la calificación
de A equivale a Excelente 8.1 a 9 Asignar la calificación de A equivale a Muy bien 7.5 a 8
Asignar la calificación de A equivale a Bien Menor a 7.5 asignar la calificación de NA No
Aprobado. */

let calif = parseFloat(prompt("INGRESE LA CALIFICACION"));
let cf;

if (calif >= 9.1 && calif <= 10) {
  cf = "A - EXCELENTE"
} else if (calif >= 8.1 && calif <= 9) {
  cf = "A - MUY BIEN"
} else if (calif >= 7.5 && calif <= 8) {
  cf = "A - BIEN MENOR"
} else if (calif <= 7.5) {
  cf = "NA - NO APROBADO"
} else {
  cf = "CALIFICACION NO VALIDA"
}

alert("SU CALIFICACION ES " + cf)

