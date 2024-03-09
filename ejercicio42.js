/* 42. Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el
monto total de la venta, según la cantidad de artículos solicitados durante el día. */

const pl = 10000; 
const pc = 7550;  
const pla = 5550;  

let cl = parseInt(prompt("INGRESE LA CANTIDAD DE LIBROS VENDIDOS:"));
let cc = parseInt(prompt("INGRESE LA CANTIDAD DE CUADERNOS VENDIDOS:"));
let cla = parseInt(prompt("INGRESE LA CANTIDAD DE LAPICEROS VENDIDOS:"));

let total = (cl * pl) + (cc * pc) + (cla * pla);

alert("EL MONTO TOTAL DE LA VENTA ES: $" + total);
