// Math -> matemáticas

Math.E                  // devuelve el número de Euler
Math.PI                 // devuelve PI
Math.SQRT2              // devuelve la raíz cuadrada de 2
Math.SQRT1_2            // devuelve la raíz cuadrada de 1/2 
Math.LN2                // devuelve el logaritmo natural de 2
Math.LN10               // devuelve el logaritmo natural de 10
Math.LOG2E              // devuelve el logaritmo de E en base 2
Math.LOG10E             // devuelve el logaritmo de E en base 10


// Constantes que más se suelen utilizar
// -------------- PI --------------------------------------
console.log('')
console.log('----- PI ------- ')
console.log(Math.PI)
// consola -> 3.141592653589793

// ------------- Euler ------------------------------------ 
console.log('')
console.log('----- Euler ------- ')
console.log(Math.E)

// ---------- Logaritmos de 10 o de 2 ---------------------
console.log('')
console.log('----- Logaritmos de 10 y 2 ------- ')
console.log(Math.LN10)
console.log(Math.LN2)

// ---------- Raíces cuadradas ----------------------------- 
console.log('')
console.log('----- Raíz cuadrada 2 y 1/2 ------- ')
console.log(Math.SQRT2)
console.log(Math.SQRT1_2)

// --------- Logaritmos de E en base 10 o de 2 ------------
console.log('')
console.log('----- Logaritmos E en base 10 y 2 ------- ')
console.log(Math.LOG10E)
console.log(Math.LOG2E)

// Formas de redondear 
console.log('')
console.log('----- Formas de redondeo.-----')
// Tenemos el número 2.2
const numero = 2.2
/* A la hora de redondear tenemos 4 formas distintas
ROUND -> sacará el más cercano; en este caso 2. Si fuera 2.7 sería 3 porque está más cerca de 3 que de 2; el 2.5 también sería 3
CEIL -> siempre apuntará hacia arriba; en este caso 3
FLOOR -> siempre apuntará hacia abajo; en este caso 2
TRUNC -> trunca en los enteros; se olvida de los decimales 
*/
const redondeo1 = Math.round(numero)
const redondeo2 = Math.ceil(numero)
const redondeo3 = Math.floor(numero)
const redondeo4 = Math.trunc(numero)
console.log('Redondeo ROUND')
console.log(redondeo1)
console.log('Redondeo CEIL')
console.log(redondeo2)
console.log('Redondeo FLOOR')
console.log(redondeo3)
console.log('Redondeo TRUNC')
console.log(redondeo4)

// Método Math Random, el método más utilizado sobre todo en videojuegos 

console.log('')
console.log('----- Random del 0 al 1 ------')
// Sacaremos del 0 al 1 los aleatorios
console.log(Math.random())
console.log('----- Random del 0 al 100 ------')
// Sacar aleatorios del 0 al 100
console.log(Math.random()*100)

// Redondeo del aleatorio 
console.log('')
console.log('----- Redondeo del random ------')
let numero1 = Math.random()*100
let redondeo5 = Math.round(numero1)
console.log(redondeo5)
