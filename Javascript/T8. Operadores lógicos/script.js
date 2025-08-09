// OPERADORES LÓGICOS

let x = 5
let y = 5

let z = x == y;      // (== operador lógico que pregunta si X es igual a Y)

console.log(z)       // Respuesta por consola: TRUE

// Si cambiamos algunos de los datos 

let a = 5
let b = '5'         // Cuidado: es un STRING

// let c = a == b;  // No compara el tipo
let c = x === y;    // Ahora calculará el valor absoluto y el tipo de dato

console.log(c)      // Respuesta por consola: TRUE 
                    // (Compara valor y tipo. Para comparar tipo debemos añadir un "=" más)

// Respuesta en terminal: ahora será FALSE si los valores o tipos no coinciden

// Ahora quiero saber si son distintos: utilizaremos el signo ! (OPERADOR DE NEGACIÓN).

let d = 5
let e = 5
let f = d != e;     
console.log(f)      // Respuesta por consola: FALSE 

// También podemos usar los operadores de mayor que o menor que: <  >  <=  >= .

// Otro ejemplo de combinaciones

let g = 5
let h = 9
let i = 5

// Utilizaremos && para meter una segunda condición -> 
// Si las dos condiciones son verdaderas devolverá verdadero. 
// Si alguna es falsa, devolverá false.

let j = g < h && h > i;
console.log(j)

/*
    - Compara las dos partes:
      ¿"g" es menor que "h"? -> Verdadero
      ¿"h" es mayor que "i"? -> Verdadero
    - Como las dos respuestas son verdaderas, nos devolverá TRUE por consola.

    Ahora utilizaremos "o" (||) -> Con que una condición sea verdadera ya devolverá verdadero.
*/

let k = g < h || h > i;
