// STRING 
// Se pueden usar las comillas simples (' '), dobles (" "), y backticks (` `)

let string = 'Cadena de texto'
console.log(string)
//-> let string = "Cadena de texto"

//-> let string = `Cadena de texto`

// Los backticks permiten escribir expresiones de JavaScript ( ${} )
 
// let variable = 'Pedro' o 55                      // CONSOLA
//-> let string = `Cadena de texto ${variable}`     // Pedro o 55

// Otro ejemplo si quisiéramos poner let's Do it 
// let string2 = 'Let's Do it     // Se romperá
// Cómo hacer para saltar esa comilla 
let string2 = "Let's Do it " // Con la doble comilla forma más sencilla y simple 
console.log(string2)

// Y otra sería con LA BARRA DE ESCAPE 
let string3 = 'Let\'s Do it'  // ponemos una simple \ barra invertida
console.log(string3)

// Otro ejemplo de barra invertida
let string4= 'Este símbolo con el que se escapa \ probando'
console.log(string4)
// Si queremos que salga la barra invertida solo tenemos que escribir 2
let string5= 'Este símbolo con el que se escapa \\ probando'
console.log(string5)
/*

Apretando las teclas control + ñ -> abrimos consola
Escribiendo en la consola -> node script.js (saldrán los console.log y veremos los resultados de cada uno)
      - Cadena de texto     -> string
      - Let's Do it         -> string2
      - Let`s Do it         -> string3
      - Este símbolo con el que se escapa probando  -> string4
      - Este símbolo con el que se escapa \ probando ->string5

*/

/* Puede pasar lo mismo con otros símbolos, estar trabajando o construyendo un backend, nos pueden llegar a mandar esto al frontend para que no se rompa.
por ejemplo necesito mandar algo que tiene comillas 
*/
// let string6 = 'Albert Einstein dijo que 'La imaginación es más importante que el conocimiento.'' // Si quitamos el comentario podemos ver que está roto
let string6 = 'Albert Einstein dijo que \'La imaginación es más importante que el conocimiento.\'' 
// Delante de cada ' comilla del comentario ponemos la \ barra invertida
console.log(string6)

/*
Ahora con el comando node script.js
      - Cadena de texto     -> string
      - Let's Do it         -> string2
      - Let`s Do it         -> string3
      - Este símbolo con el que se escapa probando  -> string4
      - Este símbolo con el que se escapa \ probando ->string5
      - Albert Einstein dijo que 'La imaginación es más importante que el conocimiento.' -> string6
*/

// Otro ejemplo que queramos hacer 
/*
let string7 = 'Esto está arriba     // Quitamos comentarios y sale error y por consola nos saldría "Invalid or unexpected token" 
esto está abajo'
*/
// Para solucionar esto si queremos hacer esto usaremos la barra de escape y un símbolo
let string7 = 'Esto está arriba \n esto está abajo'   // Como en Java nos genera un salto de línea
console.log(string7)
/*
 \b -> no muestra nada pero es un Backspace ** Esto está arriba \b esto está abajo -> borra un espacio 
 \t -> metería un tabulado ** Esto está arriba \testo está abajo -> Esto está arriba     esto está abajo
 \v -> es un tabulador vertical, también sirve para hacer salto de línea Esto está arriba \vesto está abajo
       Esto está arriba
         esto está abajo
*/
/*
Ahora con el comando node script.js
      - Cadena de texto     -> string
      - Let's Do it         -> string2
      - Let`s Do it         -> string3
      - Este símbolo con el que se escapa probando  -> string4
      - Este símbolo con el que se escapa \ probando ->string5
      - Albert Einstein dijo que 'La imaginación es más importante que el conocimiento.' -> string6
      - Esto está arriba
         esto está abajo   -> string7
*/

// Para saber el número de caracteres que tiene un string 

let string8 = 'Murciélago' // Tiene 10 sin contar a mano lo pondríamos de esta otra forma 
let contadorDeLetras = 'Murciélago'

console.log(string8)
console.log(contadorDeLetras.length) // Utilizamos el .length como ej Java o C# el largo de la cadena, ** CUIDADO CUENTA ESPACIOS \n TAMBIÉN LO CUENTA*. También nos puede ayudar para condicionar algo  
/*
Ahora con el comando node script.js
      - Cadena de texto     -> string
      - Let's Do it         -> string2
      - Let`s Do it         -> string3
      - Este símbolo con el que se escapa probando  -> string4
      - Este símbolo con el que se escapa \ probando ->string5
      - Albert Einstein dijo que 'La imaginación es más importante que el conocimiento.' -> string6
      - Esto está arriba
         esto está abajo   -> string7
      - Murciélago -> string8
      - 10 -> contadorDeLetras.lenght
*/

// MÉTODOS STRING 
// SLICE -> Cortar la pizza 

let texto = 'Educacion'
// cortar (comienzo, final)
// slice(start, end)
// console.log(texto.slice(4,7)) más abajo  // del carácter 4 al 7 -> a, i  ** EL 4 NO LO TOMA PERO SI EL 7
// Dentro de una variable
let resultado = texto.slice(4,7)
console.log(resultado) // Consola aci
/*
Ahora con el comando node script.js
      - Cadena de texto     -> string
      - Let's Do it         -> string2
      - Let`s Do it         -> string3
      - Este símbolo con el que se escapa probando  -> string4
      - Este símbolo con el que se escapa \ probando ->string5
      - Albert Einstein dijo que 'La imaginación es más importante que el conocimiento.' -> string6
      - Esto está arriba
         esto está abajo   -> string7
      - Murciélago -> string8
      - 10 -> contadorDeLetras.lenght
      - aci -> resultado texto con slice
*/

// Ahora con SUBSTRING
let resultado2 = texto.substring(4,7) // algunos métodos como substr están ya obsoletas no recomienda usar
console.log(resultado2) // funciona exactamente igual 
// podemos también contar hacia atrás ** let resultado = texto.slice(-5, -2) ** resultado el mismo aci

// Otro ejemplo con frase más larga
const texto2 = 'La educación es muy importante en España'
const resultado3 = texto2.replace('España', 'el mundo') // REPLACE reemplaza la primera palabra que ponemos por la segunda
console.log(resultado3) // CONSOLA - La educación es muy importante en el mundo

/*
Ahora con el comando node script.js
      - Cadena de texto     -> string
      - Let's Do it         -> string2
      - Let`s Do it         -> string3
      - Este símbolo con el que se escapa probando  -> string4
      - Este símbolo con el que se escapa \ probando ->string5
      - Albert Einstein dijo que 'La imaginación es más importante que el conocimiento.' -> string6
      - Esto está arriba
         esto está abajo   -> string7
      - Murciélago -> string8
      - 10 -> contadorDeLetras.lenght
      - aci -> resultado texto con slice
      - La educación es muy importante en el mundo -> resultado3 cambio de palabra
*/

// PASAR TODO A MAYÚSCULAS CON TOUPPERCASE toUpperCase
const texto3 = 'La educación es muy importante en el mundo'
const resultado4 = texto3.toUpperCase()
console.log(resultado4) // CONSOLA -> LA EDUCACIÓN ES MUY IMPORTANTE EN ESPAÑA

/*
Ahora con el comando node script.js
      - Cadena de texto     -> string
      - Let's Do it         -> string2
      - Let`s Do it         -> string3
      - Este símbolo con el que se escapa probando  -> string4
      - Este símbolo con el que se escapa \ probando ->string5
      - Albert Einstein dijo que 'La imaginación es más importante que el conocimiento.' -> string6
      - Esto está arriba
         esto está abajo   -> string7
      - Murciélago -> string8
      - 10 -> contadorDeLetras.lenght
      - aci -> resultado texto con slice
      - La educación es muy importante en el mundo -> resultado3 cambio de palabra
      - LA EDUCACIÓN ES MUY IMPORTANTE EN EL MUNDO-> resultado4 mayúsculas todas
*/

// Lo contrario a mayúsculas con TOLOWERCASE
const resultado5 = texto3.toLowerCase()
console.log(resultado5) // CONSOLA -> la educación es muy importante en el mundo

/*
Ahora con el comando node script.js
      - Cadena de texto     -> string
      - Let's Do it         -> string2
      - Let`s Do it         -> string3
      - Este símbolo con el que se escapa probando  -> string4
      - Este símbolo con el que se escapa \ probando ->string5
      - Albert Einstein dijo que 'La imaginación es más importante que el conocimiento.' -> string6
      - Esto está arriba
         esto está abajo   -> string7
      - Murciélago -> string8
      - 10 -> contadorDeLetras.lenght
      - aci -> resultado texto con slice
      - La educación es muy importante en el mundo -> resultado3 cambio de palabra
      - LA EDUCACIÓN ES MUY IMPORTANTE EN EL MUNDO-> resultado4 mayúsculas todas
      - la educación es muy importante en el mundo ->resultado5 minúsculas todas 
*/

// CONCATENANDO TEXTO4 CON LO SIGUIENTE
const texto4 = 'La educación es muy importante en '
const texto5 = 'España'
const texto6 = 'el mundo'

// const resultado6 = texto4 + texto5    // CONSOLA -> La educación es muy importante en España MÉTODO DEL + ENTRE LAS DOS
// CON EL .CONCAT()
const resultado6 = texto4.concat(texto5) // CONSOLA -> La educación es muy importante en España  CONCAT() lo mismo si cambiamos texto5 por texto6
console.log(resultado6) 

/*
Ahora con el comando node script.js
      - Cadena de texto     -> string
      - Let's Do it         -> string2
      - Let`s Do it         -> string3
      - Este símbolo con el que se escapa probando  -> string4
      - Este símbolo con el que se escapa \ probando ->string5
      - Albert Einstein dijo que 'La imaginación es más importante que el conocimiento.' -> string6
      - Esto está arriba
         esto está abajo   -> string7
      - Murciélago -> string8
      - 10 -> contadorDeLetras.lenght
      - aci -> resultado texto con slice
      - La educación es muy importante en el mundo -> resultado3 cambio de palabra
      - LA EDUCACIÓN ES MUY IMPORTANTE EN EL MUNDO-> resultado4 mayúsculas todas
      - la educación es muy importante en el mundo ->resultado5 minúsculas todas 
      - La educación es muy importante en España -> resultado6 con CONCAT igual con el + 
*/

// IMAGINAR QUE VIENE CON MUCHOS ESPACIOS nos puede servir también para los espacios en las contraseñas 
const texto7 = '             La educación es muy importante en    '
const texto8 = ' España'
const texto9 = ' el mundo'
// usaremos el .TRIM -> Nos saca el espacio de adelante y de atrás. TAMBIÉN LE PODEMOS CONCATENAR MÁS COSAS 
// const resultado7 = texto7.trim()
const resultado7 = texto7.trim().concat(texto8) // CONSOLA -> La educación es muy importante en España
/*
En el caso que solo fallase la parte de adelante usaríamos TRIMSTART *** IGUAL CON LA PARTE DE ATRÁS CON TRIMEND BORRARÍA LA PARTE FINAL DE ESPACIOS 
const texto7 = '             La educación es muy importante en' -> ELIMINAMOS EL ESPACIO DESPUÉS DEL "EN" DEL FINAL
const texto8 = ' España'
const texto9 = ' el mundo'
*/
console.log(resultado7) // CONSOLA -> La educación es muy importante en España

/*
Ahora con el comando node script.js
      - Cadena de texto     -> string
      - Let's Do it         -> string2
      - Let`s Do it         -> string3
      - Este símbolo con el que se escapa probando  -> string4
      - Este símbolo con el que se escapa \ probando ->string5
      - Albert Einstein dijo que 'La imaginación es más importante que el conocimiento.' -> string6
      - Esto está arriba
         esto está abajo   -> string7
      - Murciélago -> string8
      - 10 -> contadorDeLetras.lenght
      - aci -> resultado texto con slice
      - La educación es muy importante en el mundo -> resultado3 cambio de palabra
      - LA EDUCACIÓN ES MUY IMPORTANTE EN EL MUNDO-> resultado4 mayúsculas todas
      - la educación es muy importante en el mundo ->resultado5 minúsculas todas 
      - La educación es muy importante en España -> resultado6 con CONCAT igual con el + 
      - La educación es muy importante en España -> resultado7 con TRIM
*/

// Como preguntar la letra de una posición 
const texto10 = 'La educación es muy importante en'
const resultado8 = texto10.charAt(5) // -> 0-L , 1-a, 2-esp. , 3-e, 4-d, 5-"u" mostrará por consola la u 
// OTRA FORMA DE PONERLO 
// const resultado8 = texto10[5] con array para seleccionar el elemento de la 5 posición
console.log(resultado8)

/*
Ahora con el comando node script.js
      - Cadena de texto     -> string
      - Let's Do it         -> string2
      - Let`s Do it         -> string3
      - Este símbolo con el que se escapa probando  -> string4
      - Este símbolo con el que se escapa \ probando ->string5
      - Albert Einstein dijo que 'La imaginación es más importante que el conocimiento.' -> string6
      - Esto está arriba
         esto está abajo   -> string7
      - Murciélago -> string8
      - 10 -> contadorDeLetras.lenght
      - aci -> resultado texto con slice
      - La educación es muy importante en el mundo -> resultado3 cambio de palabra
      - LA EDUCACIÓN ES MUY IMPORTANTE EN EL MUNDO-> resultado4 mayúsculas todas
      - la educación es muy importante en el mundo ->resultado5 minúsculas todas 
      - La educación es muy importante en España -> resultado6 con CONCAT igual con el + 
      - La educación es muy importante en España -> resultado7 con TRIM
      - u -> resultado8 al usar CHARAT(NÚMERO)
*/

/* MÉTODO MUY MUY IMPORTANTE split . Por ejemplo si el backend nos va a mandar un texto muy largo y va a tener varias cosas que vamos a necesitar por separado. 
Por ejemplo, "te mando un texto largo y tú búscate la vida, pero pedimos una pista, cada vez que tiene un punto termina la oración y tenéis que separar por ese punto"
*/
const texto11 = 'Este texto te lo manda el backend. Este texto es importante. Dividir el texto'
// Utilizamos el método SPLIT siempre con comillas simples lo que pondremos dentro ('')
const resultado9 = texto11.split('. ') // Si después del punto existe un espacio ponemos un espacio después del punto
console.log(resultado9) // Lo devolverá en modo array y se verá verde 
   /*
      [
         'Este texto te lo manda el backend',
         'Este texto es importante',
         'Dividir el texto'
      ]  
   */
// También lo podemos usar para que separe los elementos de una palabra
const texto12 = 'Separarme'
const resultado10 = texto12.split('') // no ponemos nada 
console.log(resultado10)
/*CONSOLA
[
  'S', 'e', 'p',
  'a', 'r', 'a',
  'r', 'm', 'e'
]
*/
// FINAL COMO QUEDARÍA LA CONSOLA CON TODO 
/*
Ahora con el comando node script.js
      - Cadena de texto     -> string
      - Let's Do it         -> string2
      - Let`s Do it         -> string3
      - Este símbolo con el que se escapa probando  -> string4
      - Este símbolo con el que se escapa \ probando ->string5
      - Albert Einstein dijo que 'La imaginación es más importante que el conocimiento.' -> string6
      - Esto está arriba
         esto está abajo   -> string7
      - Murciélago -> string8
      - 10 -> contadorDeLetras.lenght
      - aci -> resultado texto con slice
      - La educación es muy importante en el mundo -> resultado3 cambio de palabra
      - LA EDUCACIÓN ES MUY IMPORTANTE EN EL MUNDO-> resultado4 mayúsculas todas
      - la educación es muy importante en el mundo ->resultado5 minúsculas todas 
      - La educación es muy importante en España -> resultado6 con CONCAT igual con el + 
      - La educación es muy importante en España -> resultado7 con TRIM
      - u -> resultado8 al usar CHARAT(NÚMERO)
      [
         'Este texto te lo manda el backend',
         'Este texto es importante',            -> resultado9 separación de frases por punto
         'Dividir el texto'
      ] 
      [
        'S', 'e', 'p',
        'a', 'r', 'a',        -> resultado10 separación de la palabra
        'r', 'm', 'e'
      ]
*/
