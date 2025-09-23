// ------- POLIMORFISMO ---------------
class Instrumento{
    constructor(nombre){
        // Propiedad o Característica 
        this.nombre = nombre 
    }

    // Método
    tocar(){
        console.log(`${this.nombre} está produciendo un sonido`)
    }
}

class Guitarra extends Instrumento{
    constructor(){
        super('Guitarra')
    }

    // POLIMORFISMO: es la capacidad de múltiples clases de responder de manera distinta a una misma función o método

    // Sobrescribir o pisar [OVERRIDE] el método heredado
    tocar(){
        console.log("\x1b[31m%s\x1b[0m", `¡La ${this.nombre} está haciendo un solo impresionante!`)
    }

    
}

class Bateria extends Instrumento{
    constructor(){
        super('Batería')
    }

    
    tocar(){
        console.log("\x1b[32m%s\x1b[0m", `¡La ${this.nombre} está tocando los tambores a un gran ritmo!`)
    }
}

class Piano extends Instrumento{
    constructor(){
        super('Piano')
    }

    
    tocar(){
        console.log("\x1b[34m%s\x1b[0m", `¡El ${this.nombre} está haciendo unas hermosas notas pentatónicas de blues!`)
    }
}

function showBanda(instrumento){
    instrumento.tocar()
}

const guitarra = new Guitarra()    // Ninguno necesita argumento porque reciben de padre el nombre
const bateria = new Bateria()
const piano = new Piano()


/* 
Esto siguiente se podría hacer también 

guitarra.tocar()
bateria.tocar()
piano.tocar()
 */
showBanda(guitarra)
showBanda(bateria)
showBanda(piano)
/*
¡La Guitarra está haciendo un solo impresionante!                        -> Con color rojo todo
¡La Batería está tocando los tambores a un gran ritmo!                   -> Con color verde todo
¡El Piano está haciendo unas hermosas notas pentatónicas de blues!       -> Con color azul todo
*/



 