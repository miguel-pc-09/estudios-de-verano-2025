// NUMBER 
let a = 5                 // Valor entero
let b = 5.5               // Valor flotante

// STRING
let c = 'Cadena de texto' // Valor String

// BOOLEANO
let d = true              // Verdadero
let e = false             // Falso

// **Podremos usar  &&   ||  (operadores lógicos)

// UNDEFINED
let f                     // Sin asignar valor

// NULL 
let g = null;             // No tiene valor

// OBJECT
let objeto = {
    clave: valor
}

// ARRAY
let array = [1, 2, 3, 4, 5, 6]          // Arreglos o listas de números
let array2 = ['HTML', 'CSS', 'JS']      // Arreglos o listas de palabras

// DATE
const date = new Date("MES-DÍA-AÑO")
console.log(date)

// DATO CURIOSO
let h = 5           // Número
let i = '5'         // Texto 

let j = h + i
console.log(j)    // Nos devolverá un "55". 
                  // 5 más '5' (string) lo concatena.

// A veces podremos encontrar datos que vengan en string.
// Para no cometer errores, podemos parsear los datos.

let k = h + parseInt(i)   // Ahora el resultado, en vez de 55, será un 10.

let l = 'Hola me llamo '
let m = 'Miguel'
let n = l + m 
console.log(n)          // "Hola me llamoMiguel" -> lo junta porque no separamos.
                        // Para esto, después de "llamo" añadimos un espacio.

// Para flotantes usaremos el parseFloat(b)




