/* 51. Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
los $130.000 el descuento será del 15%, de lo contrario no hay descuento. */

let n = parseInt(prompt("INGRESE LA CANTIDAD DE PAGOS"));

let suma = 0;
let total;
let desc;

for (let i = 1; i <= n; i++) {
  let mt = parseFloat(prompt("INGRESE EL MONTO DEL PAGO " + i));

  suma += mt;

}

if (suma > 130000) {
  desc = suma * 0.15;
  total = suma - desc;
} else {
  desc = 0
  total = suma
}

alert("EL TOTAL A PAGAR ES DE $" + total + " CON UN DESCUENTO DE $" + desc)

