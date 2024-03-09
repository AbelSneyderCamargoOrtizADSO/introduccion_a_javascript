/* 50. Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que
muestre en pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable temperatura es mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra
Normal. */

let temp = parseFloat(prompt("INGRESE EL VALOR DE LA TEMPERATURA "));
let pres = parseFloat(prompt("INGRESE EL VALOR DE LA PRESION "));   

if (pres > 200 || temp > 100) {
  alert("ALARMA!!!!!")
} else {
  alert("NORMAL")
}
