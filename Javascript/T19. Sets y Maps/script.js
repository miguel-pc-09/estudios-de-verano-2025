// SETs -> Es un conjunto único de elementos; eso, que sea único y no sea repetible, nos puede ayudar en muchas ocasiones, ya que en algunas ocasiones necesitamos eliminar los elementos duplicados. 

let conjunto = new Set(['Pedro','Ricardo','María','Pedro','Ricardo','Ricardo'])  

// ----- Para agregar ----------------
conjunto.add('Lucía')

// ----- Para borrar ----------------
conjunto.delete('Pedro')

// ------ Pregunta si tiene el elemento ------- 
let pregunta = conjunto.has('Ricardo')

// ----- Pregunta cuántos elementos SIZE ------ 
let pregunta2 = conjunto.size

console.log(conjunto)  
console.log('')           
console.log('---- Pregunta HAS -----')        
console.log(pregunta)  
console.log('')           
console.log('---- Pregunta SIZE -----')  
console.log(pregunta2) 


// Por consola con new Set(['Pedro','Ricardo','María'])       -> Set(3) { 'Pedro', 'Ricardo', 'María' }

// Añadimos otro Pedro a new Set(['Pedro','Ricardo','María']) -> Set(3) { 'Pedro', 'Ricardo', 'María' }

// Añadimos 2 Ricardos más                                    -> Set(3) { 'Pedro', 'Ricardo', 'María' } 

// Agregando con conjunto.add('Lucía')                        -> Set(4) { 'Pedro', 'Ricardo', 'María', 'Lucía' }

// Utilizando el delete de Pedro                              -> Set(3) { 'Ricardo', 'María', 'Lucía' }

// Pregunta con HAS si está Ricardo                           -> true

// Pregunta con SIZE                                          -> 3



// Uno de los motivos por los que se usa, imaginemos que tenemos un array...
console.log('')

let array = ['Cama', 'Armario', 'Escritorio', 'Cama', 'Estante', 'Mesa de noche']            // Sin querer, a la hora de comprar, pusimos dos camas cuando solo queremos una 

function comprar(muebles){
    console.log(muebles)
}

function comprarSoloUnaUnidad(muebles){
    let unicaUnidad = new Set(muebles)
    console.log(unicaUnidad)
}

console.log('comprar con función normal sin Set')
comprar(array)                                      // Por consola podemos ver que salió cama repetida -> [ 'Cama', 'Armario', 'Escritorio', 'Cama', 'Estante', 'Mesa de noche' ]

console.log('')
console.log('----- Función con SET -----------')
comprarSoloUnaUnidad(array)                         // Por consola podemos ver que esta vez sale         -> Set(5) { 'Cama', 'Armario', 'Escritorio', 'Estante', 'Mesa de noche' }

// --------- MAPS ----------------------------------------------------------------------------------------------------------------------------
// Maps -> Son un conjunto de pares clave-valor, pero no son exactamente iguales que un objeto. Se distribuye distinto a un objeto
// Imaginemos que es una empresa de tecnología y esta es la estructura de un Map ([[por cada objeto]])
console.log('')
console.log('--------- MAPS ------------ ')
let mapa = new Map([
    ['Computadoras', 10],
    ['Tablets', 5],
    ['Celulares', 15]
])
// Método SET ** Para set sí tenemos que añadir la clave ya que estamos agregando; para delete, has o size no se necesita
mapa.set('Teclados', 20)
console.log(mapa)

// Borrar 
console.log('Borrando computadoras ')
mapa.delete('Computadoras')              // Consola -> 3 y con el mapa diría -> Map(3) { 'Tablets' => 5, 'Celulares' => 15, 'Teclados' => 20 }

// HAS 
let pregunta4 = mapa.has('Tablets')      // Consola -> true

// pregunta 
console.log('----- Pregunta SIZE en MAPS ------')
let pregunta3 = mapa.size
console.log(pregunta3)
console.log(mapa)
console.log(pregunta4)

                                            // Consola -> Map(3) { 'Computadoras' => 10, 'Tablets' => 5, 'Celulares' => 15 }
                                            /*Consola con set -> Map(4) {
                                                                   'Computadoras' => 10,
                                                                   'Tablets' => 5,
                                                                   'Celulares' => 15,
                                                                   'Teclados' => 20
                                                                 }
                                            
                                            */

console.log('')
console.log('Cómo pasar de set quitando duplicados a volver a ver el array')
// Para volver del Set a Array sería así

// tenemos este array donde están duplicados 
let array2 = [1,1,2,2,3,3,4,4]

// miramos Set para eliminar duplicados 
let unico = new Set(array2)

// Deberemos añadir lo siguiente para poder volver a verlo 
let nuevoArray = [...unico]


// vemos en consola
console.log('Lo que nos da el set')
console.log(unico)         // Consola con el set -> Set(4) { 1, 2, 3, 4 }
console.log('')
console.log('Cuando volvemos a ver el array sin duplicados')
console.log(nuevoArray)
