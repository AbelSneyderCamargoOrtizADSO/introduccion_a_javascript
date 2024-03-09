/* 32. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un
2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada
producto y el total de la compra. */

let total = 0;

for (let i = 1; i <= 5; i++) {
  let prod = parseFloat(prompt("INGRESE EL PRECIO DEL PRODUCTO " + i))

  if (i <= 2) {
    desc = prod * 0.05;
  } else if (i >= 4 && i <= 5) {
    desc = prod * 0.02;
  } else {
    desc = 0
  }

  precio = prod - desc;
  total += precio;

  alert("EL VALOR DEL PRODUCTO NUMERO " + i + " ES DE: $" + precio)
}

alert("EL VALOR TOTAL DE LA COMPRA ES DE $" + total)