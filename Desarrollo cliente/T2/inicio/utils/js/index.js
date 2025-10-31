console.log("Esto es mi código JS")

// Comentarios 
/* lineas multiples */

// class -> Tenemos la posibilidad de tener todo esto o no tenerlo
    // Variables
    // Constructores
    // Métodos -> aqui funciones

// Tipos de variables que existen 
// No indico tipos en la variable -> Js es un lenguaje NO TIPADO. El tipo lo dira el navegador
// constante (en java eran final) -> const
const NOMBRE_ASIGNATURA = "Desarrollo cliente"

// IMPORTANTE 
const elementos = [];
elementos[0] = "cosa";
// variables ambito bloque -> let
// Ejemplo de bloque, si el let le metemos dentro del bloque, luego con un console.log fuera del bloque no lo reconocera
// Si lo metemos fuera del bloque, si lo reconocera
let nombre;
if (true){
    nombre = "Miguel" // Este es el que mas utilizaremos 
    nombre = "Juan"
    var apellido = "Perucha"
}
console.log(nombre)

// variable global -> var (no se utiliza)
console.log(apellido) // Como es global podemos acceder a ella

let nombre2 = "miguel" // string
let edad = 40 // number
let altura = 1.75 // number
let experiencia = false // boolean -> true o false
let fechaNacimiento = new Date() // object -> de tipo Date
let asignaturas = [] // array - arraylist
let sinValor = null // null -> NullPointerException
let sinDefinir;  // undefined 
// NaN -> Not a Number
console.log(typeof nombre2)
console.log(typeof edad)
console.log(typeof altura)
console.log(typeof experiencia)
console.log(typeof fechaNacimiento)
console.log(typeof asignaturas)
console.log(typeof sinValor)
console.log(typeof sinDefinir)