/* 72. Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a
una las letras de la palabra introducida empezando por la última. */

let pal = prompt("INGRESE UNA PALABRA")

for (let i = pal.length - 1; i >= 0; i--) {
  alert(pal[i]);
}
