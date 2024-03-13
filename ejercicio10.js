/* 10. La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los
ingredientes para cada tipo de pizza aparecen a continuación.
a. Ingredientes vegetarianos: Pimiento y tofu.
b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en
función de su respuesta le muestre un menú con los ingredientes disponibles para que
elija. Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están
en todas las pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana
o no y todos los ingredientes que lleva. */


let elec = prompt("DESEAS UNA PIZZA VEGETARIANA (SI O NO)").toLowerCase();
let ingres;
let pizza = "";

if (elec === "si") {
    let ingre = parseInt(prompt(`SELECCIONE EL INGREDIENTE:
    1. Pimiento 
    2. Tofu`));

    pizza = "VEGETARIANA"

    switch (ingre) {
        case 1:
            ingres = "Pimiento";
            break;
        case 2:
            ingres = "Tofu";
            break;
        default:
            break;
    }

} else if (elec === "no") {
    let ingre = parseInt(prompt(`SELECCIONE EL INGREDIENTE:
    1. Pepperoni 
    2. Jamón
    3. Salmón`));

    pizza = "NO VEGETARIANA"

    switch (ingre) {
        case 1:
            ingres = "Pepperoni";
            
            break;
        case 2:
            ingres = "Jamón";
            break;
        case 3:
            ingres = "Salmón";
            break;
        default:
            break;
    }

} else {
    alert("INGRESE UNA OPCION VALIDA (SI O NO)")
}


alert(`LA PIZZA ES ${pizza}
LOS INGREDIENTES SON:
- Mozzarella
- Tomate
- ${ingres}`)

