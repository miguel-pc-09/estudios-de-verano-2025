const array = ['Curso HTML', 'Curso CSS', 'Curso JS']

/*
Otra forma de escribirlo  seria de la siguiente forma. Execto que sea muy extenso no se usa.

const array = [
     'Curso HTML', 
     'Curso CSS', 
     'Curso JS'
]
Tambien nos ayuda a no tener que estar escribiendo el codigo de esta forma

  const curso1 = 'Curso HTML'
  const curso2 = 'Curso CSS'
  const curso3 = 'Curso JS'
*/

// Existen varias formas de inicializarlo. La mas comun es:
// Entre (ponemos el numero de elementos que tendra)

const array2 = new Array(5)
// En este caso al poner 5 iniciaremos el array de 5 posiciones pero vacios: 0, 1, 2, 3, 4

// Ahora despues lo llenaremos poniendo: array[posicion] = 'Curso HTML'


array2[0] = 'Curso de HTML'
array2[1] = 'Curso de CSS'
array2[2] = 'Curso de JS'


// EL resto los dejaremos vacios. Ahora con un consol.log del array

console.log(array2)
// Deberia mostrarnos algo como [ 'Curso de HTML', 'Curso de CSS', 'Curso de JS', <2 empty items> ] 
// Si lo hacemos en la consola de chrome nos pondra debejo un length: 5 

// ¿Que pasa si traemos un console.log([4])?
//console.log(array2[4])   // UNDEFINED no esta definido 

// Ahora vamos al html para saber como se vería. Y aqui pondremos lo siguiente
//document.getElementById('seleccionable').innerHTML = array2
// se puede observar que sale el h1 y debajo en linea consecutiva Curso de HTML,Curso de CSS,Curso de JS,, 
// -> Sin espacios, las comas finales es por los dos huecos finales. Si pusieramos 3 en vez de 5 salen sin las comas finales.
// En este caso pusimos string pero sin problemas se podrian poner number, un objeto, array de numeros.

// Tambien podemos llamarlo con un .lenght y nos dara el largo del array en este caso de 5
//console.log(array2.length)

// OTra forma que tambien lo daria seria poniendo lo siguiente 
// const array = ['Curso de HTML', [1,2,3,4,5,6], {nombre: 'Pedro'}] -> en este caso marcaria solo 3

// Si queremos ordenar numeros por ejemplo
//const array3 = [9,5,2,7,1]
//Utilizamos el sort que ordena por numero
//console.log(array3.sort()) // mostrara en consola [ 1, 2, 5, 7, 9 ] ordenado

//¿Que pasaria sort con las letras?
const array4 = ['Zapato','Ricardo','Xilofon', 'Barba']
//console.log(array4.sort()) // [ 'Barba', 'Ricardo', 'Xilofon', 'Zapato' ] Efectivamente ordena

// Si quisieramos entrar al ultimo elemento, una forma seria 
//                    0        1         2         3
// const array4 = ['Zapato','Ricardo','Xilofon', 'Barba']
// console.log(array4[1]) sacaria en este caso Ricardo. Para entrar al ultimo seria parecido 
// console.log(array4[array4.length-1])  // Barba


// Ahora pasarlo a html y con bucles
const array5 = ['Despertarse','Comer','Estudiar', 'Dormir']
let texto = ''        // igualamos texto a vacio y en el for lo uasremos para concatenar.
// BUCLE FOR -> index es las posiciones, lo que en java o C# = i.
for (let index = 0; index < array5.length; index++) {
    //const element = array5[index]; // -> aqui escribir para que salga en el html. Esto se borra
    texto += "<li>" + array5[index] + '</li>'
}
//document.getElementById('seleccionable2').innerHTML = texto


// Si quiero agregar un elemento mas al array
const array6 = ['HTML', 'CSS', 'JS']
array6[array6.length] = 'REACT'
array6[array6.length] = 'Angular'
array6[8] = 'SQL'

console.log(array6) // Mostrara -> ['HTML', 'CSS', 'JS', 'REACT']-- [ 'HTML', 'CSS', 'JS', 'REACT', 'Angular' ]

// Manipulacion de arreglos o array mas utilizados
/*
🍎 🍊 🍎 🍎   .filter(🍎)           -> 🍎🍎🍎      > (Solo dejará las manzanas)
🍎 🍎 🍎 🍎   .map(🍎 -> 🍊)       -> 🍊🍊🍊🍊    > (Coge las 4 manzanas y devuelve naranjas)
🍎 🍎 🍎 🍎   .fill(1, 🍊)          -> 🍎🍊🍊🍊    > (Desde la posición 1 rellena el array con naranjas)
🍎 🍊 🍊 🍎   .find(🍎)             ->    🍎        > (Busca el primero que coincida con manzana)
🍎 🍊 🍎 🍎   .findIndexOf(🍊)      ->     1         > (Empieza a contar 0,1,2,3 y devuelve 1 donde está la naranja)
🍎 🍎 🍊 🍊   .some(🍊)             ->   True        > (Si hay un elemento que coincida con lo que le paso)
🍊 🍎 🍎 🍎   .every(🍊)            ->   False       > (Si todos son naranjas)
🍎 🍊 🍋 🍐   .pop()                ->  🍎🍊🍋      > (Elimina el último)
🍎 🍊 🍋 🍐   .shift()              ->  🍊🍋🍐      > (Elimina el primero)
🍎 🍊 🍎 🍎   .push(🍎)             -> 🍎🍊🍎🍎🍎 > (Agrega una manzana al final)
🍎 🍊 🍎 🍎   .unshift(🍐)          -> 🍐🍎🍊🍎🍎 > (Agrega una pera al inicio)
*/

//---------------FILTER----------------------------------------------------------------------

const array7 = ['Manzana', 'Pera', 'Plátano', 'Naranja', 'Manzana', 'Naranja']
// console.log(array7.length) // En consola devolverá un 6  node script.js

const resultado = array7.filter(x => x == 'Manzana')    
// En filter pasamos una función que nos devolverá un callback
//  (x es cada uno de los elementos que recorre -> ¿es igual a "Manzana"?)
console.log(resultado)
// ["Manzana", "Manzana"]

// Ejemplo de filter con objetos
const array8 = [
  {nombre: 'Pedro',   apellido: 'González'}, // 0
  {nombre: 'María',   apellido: 'González'}, // 1
  {nombre: 'Lucía',   apellido: 'González'}, // 2
  {nombre: 'Ricardo', apellido: 'Pérez'},    // 3
  {nombre: 'Juan',    apellido: 'Llorente'}, // 4
  {nombre: 'Raquel',  apellido: 'García'},   // 5
]

const resultado2 = array8.filter(x => x.apellido === 'González')
// Recorre el array y devuelve los objetos cuyo apellido sea "González"

// console.log(resultado2)
//  {nombre: 'Pedro',   apellido: 'González'}, 
//  {nombre: 'María',   apellido: 'González'},
//  {nombre: 'Lucía',   apellido: 'González'},

// Y si solo queremos mostrar los nombres hacemos un bucle con for
for (let index = 0; index < resultado2.length; index++) {
  const element = resultado2[index];
  console.log(element.nombre)
}
/*Consola
Pedro
María
Lucía
*/

// ------------------- MAP -------------------------------------------
const array9 = ['Manzana','Manzana', 'Manzana', 'Manzana']

const resultado3 = array9.map(x => {
  if(x == 'Manzana') return 'naranja'
 })
console.log(resultado3)
// [ 'naranja', 'naranja', 'naranja', 'naranja' ]

// ----------------- FILL ----------------------------------------------

const array10 = ['Manzana','Manzana', 'Manzana', 'Manzana']

const resultado4 = array9.fill('Naranja',1)
console.log(resultado4)
// [ 'Manzana', 'Naranja', 'Naranja', 'Naranja' ]

// ----------------- FIND ----------------------------------------------
const array11 = ['Manzana','Manzana', 'Manzana', 'Manzana', 'Pera', 'Manzana']

const resultado5 = array11.find(x => x == 'Pera')
console.log(resultado5)
// Pera
// Con objetos 
const array12 = [
  {nombre: 'Pedro',   apellido: 'González'}, // 0
  {nombre: 'María',   apellido: 'González'}, // 1
  {nombre: 'Lucía',   apellido: 'González'}, // 2
  {nombre: 'Ricardo', apellido: 'Pérez'},    // 3
  {nombre: 'Juan',    apellido: 'Llorente'}, // 4
  {nombre: 'Raquel',  apellido: 'García'},   // 5
]

const resultado6 = array12.find(x => x.apellido == 'González')
console.log(resultado6)
// consola solo traera el primero que encuentra y para 
// { nombre: 'Pedro', apellido: 'González' }

// -------------------- FINDINDEXOF ------------------------------------

const array13 = ['Manzana','Manzana', 'Manzana', 'Manzana', 'Pera', 'Manzana','Pera']
//                  0         1           2          3        4        5        6
const resultado7 = array13.findIndex(x => x == 'Pera')
console.log(resultado7)
// consolsa -> 4 Busca el primero 

//----------------------- SOME ---------------------------------------------

const array14 = ['Manzana','Manzana', 'Manzana', 'Manzana', 'Pera', 'Manzana','Pera']
//                  0         1           2          3        4        5        6
//const array14 = ['Manzana','Manzana', 'Manzana', 'Manzana']  -> False 
const resultado8 = array14.some(x => x == 'Pera')
console.log(resultado8)
// True

//------------------------ EVERY ----------------------------------------
const array15 = ['Manzana','Manzana', 'Manzana', 'Pera']
const resultado9 = array15.every(x => x == 'Pera') // -> FALSE  ¿Son todas peras?

// const array15 = ['Manzana','Manzana', 'Manzana', 'Manzana'] ¿Son todas Manzanas?
// const resultado9 = array15.every(x => x == 'Manzana') // -> TRUE

console.log(resultado9)

// ------------------------- POP ----------------------------------------

const array16 = ['Manzana','Naranja', 'Limón', 'Pera']
const resultado10 = array16.pop()

console.log(resultado10)  // PERA  -> Nos devuelve el que quito 
console.log(array16)      // [ 'Manzana', 'Manzana', 'Manzana' ] -> Nos devuelve el array sin el ultimo 