/* 40. Una empresa que contrata personal requiere determinar la edad de las personas que
solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que
nacieron. Realice el código que representen el algoritmo para solucionar este problema. */


let n = parseFloat(prompt("INGRESE LA CANTIDAD DE PERSONAS QUE SOLICITAN EL TRABAJO "))
let aa = parseFloat(prompt("INGRESE EL AÑO ACTUAL "))


for (let i = 1; i <= n; i++) {
  let an = parseFloat(prompt("INGRESE EL AÑO DE NACIMIENTO DE LA PERSONA " + i))

  let edad = aa - an;

  alert("LA EDAD DE LA PERSONA ES DE: " + edad + " AÑOS")
}


