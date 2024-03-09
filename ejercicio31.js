/* 31. Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la
solución, por favor utilizar funciones matemáticas para ello.:
a. rc((x2-x1)^2 + (y2-y1)^2). */

let x1 = parseFloat(prompt("INGRESE EL VALOR DEL PUNTO X1 "))
let y1 = parseFloat(prompt("INGRESE EL VALOR DEL PUNTO Y1 "))
let x2 = parseFloat(prompt("INGRESE EL VALOR DEL PUNTO X2 "))
let y2 = parseFloat(prompt("INGRESE EL VALOR DEL PUNTO Y2 "))


let d = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))


alert("LA DISTANCIA ENTRE LOS DOS PUNTOS ES: " + d.toFixed(3))