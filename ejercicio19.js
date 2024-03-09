/* 19. Escribir un programa que calcule el área y el volumen de un cilindro. */

let r = parseFloat(prompt("INGRESE EL RADIO DEL CILINDRO "));
let h = parseFloat(prompt("INGRESE LA ALTURA DEL CILINDRO "));


let a = 2 * Math.PI * r * (h + r);
let v = Math.PI * Math.pow(r, 2) * h;

alert(`EL AREA DEL CILINDRO ES: ${a.toFixed(3)}
EL VOLUMEN DEL CILINDRO ES: ${v.toFixed(3)}`);
