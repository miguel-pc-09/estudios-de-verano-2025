const array = ['Curso HTML', 'Curso CSS', 'Curso JS']

/*
Otra forma de escribirlo sería de la siguiente forma. Excepto que sea muy extenso no se usa.

const array = [
     'Curso HTML', 
     'Curso CSS', 
     'Curso JS'
]
También nos ayuda a no tener que estar escribiendo el código de esta forma

  const curso1 = 'Curso HTML'
  const curso2 = 'Curso CSS'
  const curso3 = 'Curso JS'
*/

// Existen varias formas de inicializarlo. La más común es:
// Entre (ponemos el número de elementos que tendrá)

const array2 = new Array(5)
// En este caso al poner 5 iniciaremos el array de 5 posiciones pero vacíos: 0, 1, 2, 3, 4

// Ahora después lo llenaremos poniendo: array[posición] = 'Curso HTML'

array2[0] = 'Curso de HTML'
array2[1] = 'Curso de CSS'
array2[2] = 'Curso de JS'

// El resto los dejaremos vacíos. Ahora con un console.log del array

console.log(array2)
// Debería mostrarnos algo como [ 'Curso de HTML', 'Curso de CSS', 'Curso de JS', <2 empty items> ] 
// Si lo hacemos en la consola de Chrome nos pondrá debajo un length: 5 

// ¿Qué pasa si traemos un console.log([4])?
//console.log(array2[4])   // UNDEFINED no está definido 

// Ahora vamos al HTML para saber cómo se vería. Y aquí pondremos lo siguiente
//document.getElementById('seleccionable').innerHTML = array2
// Se puede observar que sale el h1 y debajo en línea consecutiva Curso de HTML,Curso de CSS,Curso de JS,, 
// -> Sin espacios, las comas finales son por los dos huecos finales. Si pusiéramos 3 en vez de 5 salen sin las comas finales.
// En este caso pusimos string pero sin problemas se podrían poner number, un objeto, array de números.

// También podemos llamarlo con un .length y nos dará el largo del array en este caso de 5
//console.log(array2.length)

// Otra forma que también lo daría sería poniendo lo siguiente 
// const array = ['Curso de HTML', [1,2,3,4,5,6], {nombre: 'Pedro'}] -> en este caso marcaría solo 3

// Si queremos ordenar números por ejemplo
//const array3 = [9,5,2,7,1]
//Utilizamos el sort que ordena por número
//console.log(array3.sort()) // mostrará en consola [ 1, 2, 5, 7, 9 ] ordenado

// ¿Qué pasaría con sort en las letras?
const array4 = ['Zapato','Ricardo','Xilófono', 'Barba']
//console.log(array4.sort()) // [ 'Barba', 'Ricardo', 'Xilófono', 'Zapato' ] Efectivamente ordena

// Si quisiéramos entrar al último elemento, una forma sería 
//                    0        1         2         3
// const array4 = ['Zapato','Ricardo','Xilófono', 'Barba']
// console.log(array4[1]) sacaría en este caso Ricardo. Para entrar al último sería parecido 
// console.log(array4[array4.length-1])  // Barba

// Ahora pasarlo a HTML y con bucles
const array5 = ['Despertarse','Comer','Estudiar', 'Dormir']
let texto = ''        // Igualamos texto a vacío y en el for lo usaremos para concatenar.
// BUCLE FOR -> index es las posiciones, lo que en Java o C# = i.
for (let index = 0; index < array5.length; index++) {
    //const element = array5[index]; // -> aquí escribir para que salga en el html. Esto se borra
    texto += "<li>" + array5[index] + '</li>'
}
//document.getElementById('seleccionable2').innerHTML = texto

// Si quiero agregar un elemento más al array
const array6 = ['HTML', 'CSS', 'JS']
array6[array6.length] = 'REACT'
array6[array6.length] = 'Angular'
array6[8] = 'SQL'

console.log(array6) // Mostrará -> ['HTML', 'CSS', 'JS', 'REACT']-- [ 'HTML', 'CSS', 'JS', 'REACT', 'Angular' ]

// Manipulación de arreglos o array más utilizados
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
console.log('')
console.log('--------- FILTER ------')
const array7 = ['Manzana', 'Pera', 'Plátano', 'Naranja', 'Manzana', 'Naranja']
// console.log(array7.length) // En consola devolverá un 6  node script.js

const resultado = array7.filter(x => x == 'Manzana')    
// En filter pasamos una función que nos devolverá un callback
//  (x es cada uno de los elementos que recorre -> ¿es igual a "Manzana"?)
console.log(resultado)
// ["Manzana", "Manzana"]

// ----- Ejemplo de FILTER con OBJETOS ----- -----------------------------------------------------
console.log('')
console.log('-------- FILTER OBJETOS -------')
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

// ------------------- MAP ------------------------------------------------------------------------------
console.log('')
console.log('----- MAP -----')
const array9 = ['Manzana','Manzana', 'Manzana', 'Manzana']

const resultado3 = array9.map(x => {
  if(x == 'Manzana') return 'naranja'
 })
console.log(resultado3)
// [ 'naranja', 'naranja', 'naranja', 'naranja' ]

// ----------------- FILL ---------------------------------------------------------------------------------
console.log('')
console.log('---- FILL -----')
const array10 = ['Manzana','Manzana', 'Manzana', 'Manzana']

const resultado4 = array9.fill('Naranja',1)
console.log(resultado4)
// [ 'Manzana', 'Naranja', 'Naranja', 'Naranja' ]

// ----------------- FIND ----------------------------------------------------------------------------------
console.log('')
console.log('----- FIND -------')
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
// consola solo traerá el primero que encuentra y para 
// { nombre: 'Pedro', apellido: 'González' }

// -------------------- FINDINDEXOF ------------------------------------------------------------------------
console.log('')
console.log('------- FINDINDEXOF ------')
const array13 = ['Manzana','Manzana', 'Manzana', 'Manzana', 'Pera', 'Manzana','Pera']
//                  0         1           2          3        4        5        6
const resultado7 = array13.findIndex(x => x == 'Pera')
console.log(resultado7)
// consola -> 4 Busca el primero 

//----------------------- SOME ------------------------------------------------------------------------------
console.log('')
console.log('------ SOME -----------')
const array14 = ['Manzana','Manzana', 'Manzana', 'Manzana', 'Pera', 'Manzana','Pera']
//                  0         1           2          3        4        5        6
//const array14 = ['Manzana','Manzana', 'Manzana', 'Manzana']  -> False 
const resultado8 = array14.some(x => x == 'Pera')
console.log(resultado8)
// True

//------------------------ EVERY ------------------------------------------------------------------------------
console.log('')
console.log('------- EVERY ---------')
const array15 = ['Manzana','Manzana', 'Manzana', 'Pera']
const resultado9 = array15.every(x => x == 'Pera') // -> FALSE  ¿Son todas peras?

// const array15 = ['Manzana','Manzana', 'Manzana', 'Manzana'] ¿Son todas Manzanas?
// const resultado9 = array15.every(x => x == 'Manzana') // -> TRUE

console.log(resultado9)

// ------------------------- POP --------------------------------------------------------------------------------
console.log('')
console.log('------ POP -------')
const array16 = ['Manzana','Naranja', 'Limón', 'Pera']
const resultado10 = array16.pop()

console.log(resultado10)  // PERA  -> Nos devuelve el que quitó 
console.log(array16)      // [ 'Manzana', 'Naranja', 'Limón' ] -> Nos devuelve el array sin el último 

// -------------------------- SHIFT ------------------------------------------------------------------------------
console.log('')
console.log('------- SHIFT ---------')
const array17 = ['Manzana','Naranja', 'Limón', 'Pera']
const resultado11 = array17.shift()

console.log(resultado11)  // Corta manzana y es lo que mostrará -> Manzana 
console.log(array17)      // [ 'Naranja', 'Limón', 'Pera' ]

// ------------ PUSH ----------------------------------------------------------------------------------------------
console.log('')
console.log('------- PUSH ---------')
const array18 = ['Manzana','Naranja', 'Limón', 'Pera']
const resultado12 = array18.push('Ciruela')    // Le ponemos lo que queremos añadir

console.log(resultado12)    // 5 -> nos devuelve un length 
console.log(array18)        // [ 'Manzana', 'Naranja', 'Limón', 'Pera', 'Ciruela' ] Colocado al final -> SE SUELE UTILIZAR CON ESTE MÉTODO

// ------------- UNSHIFT --------------------------------------------------------------------------------------------
console.log('')
console.log('------- UNSHIFT ---------')
const array19 = ['Manzana','Naranja', 'Limón', 'Pera']
const resultado13 = array19.unshift('Ciruela')    

console.log(resultado13)     // 5 -> lo mismo que el caso anterior de push
console.log(array19)         // [ 'Ciruela', 'Manzana', 'Naranja', 'Limón', 'Pera' ] Lo añade al principio -> SE SUELE UTILIZAR CON ESTE MÉTODO

// --------------- SPLICE --------------------------------------------------------------------------------------------
// El splice funciona de la siguiente forma, esto es para cortar el array. En este ejemplo queremos sacar el Limón de índice 2 y poner Ciruela
console.log('')
console.log('------- SPLICE ---------')
//                  0         1          2        3
const array20 = ['Manzana','Naranja', 'Limón', 'Pera']
// Dentro del paréntesis ponemos (índice, cuántos quiero cortar, 'qué agrego')
// const resultado14 = array20.splice(2,1,'Ciruela')    // -> Cortando 1
// const resultado14 = array20.splice(2,2,'Ciruela')    // -> Cortando 2
// const resultado14 = array20.splice(2,0,'Ciruela')    // -> Cortando 0
const resultado14 = array20.splice(1,1,'Ciruela','Kiwi', 'Uva')       // -> Partiendo de 1, cortando 1 y añadiendo más de 1

// console.log(array20)  // [ 'Manzana', 'Naranja', 'Ciruela', 'Pera' ]             -> Cortando 1 
// console.log(array20)  // [ 'Manzana', 'Naranja', 'Ciruela' ]                     -> Cortando 2 , quita 2 y solo añade ciruela
// console.log(array20)  // [ 'Manzana', 'Naranja', 'Ciruela', 'Limón', 'Pera' ]    -> Cortando 0 , añade por donde el corte
console.log(array20)     // [ 'Manzana', 'Ciruela', 'Kiwi', 'Uva', 'Limón', 'Pera' ]-> añadiendo más, añade por donde dijimos que cortara

//---------------- SLICE -------------------------------------------------------------------------------------------------
// Desde dónde hasta dónde, no modifica el array a diferencia del splice que sí modifica 
console.log('')
console.log('------- SLICE ---------')
//                  0          1        2         3        4        5
const array21 = ['Manzana','Naranja', 'Limón', 'Pera', 'Ciruela', 'Kiwi']

const resultado15 = array21.slice(2,4)

console.log(resultado15) // [ 'Limón', 'Pera' ] coge posición 2 y 3, la 4 ya no la coge


// -------- Ahora con HTML para imprimir por web con string --------------------------------------------------------------------


const array22 = ['Manzana','Naranja', 'Limón', 'Pera', 'Ciruela', 'Kiwi']

//document.getElementById('seleccionable3').innerHTML = array22.join(', Fruta: ') // En web: Manzana, Fruta: Naranja, Fruta: Limón, Fruta: Pera, Fruta: Ciruela, Fruta: Kiwi
//                      Si lo pusiéramos así ('') en pantalla estaría separado por comas pero muy junto Manzana,Naranja,Limón,Pera,Ciruela,Kiwi
// El join, como en base de datos, es para juntar; otra forma de dejarlo bonito (', ') dejaría más espacio o (' - ')

// -------------- Ahora con concat -------------------------
console.log('')
console.log('----- Utilizando concat:---------')
const frutas = ['Manzana','Naranja', 'Limón', 'Pera', 'Ciruela', 'Kiwi']
const verduras = ['Lechuga ', 'Cebolla ', 'Espinaca ', 'Coliflor']
console.log(frutas.concat(verduras))
/* consola saldría algo así y en orden: primero frutas y luego verduras. Se puede cambiar el orden - verduras.concat(frutas) -
unifica los dos arrays uno después del otro 
[
  'Manzana',   'Naranja',
  'Limón',     'Pera',
  'Ciruela',   'Kiwi',
  'Lechuga ',  'Cebolla ',
  'Espinaca ', 'Coliflor'
]
*/

// --------- SORT --------------------------------------------
console.log('')
console.log('----- SORT:---------')
// Recordar, poníamos esto así 
const number = [1,2,3,4,5,1,2,3,4,5] 
// Hacíamos un console.sort y lo ordenaba. Si son palabras, perfecto, pero si son números tenemos un problema en number2
console.log(number.sort())
/*
[
  1, 1, 2, 2, 3,
  3, 4, 4, 5, 5
]*/
console.log('')
console.log('----- Lista mal ordenada ----')
const number2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// Ahora lo sacamos y aquí el problema 
console.log(number2.sort())
/* aquí el error, ordena mirando el primer dígito 
[
   1, 10, 11, 12, 13, 14,
  15,  2,  3,  4,  5,  6,
   7,  8,  9
]
 */
// Si queremos que ordene bien tenemos que pasarle una función interna ((x,y) => x-y)
console.log('')
console.log('---- Lista bien ordenada con la función -----')
const number3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(number3.sort((x,y) => x-y))
// Si quisieras hacerlo descendente cambiamos la fórmula ((x,y) => y-x)
console.log('---- Ordenada descendente ----')
console.log(number3.sort((x,y) => y-x))

// Ordenando objetos 
console.log('')
console.log('--- Lista con objetos por año ----')
const number4 = [
  {auto:'FIAT', año: 2020},
  {auto:'BMW', año: 2019},
  {auto:'RENAULT', año: 2021},
  {auto:'FORD', año: 2023},
]
// Ordenaremos por año
console.log(number4.sort((x,y) => x.año-y.año))
/*
[
  { auto: 'BMW', 'año': 2019 },
  { auto: 'FIAT', 'año': 2020 },
  { auto: 'RENAULT', 'año': 2021 },
  { auto: 'FORD', 'año': 2023 }
]
*/
