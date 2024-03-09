/* 54. Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
segundo, en caso contrario indicar con un mensaje que la operación no es posible
realizarla. */

let n1 = parseFloat(prompt("INGRESE EL PRIMER NUMERO "));
let n2 = parseFloat(prompt("INGRESE EL SEGUNDO NUMERO "));
let resta;

if (n1 > n2) {
  resta = n1 - n2;
  alert("EL RESULTADO DE LA RESTA ES: " + resta)

} else {
  alert("NO ES POSIBLE REALIZAR LA OPERACION (EL PRIMERO NUMERO DEBE SER MAYOR QUE EL SEGUNDO)")
}

