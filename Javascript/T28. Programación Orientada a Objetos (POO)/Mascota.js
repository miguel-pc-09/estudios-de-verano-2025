class Mascota{
    // ES2022 se agregó la posibilidad de hacer privadas las propiedades utilizando el # al comenzar el nombre 
    // ----------- ENCAPSULAMIENTO ------------------------------- 
    #nombre
    #especie
    #energia
    #hambre 

    // Energía y hambre, por ejemplo, lo dejamos para que cada uno empiece o tenga diferentes parámetros 
    constructor(nombre, especie){
        this.#nombre = nombre
        this.#especie = especie
        this.#energia = 100                
        this.#hambre = 0
    }
    // GETTER (Obtener)
    obtenerNombre(){
        return this.#nombre
    }
    // SETTER (Establecer o configurar). Y probaremos a meter una condición 
    establecerNombre(nombre){
        if(nombre.length > 1){
            this.#nombre = nombre
        }
        console.log("El nombre debe ser mayor a 1 letra ")
    }

   jugar(){
    if(this.#energia > 0){
        console.log(`${this.obtenerNombre()} está jugando y divirtiéndose`)
        this.#energia -= 20
        this.#hambre += 10
    }else{
        console.log(`${this.obtenerNombre()} está demasiado cansado para jugar`)
    }
   }

   alimentar(){
    if(this.#hambre > 0){
        console.log(`${this.obtenerNombre()} está comiendo una sabrosa comida`)
        this.#hambre -= 20
        this.#energia = 10
    }else{
        console.log(`${this.obtenerNombre} no tiene hambre`)
    }
   }

   estado(){
    console.log(`${this.obtenerNombre()} es un ${this.#especie} tiene ${this.#energia} de energía y ${this.#hambre} de hambre`)
   }

}

// Si queremos ver esta información desde afuera 
const manchita = new Mascota("Manchita", "Perro")

// console.log(manchita.especie)   // De esta manera nos sale undefined
// console.log(manchita.#especie)   // Nos dice que es un identificador privado

// Ahora con los GETTER y SETTER 
// console.log(manchita.obtenerNombre())     // Nos dirá que es Manchita como ya pusimos 
// manchita.establecerNombre("Gruñón")       // Cambiamos el nombre a Gruñón 
// manchita.establecerNombre("")       // Lo dejamos vacío para comprobar la condición dejándolo vacío -> Sale el mensaje y arriba y abajo el nombre Manchita porque no se cambió 
// console.log(manchita.obtenerNombre())     // Y al volver a llamarlo -> Gruñón

// Comprobamos estado, alimentar, jugar 
manchita.estado()       // Consola -> Manchita es un Perro tiene 100 de energía y 0 de hambre
manchita.jugar()        // Consola -> Manchita está jugando y divirtiéndose
manchita.jugar()        // Consola -> Manchita está jugando y divirtiéndose
manchita.alimentar()    // Consola -> Manchita está comiendo una sabrosa comida
manchita.jugar()        // Consola -> Manchita está jugando y divirtiéndose
manchita.jugar()        // Consola -> Manchita está demasiado cansado para jugar
manchita.estado()       // Consola -> Manchita es un Perro tiene -10 de energía y 10 de hambre
