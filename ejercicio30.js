/* 30. Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12
caracteres, y al menos una mayúscula, una minúscula, y un dígito.*/   

let contrasena = prompt("INGRESE LA CONTRASEÑA");


if (contrasena.length < 8 || contrasena.length > 12) {
    alert("LA CONTRASEÑA DEBE TENER ENTRE 8 Y 12 CARACTERES ");
} else if(!(/[A-Z]/.test(contrasena))){
    alert("LA CONTRASEÑA DEBE TENER ALMENOS UNA LETRA MAYUSCULA ");
} else if(!(/[a-z]/.test(contrasena))){
    alert("LA CONTRASEÑA DEBE TENER ALMENOS UNA LETRA MINUSCULA ");
} else if(!(/[0-9]/.test(contrasena))){
    alert("LA CONTRASEÑA DEBE TENER ALMENOS UN NUMERO ");
}else{
    alert("LA CONTRASEÑA ES FUERTE Y SEGURA");
}