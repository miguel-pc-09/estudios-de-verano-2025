/*
Los bucles en JavaScript son una estructura de control que nos permite ejecutar un bloque de código de forma repetida mientras se cumpla una condición
determinada. Esto nos permite repetir muchas veces un proceso, sin repetir código
*/
// ----------- FOR CLÁSICO -------------------------------------------------------------------------
//  ÍNDICES          0       1         2           3         4
// let tecnologias = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR']   // Array con 5 elementos 

// let seleccionable = document.getElementById('seleccionable')
/*
let texto = ''

// Si queremos recorrerlo utilizamos un for
for (let index = 0; index < tecnologias.length; index++) {
    texto += tecnologias[index] 
    if(index < tecnologias.length - 1){
        texto += ', '
    }
    seleccionable.textContent = texto
    
}

*/

// --------- FOR OF --------------------------------------------------------------------------------------------------------------------------
/*

for (tecnologia  of tecnologias) {     // un elemento de los elementos
    console.log(tecnologia)            
}

*/
// ------ Recorrer objetos con pares clave-valor FOR IN --------------------------------------------------------------------------------------
/*
const alumno = {
    nombre: 'Miguel',
    edad: 25,
    tecnologias: ['HTML', 'CSS']
}
for (const clave in alumno) {                 // Cambiamos la palabra key por clave y el objeto por alumno. key se puede dejar
    console.log(alumno[clave])
}
*/
/* Consola -> Miguel
              25
              [ 'HTML', 'CSS' ]

*/

// --------- FOR EACH -----------------------------------------------------------------------------------------------------------------------
/*

let numeros = [1,2,3,4,5,6,7,8,9]

numeros.forEach(numero => {
    console.log(numero)
});

*/

// -----------  WHILE -----------------------------------------------------------------------------------------------------------------------
// WHILE -> Mientras se cumpla la condición, lo hacemos y volvemos a hacerlo siempre mientras sea true. 
// ----------- while ----------------------
/*

console.log('')
console.log('-------- WHILE ------------')

let edad = 0 
while ( edad < 18 ){
    console.log(`Tienes ${edad} años y aún eres un niño.`)
    edad ++;                                                   // si no ponemos esto no sumaría antes de salir y sería cero constante
}
console.log(`Tienes ${edad} años y ya eres mayor de edad.`)

*/
// ------------- DO WHILE ---------------------------------------------------------------------------------------------------------------------
// DO WHILE -> La diferencia con while: do while hace el código antes y while es la condición que lo cierra, es decir, al revés
/*

console.log('')
console.log('-------- DO WHILE ------------')

let edad2 = 0 
do{
    {
    console.log(`Tienes ${edad2} años y aún eres un niño.`)
    edad2 ++;                                                   // si no ponemos esto no sumaría antes de salir y sería cero constante
    }
}while ( edad2 < 18 )

console.log(`Tienes ${edad2} años y ya eres mayor de edad.`)

*/
// --------- CON BREAK -------------------------------------------------------------------------------------------------------------------------

let edad = 0

while(edad < 30){
    console.log(edad)
    edad ++;
    if( edad == 25 ) break;
   
}
console.log(`Saliste del bucle porque tienes ${edad} años.`)
