/* 39. Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
Considere que se cobra por m2 y realice el código que representen el algoritmo que le
permita ir generando presupuestos para cada cliente. */

let n = parseInt(prompt("INGRESE LA CANTIDAD DE CLIENTES "))

let ppm = parseFloat(prompt("INGRESE EL PRECIO POR METRO CUADRADO "))

for (let i = 1; i <= n; i++) {
  let m2 = parseFloat(prompt("INGRESE LA CANTIDAD DE METROS CUADRADOS "))

  presu = m2 * ppm;

  alert("EL PRESUPUESTO PARA EL CLIENTE " + i + " ES DE: $" + presu)
}

