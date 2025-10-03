// SINTAXIS DE LAS VARIABLES 

const nombreDeLaVariable = 'Nombre' // -> Con camelcage
const Variable = 'Nombre'           // -> Tambien se puede con mayusculas.
const _variable = 'Nombre'          // -> Con barra baja
const $variable = 'Nombre'          // -> Con el dolar

/*
	Reglas:
	1) Se puede iniciar con $, minúsculas, mayusculas y _ (guión bajo)
	2) No se puede iniciar con numeros pero si usarlos en el resto del nombre -> variable2// variable2_$
	3) No se puede usar caracteres especiales salvo $ y _
*/

// Tambien si guardamos variables 

let nombreApellido = 'Pedro'
let nombreapellido

console.log(nombreapellido) // Saldra UNDEFINED
console.log(nombreApellido) // Devolvera Pedro