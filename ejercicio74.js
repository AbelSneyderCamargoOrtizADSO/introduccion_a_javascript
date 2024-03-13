/* Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el
usuario escriba “salir” que terminará. */


for (;;) {
    let intro = prompt("INTRODUCE ALGO").toLowerCase();

    if (intro === "salir") {
        break;
    } else{
        alert(intro)
    }
}


