/* 67. Escribir un programa que pida al usuario un número entero y muestre por pantalla un
triángulo rectángulo como el de más abajo, de altura el número introducido. 
1
31
531
7531
97531 
*/

let n = parseInt(prompt("INTRODUCE UN NUMERO ENTERO:"));
let triangulo = "";

for (let i = 1; i <= n; i++) {
    let linea = "";
    for (let j = 0; j < i; j++) {
        linea = (2 * j + 1) + linea;
    }
    triangulo += linea + "\n";
}

alert(triangulo);

