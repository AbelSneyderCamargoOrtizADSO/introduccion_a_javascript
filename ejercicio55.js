/* 55. En una tienda de HELADO da un descuento por compra a sus clientes con membresía
dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los
descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
20% de descuento. */

let valor = parseFloat(prompt("INGRESE EL VALOR DE LA COMPRA"));
let mem = prompt("INGRESE EL TIPO DE MEMBRESIA (A, B O C)");
let descuento;

switch (mem) {
    case 'A':
        descuento = 0.10; 
        break;
    case 'B':
        descuento = 0.15; 
        break;
    case 'C':
        descuento = 0.20; 
        break;
    default:
        descuento = 0; 
        break;
}

let desc = valor * descuento;

let total = valor - desc;

alert(`GRACIAS POR SU COMPRA!
SU DESCUETO ES DE $${desc}
EL TOTAL A PAGAR ES DE $${total}`)







































/*
function calcularDescuento(precio, tipoMembresia) {
    let descuento;

    switch (tipoMembresia) {
        case 'A':
            descuento = 0.10; // 10% de descuento
            break;
        case 'B':
            descuento = 0.15; // 15% de descuento
            break;
        case 'C':
            descuento = 0.20; // 20% de descuento
            break;
        default:
            descuento = 0; // No hay descuento si el tipo de membresía no es válido
            break;
    }

    const precioFinal = precio - (precio * descuento);
    return precioFinal;
}

// Ejemplo de uso:
const precioOriginal = 50; // Supongamos que el precio original del helado es $50
const tipoMembresia = 'B'; // Supongamos que el cliente tiene una membresía tipo B
const precioConDescuento = calcularDescuento(precioOriginal, tipoMembresia);

console.log(`El precio final después del descuento es: $${precioConDescuento}`);
*/