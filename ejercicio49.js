/* 49. Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean
positivos: área triangulo= lado * lado */

let lado1 = parseFloat(prompt("INGRESE LA LONGITUD DEL PRIMER LADO DEL RECTANGULO:"));
let lado2 = parseFloat(prompt("INGRESE LA LONGITUD DEL SEGUNDO LADO DEL RECTANGULO:"));


if (lado1 > 0 && lado2 > 0) {
    let area = lado1 * lado2;
    alert(`EL AREA DEL RECTANGULO ES: ${area}`);
} else {
    alert("LOS LADOS DEBEN SER POSITIVOS");
}
