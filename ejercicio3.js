/* 3. Escribir un programa que pida al usuario dos números y muestre por pantalla su
división, si el divisor es cero el programa debe mostrar un error, se debe manejar
mediante excepciones y el mensaje debe ser personalizado. */

let n1 = parseFloat(prompt("INGRESE EL PRIMER NUMERO"));
let n2 = parseFloat(prompt("INGRESE EL SEGUNDO NUMERO"));

try {
    if (n2 === 0) {
      throw new Error("EL DIVISOR NO PUEDE SER 0");
    }
    let div = n1 / n2;
    alert("EL RESULTADO DE LA DIVISION ES: " + div.toFixed(4));
} catch (error) {
    alert(error.message);
}