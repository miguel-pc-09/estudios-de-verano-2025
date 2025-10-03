// Se tienen 3 formas de declarar una variable en JavaScript 

/*                         VAR      LET     CONST

Declaración sin valor ->   SÍ       SÍ       NO

Scope ->                 Función    Bloque   Bloque

Reasignación ->            SÍ       SÍ       NO

Redeclaración ->           SÍ       NO       NO


SCOPE -> Es un ámbito: en qué ambiente va a estar disponible.
- Dentro de una función
- Dentro de un bloque de código -> solo disponible ahí  

** El signo " = " es el operador de asignación   
*/

// 1ª forma: VAR es demasiado reasignable 

var nombreDeLaVariable = 'Pedro' 
    // Se puede dejar sin valor: 
    // var nombreDeLaVariable

    // Reasignaciones: recordar que el último será el disponible 

    nombreDeLaVariable = 'Juan'
    nombreDeLaVariable = 'Lucía'
    nombreDeLaVariable = 'Manolo'
    nombreDeLaVariable = 'María'

    var nombreDeLaVariable = 'Luna' // -> También se podría así
    
// 2ª forma

let nombreDeVariable = 'Miguel'
    // Igual que con VAR, se puede dejar sin valor
    // let nombreDeVariable

    // Al igual que con VAR, a LET también se le puede reasignar

    nombreDeVariable = 'Juan'
    nombreDeVariable = 'Lucía'
    nombreDeVariable = 'Manolo'
    nombreDeVariable = 'María'

    // Aquí no se podría volver a poner "let nombreDeVariable", 
    // como en VAR que sí se puede 

    // Con LET podemos declarar varias variables al mismo tiempo. 
    // Al igual que en Java y muchos otros lenguajes tipados, 
    // podemos usar el ; para cerrar. 
    // No es obligatorio, pero sí recomendable.

    let x, y, z; 
    x = 2;
    y = 7;
    // z = 0;
    z = x + y;
    // Otra forma que se podría poner: 
    // x = 5; y = 7; z = x + y;

    /* Mucho cuidado con poner:
       let x = 5;
       let y = x; // Apuntará al mismo lugar de memoria 
    */

// 3ª forma: CONST obliga a declarar un valor y es el más recomendable.
// En alguna ocasión usaremos LET (para reasignar) y nunca VAR.

const nombreVariable = 'Pepe'

  // CONST, al contrario, si quieres hacer lo mismo que con VAR o LET, 
  // modificar la variable, no lo permite y daría error. 
  // Incluso si quisiéramos modificar algún VAR o LET, dependerá de su alcance.
  

// Función de las llaves: son el scope de la variable

function nombreDeFuncion(){
    const nombreVariable = 'Variable dentro de función'
}
