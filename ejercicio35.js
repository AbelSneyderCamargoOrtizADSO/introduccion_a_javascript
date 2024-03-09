/* 35. Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada
uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000.
Después de pagar le sobran $91000. ¿Cuánto dinero tenía? */

let llaves = 11500 * 5;
let b = 1168000;
let cp = 87000 * 3;
let sobra = 91000;

let tenia = llaves + b + cp + sobra;

alert("EL JEFE DE LA OBRA TENIA: $" + tenia)