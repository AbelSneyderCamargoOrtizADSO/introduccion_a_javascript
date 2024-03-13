/* 58. Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
zodiacal pertenece, para ello usar if_else anidados. */

let mes = prompt("INTRODUCE EL NOMBRE DEL MES:").toLowerCase();
let signo = '';

if (mes === 'enero') {
signo = 'CAPRICORNIO';
} else if (mes === 'febrero') {
signo = 'ACUARIO';
} else if (mes === 'marzo') {
signo = 'PISCIS';
} else if (mes === 'abril') {
signo = 'ARIES';
} else if (mes === 'mayo') {
signo = 'TAURO';
} else if (mes === 'junio') {
signo = 'GEMINIS';
} else if (mes === 'julio') {
signo = 'CANCER';
} else if (mes === 'agosto') {
signo = 'LEO';
} else if (mes === 'septiembre') {
signo = 'VIRGO';
} else if (mes === 'octubre') {
signo = 'LIBRA';
} else if (mes === 'noviembre') {
signo = 'ESCORPIO';
} else if (mes === 'diciembre') {
signo = 'SAGITARIO';
} else {
signo = 'INGRESA UN MES VALIDO';
}

alert("TU SIGNO ZODIACAL ES: " + signo);
  