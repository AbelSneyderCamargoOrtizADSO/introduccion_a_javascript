/* 68. Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10. */

let multi = 10;
let tabla = "";

for (let i = 1; i <= multi; i++) {
  tabla += `TABLA DEL ${i} \n`
  for (let j = 0; j < multi; j++) {
    tabla += `${i} x ${j} = ` + i * j + "\n";
  }
}

alert(tabla)
