/* 34. Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
depósito.
a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
b. Volumen = PI *(radio^2)* H (altura del depósito).
El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo
en segundos. */


let q = parseFloat(prompt("INGRESE EL VALOR DEL CAUDAL DEL DEPOSITO"))
let r = parseFloat(prompt("INGRESE EL VALOR DEL RADIO DEL DEPOSITO"))
let h = parseFloat(prompt("INGRESE EL VALOR DE LA ALTURA DEL DEPOSITO "))

let v = Math.PI * Math.pow(r, 2) * h;
let tiempo = v / q;

alert("EL TIEMPO ESTIMADO PARA EL LLENADO DEL DEPOSITO ES DE " + tiempo.toFixed(3) + " SEGUNDOS")


