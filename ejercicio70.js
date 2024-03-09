/* 70. Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta. */

let contrasena = "contraseña"


while (true) {
  let ingre = prompt("INGRESE LA CONTRASEÑA")

  if (ingre === contrasena) {
    alert("CONTRASEÑA CORRECTA!!!!!")
    break
  }
  
}