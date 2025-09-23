// -------- HERENCIA --------------------------
class Animal{
    constructor(nombre, sonido){
        this.nombre = nombre
        this.sonido = sonido
    }
    hacerSonido(){
        console.log(`${this.nombre} hace: ${this.sonido}`)
    }
}
// Ahora lo que vamos a hacer es tomar la clase y utilizarla para heredar las dos clases nuevas, la clase perro y la clase gato

class Perro extends Animal{     // extends porque extiende de animal, que es la clase padre
    constructor(nombre){
        // La palabra reservada super hace referencia al llamado del constructor del padre del que hereda
        super(nombre, "Guau")               
    }
    // Ahora el perro tendrá algo que no tienen otros animales 
    moverCola(){
        console.log(`${this.nombre} está moviendo la cola felizmente`)
    }
}

class Gato extends Animal{
    constructor(nombre){
        super(nombre,"Miau")
    }

    ronronear(){
        console.log(`${this.nombre} está ronroneando contento`)
    }
}

const perrito = new Perro("Manchita")
const gatito = new Gato("Pelusa")

 // Sonido pueden hacerlo porque heredan de animal.
perrito.hacerSonido()               // Consola -> Manchita hace: Guau
perrito.moverCola()                 // Consola -> Manchita está moviendo la cola felizmente
                            
gatito.hacerSonido()                // Consola -> Pelusa hace: Miau
gatito.ronronear()                  // Consola -> Pelusa está ronroneando contento
// En cambio, si al gatito le intento que mueva la cola, no
// gatito.moverCola()                // Consola ->  gatito.moverCola is not a function at Object.<anonymous> (C:\Users\migue\Documents\GitHub\miguel-pc-09\Javascript\T29. POO_HERENCIA\herencia.js:44:8)
