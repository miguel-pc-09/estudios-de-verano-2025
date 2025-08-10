// FUNCIONES

/*
Una función en JavaScript es un bloque de código reutilizable que sirve para realizar una tarea específica.
Se puede pensar en una función como un conjunto de instrucciones agrupadas bajo un nombre especial.
Además, se puede llamar desde cualquier parte del código de JavaScript. 
Esto ayuda a no repetir código y hace que el programa sea más legible y eficiente.

Las funciones se ejecutan cuando las llamamos.
*/

// LA SINTAXIS ES LA SIGUIENTE:

function nombreFuncion(parametro1, parametro2) {    // Los parámetros pueden separarse por comas
	lineasDeCodigoQueHaraEstaFuncion1;
	lineasDeCodigoQueHaraEstaFuncion2;
	lineasDeCodigoQueHaraEstaFuncion3;
	lineasDeCodigoQueHaraEstaFuncion4;
}

// Ahora escribiremos lo siguiente para probar:
	
function suma(x, y) {
	return x + y;
}

// Llamamos a la función
let respuesta = suma(5, 6);
console.log(respuesta);

/*
Algunas funciones pueden devolver un valor o no devolverlo.
El console.log también puede recibir varios valores separados por comas.
*/

// Otra forma usando console.log con separación por comas
let a = 5;
let b = 6;

function suma2(x, y) {
	return x + y;
}

let respuesta2 = suma2(a, b);

console.log(`La respuesta de ${a} + ${b} es igual a:`, respuesta2);   
// Para poder utilizar ${} tenemos que usar las comillas invertidas ` `, de lo contrario no funcionará.

// -----------------------------------------------------------
// Ejemplo de función que no retorna nada:
let a2 = 5;
let b2 = 6;

function suma3(x, y) {
	console.log(x + y);
}

suma3(a2, b2);  
// Esto solo mostrará en consola el valor 11.

// -----------------------------------------------------------
// Ejemplo: Convertir de Fahrenheit a Celsius
const temperatura = 90;

function transformarACelsius(fahrenheit) {
	return (fahrenheit - 32) * (5 / 9);
}

const respuesta3 = transformarACelsius(temperatura);

console.log(`La temperatura en grados Celsius es:`, respuesta3);
// Como puede dar decimales, podríamos usar parseInt(respuesta3) para obtener solo la parte entera, por ejemplo 32 en vez de 32.2222222.

// -----------------------------------------------------------
// const respuesta4 = transformarACelsius(temperatura);
// Lo ponemos así porque los paréntesis ejecutan la acción.
// Si no los ponemos, quedaría así:
const respuesta4 = transformarACelsius;              
// Esto haría que respuesta4 sea una referencia a la función, no el resultado de ejecutarla.

// -----------------------------------------------------------
// FUNCIÓN FLECHA (NO LA PODEMOS USAR SIEMPRE)
// ¿Cuándo se usa?
// - Cuando queremos definir funciones más cortas.
// - Ventaja: si recibe un solo parámetro podemos quitar los paréntesis.
// - Si retorna una sola línea podemos omitir las llaves.

let num = '10';

// FUNCIÓN CLÁSICA
function sumarDecenas(numero) {  
	return numero + 12;
}

// FUNCIÓN DE FLECHA O ARROW FUNCTION
let sumarDecena = (numero) => {
	return numero + 12;
}

// Forma simplificada si solo tiene un parámetro y retorna una línea:
// let sumarDecena = numero => numero + 12;

// Otro ejemplo de función flecha:
let funcion = () => console.log("Soy una función");

funcion();

// -----------------------------------------------------------
const respuesta5 = sumarDecena(parseInt(num));
console.log(respuesta5);
