/* 25. Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa
que ingresando el costo de los medicamentos calcule el descuento y el precio final. */

let pb = parseFloat(prompt("INGRESE EL PRECIO DE LOS MEDICAMENTOS"));

let desc = pb * 0.10;

let preciof = pb - desc;

alert(`EL VALOR DEL DESCUENTO ES: $${desc}
EL PRECIO FINAL ES: $${preciof}`)
