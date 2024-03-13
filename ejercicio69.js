/* 69. Escribir un programa que pida al usuario un número entero y muestre por consola un
triángulo rectángulo como el de más abajo. */

let n = parseInt(prompt("INTRODUCE UN NUMERO ENTERO:"));
let tria = "";

for (let i = 1; i <= n ; i++) {
    linea = "";

    for (let j = 1; j <= i; j++) {
        linea += "*";
    }

    tria += linea + "\n";
}

alert(tria)