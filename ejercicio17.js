/* 17. Escribir un programa que calcule el volumen de una esfera. */

let r = parseFloat(prompt("INGRESE EL RADIO DE LA ESFERA"));

let vol = (4 / 3) * Math.PI * Math.pow(r, 3)

alert("EL VOLUMEN DE LA ESFERA ES: " + vol.toFixed(3))
