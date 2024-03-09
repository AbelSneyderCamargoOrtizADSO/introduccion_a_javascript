/* 56. Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
$100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
un interés anual de 4%. Al final mostrar el saldo final y el interés pagado. */

let saldo = parseFloat(prompt("INGRESE EL VALOR DEL SALDO"))
let interes;

if (saldo < 100000) {
  interes = 0.03;
} else if (saldo > 100000) {
  interes = 0.04;
}

let intepag = saldo * interes;
let sf = saldo + intepag;

alert(`EL SALDO FINAL ES DE $${sf}
EL INTERES PAGADO ES DE $${intepag}`)
