/* 43. Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir
la presencia de comillas y caracteres escapados. */

let regex = /"(\\"|[^"])*"/;

let result = `
"hola": ${regex.test('"hola"')},               
"hola mundo": ${regex.test('"hola mundo"')},   
"Dice \\"hola\\"": ${regex.test('"Dice \\"hola\\""')}, 
"": ${regex.test('""')},                         
"\\\\"": ${regex.test('"\\\\"')},                
"asd: ${regex.test('"asd')},         
"aa\\"bb": ${regex.test('"aa\\"bb"')}    
`;

alert(result);
