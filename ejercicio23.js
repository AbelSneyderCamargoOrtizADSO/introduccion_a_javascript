/* 23. Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil
expresada en kilómetros por hora, proporcione la velocidad en metros por segundo. */

let kh = parseFloat(prompt("INGRESE LA VELOCIDAD DEL AUTOMOVIL EN KILOMETROS POR HORA"))

let ms = kh * (5 / 18)

alert("LA VELOCIDAD EN METROS POR SEGUNDO ES: " + ms.toFixed(3) + "m/s");
