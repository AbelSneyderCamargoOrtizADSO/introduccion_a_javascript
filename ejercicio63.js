/* 63. Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los
años que ha cumplido (desde 1 hasta su edad). */

let edad = parseInt(prompt("INGRESE SU EDAD "))

let l = "";

for (let i = 1; i <= edad; i++) {
  l += i + "\n";
}

alert(l)