// -------------- MÉTODOS ----------------
// Clase: plantilla para nuestras instancias 
class Animal {
    
    // Constructor: Es un método especial que permite instanciar objetos basándose en la clase 
    // Cambiamos los argumentos 
    constructor(nombre, edad, especie,sonido){
    
        // Propiedades o características. This hace referencia a la PERSONA que estamos instanciando
        this.nombre = nombre
        this.edad = edad
        this.especie = especie
        this.sonido = sonido
   }

   // Método: es una función que representa un comportamiento propio de esta clase. Lo hacemos con sonido

   hacerSonido(){
    console.log(this.sonido)
   }
   decirNombre(){
    console.log(`Hola, mi nombre es: ${this.nombre}`)
   }
   
}

const manchita = new Animal("Manchita", 1, "Perro","Guau")
const pelusa = new Animal("Pelusa", 1, "Gato","Miau")

// manchita.hacerSonido()
// pelusa.hacerSonido()
manchita.decirNombre()
pelusa.decirNombre()

