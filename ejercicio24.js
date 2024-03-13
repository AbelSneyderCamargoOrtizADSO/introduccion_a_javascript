/* 24. Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo -
2.3e-1, -3e2, 23, 3.2). */

let regex = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;

let result = `
-2.3e-1: ${regex.test('-2.3e-1')},   
-3e2: ${regex.test('-3e2')},         
23: ${regex.test('23')},             
3.2: ${regex.test('3.2')},           
3.: ${regex.test('3.')},             
.3: ${regex.test('.3')},             
3e+3: ${regex.test('3e+3')},         
-3.5E+3: ${regex.test('-3.5E+3')},   
abc: ${regex.test('abc')},           
3.5.5: ${regex.test('3.5.5')},       
-e3: ${regex.test('-e3')}            
`;

alert(result);

