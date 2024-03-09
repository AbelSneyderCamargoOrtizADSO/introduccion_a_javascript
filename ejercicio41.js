/* 41. Ingrese una frase que lo identifique como programador de Software y luego mostrar esta
frase invertida. */

let frase = "Si lo puedes pensar, lo puedes programar";

let invertida = "";

for (let i = frase.length - 1; i >= 0; i--) {
  invertida += frase[i];
}

alert("FRASE INVERTIDA: " + invertida);
