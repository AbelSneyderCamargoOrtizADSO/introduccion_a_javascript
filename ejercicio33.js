/* 33. Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos. */

let m = parseFloat(prompt("INGRESE EL AÑO DE NACIMIENTO DE LA MADRE"))
let h = parseFloat(prompt("INGRESE EL AÑO DE NACIMIENTO DEL HIJO "))

let edad = h - m;

alert("LA EDAD DE LA MADRE AL MOMENTO DE DAR A LUZ ERA DE " + edad + " AÑOS")