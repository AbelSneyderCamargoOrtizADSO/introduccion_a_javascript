/* 71. Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un
número primo o no. */

let numero = parseInt(prompt("INGRESE UN NUMERO ENTERO:"));
let esPrimo = true;

if (numero <= 1) {
  esPrimo = false; 
} else {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break; 
    }
  }
}

if (esPrimo) {
  alert("EL NUMERO ES PRIMO");
} else {
  alert("EL NUMERO NO ES PRIMO");
}
