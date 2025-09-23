// CLASES, OBJETOS, CONSTRUCTOR E INSTANCIA

/*------------ holamundo.js -----------------
Creamos un js llamado hola mundo, y dentro creamos un console.log("Hola mundo"), despues en terminal pulsando Control + ñ, o terminal. 
Aqui escribimos: node .\holamundo.js pulsamos enter y deberia salir el mensaje del log.
*/

/*------------ Persona.js ------------------
Este sera un archivo js de clase por lo que la primera letra sera en mayuscula. Persona.js. 
Dentro comenzaremos poniendo 
    - class Persona {} -
 Dentro de las llaves le meteremos su constructor. A su vez dentro de los parentesis sus argumentos, y dentro de las llaves las caracteristicas y que recibe cada una  
    - constructor(param1, param2){
        this.caracteristica1 = param1
        this.caracteristica2 = param2
    }
 */

/* ------ Construcion de una persona ---------
Más abajo crearemos una persona de la siguiente forma.  
const persona = new Persona("arg1","arg2")

Despues las podemos llamar con el console log,
console.log(persona)
O tambien solicitar una de sus caracteristicas con un punto
console.log(persona.caracteristica1)
*/

/* Construccion de una persona. De esta forma estamos instanciando un objeto basado en la clase (plantilla). En vez de persona, se puede poner: 
// persona1, persona2, raul, marta... esto daria igual 

// const persona = new Persona("Alto", "Ingeniero")

// Otra persona 
// const persona2 = new Persona("Inteligenet", "Arquitecta")

// Desde persona podemos acceder a sus caracteristicas poniendo un punto
// persona.
// Con un console log vamos a sacar

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
Persona { nombre: 'Carolina', edad: 35, profesion: 'Astronauta' }
Persona {
  nombre: 'Ricardo',
  edad: 18,
  profesion: 'Estudiante de Programación'
}
 */
// Si quisieramos por ejemplo eventualmente sacar solo el nombre seria 
// console.log(carolina.nombre)   // Consola ->   Carolina

// -------------- METODOS ----------------
// Comportamientos o Metodos: Otra funcion aparte del constructor.
// CREAMOS LA CLASE ANIMAL.