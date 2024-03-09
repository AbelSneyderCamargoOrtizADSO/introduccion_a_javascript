/* 48. Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica
desea calcular "Triángulo y Círculo: (Escriba T o C):
a. Triangulo = base * altura / 2
b. Circulo = PI * radio* radio */

let fg = prompt("ESCOJA LA FIGURA GEOMETICA TRIANGULO O CIRCULO (T O C)").toLowerCase();

if (fg === "t") {

  let b = parseFloat(prompt("INGRESE EL VALOR DE LA BASE"));
  let h = parseFloat(prompt("INGRESE EL VALOR DE LA ALTURA"));
  let area = (b * h) / 2
  alert("EL AREA DEL TRIANGULO ES: " + area)
  

} else if (fg === "c") {
  let r = parseFloat(prompt("INGRESE EL RADIO DEL CIRCULO"));
  let area = Math.PI * Math.pow(r, 2)
  alert("EL AREA DEL CIRCULO ES: " + area.toFixed(4))
}
