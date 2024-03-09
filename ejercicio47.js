/* 47. Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el
menor o si son iguales. */

let my = 0;
let mr = Infinity;
let cn = [];

for (let i = 1; i <= 3; i++){
  let num = parseFloat(prompt("INGRESE EL " + i + " NUMERO"));

  cn.push(num)

  if (num > my) {
    my = num;
  } 

  if (num < mr) {
    mr = num;
  } 
}

if (cn[0] === cn[1] && cn[1] === cn[2]) {
  alert("LOS NUMEROS SON IGUALES")
  
} else {
  alert("EL NUMERO MAYOR ES " + my)
  alert("EL NUMERO MENOR ES " + mr) 
}



