/* 65. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
la cuenta atrás desde ese número hasta cero separados por comas. */

let n = parseInt(prompt("INGRESE UN NUMERO ENTERO POSITIVO "))
let l = [];

if (n > 0) {
  for (let i = n; i >= 0; i--) {
    l.push(i)
  }

  alert(l)
} else {
  alert("INGRESE UN NUMERO ENTERO POSITIVO")
}
