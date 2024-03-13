/* 20. Escriba un algoritmo que permita obtener las raíces reales de la ecuación de
segundo grado: a * x2 + b + x + c, siendo X un valor constante. */

let a = parseFloat(prompt("INGRESE EL VALOR DE A"));
let b = parseFloat(prompt("INGRESE EL VALOR DE B"));
let c = parseFloat(prompt("INGRESE EL VALOR DE C"));

let discri = b * b - 4 * a * c;
if (discri > 0) {
    let raiz1 = (-b + Math.sqrt(discri)) / (2 * a);
    let raiz2 = (-b - Math.sqrt(discri)) / (2 * a);
    alert(`LAS RAICES REALES SON ${raiz1} Y ${raiz2}`);
} else if (discri === 0) {
    let raiz = -b / (2 * a);
    alert(`HAY UNA RAIZ REAL Y REPETIDA: ${raiz}`);
} else {
    alert("NO HAY RAICES REALES");
}

