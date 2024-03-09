/* 53. Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
de: Iva, Subtotal y Total de la compra de los artículos. */

let iva;
let subtotal = 0;
let total;

let iv = parseInt(prompt("INGRESE EL PORCENTAJE DE IVA PARA CADA PRODUCTO"))

for (let i = 1; i <= 5; i++) {
  let prod = parseInt(prompt("INGRESE EL VALOR DEL PRODUCTO " + i))

  subtotal += prod;
}

iva = (subtotal * iv) / 100;

total = subtotal + iva;

alert(`EL VALOR DEL IVA ES DE $${iva}
EL SUBTOTAL ES DE $${subtotal}
EL TOTAL A PAGAR ES DE $${total}`)