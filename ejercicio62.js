/* 62. Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces. */

let pal = prompt("INGRESE LA PALABRA")
let l = "";

for (let i = 1; i < 11; i++) {
  l += pal + "\n";
}

alert(l)