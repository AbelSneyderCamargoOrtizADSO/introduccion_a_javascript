/* 46. Calcule el mayor de tres números, permitiendo leer 3 valores diferentes. */

let my = 0;

for (let i = 1; i <= 3; i++){
  let num = parseFloat(prompt("INGRESE EL " + i + " NUMERO"));

  if (num > my) {
    my = num;
  }
}

alert("EL NUMERO MAYOR ES " + my)