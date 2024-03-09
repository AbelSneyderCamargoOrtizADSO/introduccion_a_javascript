/* 73. Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre
por pantalla el número de veces que aparece la letra en la frase. */

let frase = prompt("INGRESE UNA FRASE");
let letra = prompt("INGRESE UNA LETRA");
let c = 0


for (let i = 0; i < frase.length; i++) {
  if (frase[i] === letra) {
    c++;
  }
}

alert(`LA LETRA ${letra} APARECE ${c} VECES EN LA FRASE`);