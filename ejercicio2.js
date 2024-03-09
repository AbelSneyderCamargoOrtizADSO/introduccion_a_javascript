/* 2. escribir un programa que almacene la cadena de caracteres contraseña de una
variable, pregunte al usuario por la contraseña e imprima por pantalla si la
contraseña introducida por el usuario coincide con la guardada en la variable sin
tener en cuenta mayúsculas y minúsculas, se debe validar que solo se pueda
ingresar valores alfanuméricos.
*/

let contraseña = "abel"

let contra = prompt("INGRESE LA CONTRASEÑA").toLowerCase()

if (!isNaN(contra)) {
  alert("INGRESE SOLO VALORES ALFANUMERICOS")
} else if (contra === contraseña) {
  alert("LA CONTRASEÑA COINCIDE")
} else if (contra != contraseña) {
  alert("LA CONTRASEÑA NO COINCIDE")
}