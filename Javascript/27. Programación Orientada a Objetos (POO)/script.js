// CLASES, OBJETOS, CONSTRUCTOR E INSTANCIA

/*------------ holamundo.js -----------------
Creamos un JS llamado hola mundo, y dentro creamos un console.log("Hola mundo"). Después, en la terminal (Control + ñ o desde Terminal),
escribimos: node .\holamundo.js, pulsamos Enter y debería salir el mensaje del log.
*/

/*------------ Persona.js ------------------
Este será un archivo JS de clase, por lo que la primera letra será en mayúscula: Persona.js.
Dentro comenzaremos poniendo
    - class Persona {} -
Dentro de las llaves le meteremos su constructor. A su vez, dentro de los paréntesis sus argumentos, y dentro de las llaves las características y qué recibe cada una:
    - constructor(param1, param2){
        this.caracteristica1 = param1
        this.caracteristica2 = param2
    }
 */

/* ------ Construcción de una persona ---------
Más abajo crearemos una persona de la siguiente forma:
const persona = new Persona("arg1","arg2")

Después las podemos llamar con console.log,
console.log(persona)
O también solicitar una de sus características con un punto:
console.log(persona.caracteristica1)
*/

/* Construcción de una persona. De esta forma estamos instanciando un objeto basado en la clase (plantilla). En vez de persona se puede poner:
   persona1, persona2, Raúl, Marta... esto daría igual.

// const persona = new Persona("Alto", "Ingeniero")

// Otra persona
// const persona2 = new Persona("Inteligente", "Arquitecta")

// Desde persona podemos acceder a sus características poniendo un punto
// persona.
// Con un console.log vamos a sacar:

/*
console.log(persona)
console.log(persona.caracteristica1)
console.log(persona.caracteristica2)

console.log(persona2)
console.log(persona2.caracteristica1)
console.log(persona2.caracteristica2)
*/
/*--- Resultado ---
Persona { caracteristica1: 'Alto', caracteristica2: 'Ingeniero' }
Alto
Ingeniero
*/
/* --- Resultado ---
Persona { nombre: 'Carolina', edad: 35, profesión: 'Astronauta' }
Persona {
  nombre: 'Ricardo',
  edad: 18,
  profesión: 'Estudiante de Programación'
}
 */
// Si quisiéramos, por ejemplo, eventualmente sacar solo el nombre sería:
// console.log(carolina.nombre)   // Consola ->   Carolina

/* -------------- MÉTODOS ----------------
Comportamientos o métodos: otra función aparte del constructor.
CREAMOS LA CLASE ANIMAL.
Para crear los métodos, fuera del constructor pero dentro de la clase animal, crearemos los métodos de la siguiente manera:
método(recibe o no parámetros){lo que hace}. En el siguiente ejemplo hacemos que la clase animal, por ejemplo, haga un sonido.
class Animal {
    constructor(nombre, edad, especie, sonido){

        this.nombre = nombre
        this.edad = edad
        this.especie = especie
        this.sonido = sonido
   }
   hacerSonido(){   -> No recibe nada
    console.log(this.sonido) -> lo que hace
   }
}
   const manchita = new Animal("Manchita", 1, "Perro", "Guau")
   manchita.hacerSonido()    -> En consola => Guau
*/

/*-----  ENCAPSULAMIENTO --------------------------------
Es la capacidad de hacer que las propiedades de un objeto no sean consumibles o editables desde afuera.
Creamos otro archivo llamado Mascota.js; en este crearemos propiedades privadas.
*/


