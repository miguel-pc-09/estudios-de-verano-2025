// Clase: plantilla para nuestras instancias 
class Persona {
    
    // Constructor: Es un método especial que permite instanciar objetos basándose en la clase 
    // Cambiamos los argumentos 
    constructor(nombre, edad, profesion ){
    
        // Propiedades o características. This hace referencia a la PERSONA que estamos instanciando
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
   }

   // Comportamientos o Metodos: Otra funcion aparte del constructor
   
}
// De esta forma estamos instanciando un objeto basado en la clase plantilla        
// Ahora con personas con nombres y mas caracteristicas: nombre, edad y profesion y las llamamos al log 
const carolina = new Persona("Carolina", 35, "Astronauta")
const ricardo = new Persona("Ricardo", 18, "Estudiante de Programación")

    // SET: Cambiar la información
    // Si queremos modificar alguno de sus datos, en este ejemplo sus edades o profesion. Si el console lo ponemos antes del cambio pues no cambiaria 
    carolina.edad = 45
    ricardo.profesion = "Estudiante de Artes" 

// GET: obtención de datos
console.log(carolina.edad)       // La edad si cambio a 45 
console.log(ricardo.profesion)   // La profesion cambio a Estudiante de Artes 





    
    
        




 

