/* 13. Escribir un programa que lea 4 números y calcule la media. */

let suma = 0;

for (let i = 1; i <= 4; i++) {
  let num = parseFloat(prompt(`INGRESE EL ${i} NUMERO`));

  suma += num;
}

prom = suma / 4;

alert("EL PROMEDIO DE LOS 4 NUMEROS ES: " + prom)