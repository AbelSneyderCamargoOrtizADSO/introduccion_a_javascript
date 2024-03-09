/* 64. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
todos los números impares desde 1 hasta ese número separados por coma. */

let n = parseInt(prompt("INGRESE UN NUMERO ENTERO POSITIVO "))
let l = [];

for (let i = 1; i <= n; i++) {
  if (!(i % 2 == 0)) {
    l.push(i)
  }
}

alert(l)