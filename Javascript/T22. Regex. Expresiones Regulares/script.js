/* 
Se suelen escribir con la barra /pattern/modificadores
En los pattern podemos poner que vamos a buscar letras o solo números 
Y en lo modificadores podemos poner que busque solamente mayusculas, que busque en todos los lados, en multilinea.
*/

let texto = ' Este curso es de Javascript y esta dado por Sergie Code 1'
let busqueda = texto.search(/Sergie/)

console.log(busqueda)   
/* 
Por consola aparece un 45. Quiere decir que en el caracter 45 aparece Sergie.
Si ponemos (/sergie/) en vez de (/Sergie/) nos sale un -1, quiere decir que no encontro 
Y si queremos omitir mayusculas y minusculas se pondria (/sergie/i)
-> i quiere decir Ignorar
*/

// ---- MODIFICADORES --------------------
/*
 i: Ignorar mayusculas y minusculas 
 g: Buscar en todo el texto pasado
 m: Busqueda multilinea, no se para en la primera linea 
 s: Permite usar . (punto), en el caso que estemos buscando algo muy especifico 
 Estos son los mas utilizados, excepto la s que ya apenas se usa o es menos usado
*/
// ----------- Tambien se puede hacer al reves ---------------- 
let pattern = /sergie/i
let resultado = pattern.test(texto)
console.log('')
console.log('----- Busqueda al reves -------')
console.log(resultado)                        // Consola True. Si quitamos la i y lo dejamos como esta saldra False porque no esta el nombre en minuscula

//---------- Utilizando EXEC -> Nos va a traer varios atributos ----------------
let pattern2 = /sergie/i
let resultado2 = pattern2.exec(texto)
console.log('')
console.log('----- Busqueda con exec -------')
console.log(resultado2)
/* CONSOLA 
[
  'Sergie',
  index: 45,
  input: ' Este curso es de Javascript y esta dado por Sergie Code ',
  groups: undefined
]
  En el caso que eliminemos la i nos mandara en este caso un null 
 */

//-------- Buscando por numero -------- 
let pattern3 = /[0-9]/                   // Para agregar un rango se ponen los corchetes. Y en el texto añadimos un 1. 
let resultado3 = pattern3.test(texto)    // exect lo cambiamos por text 
console.log('')
console.log('----- Busqueda por numero  -------')
console.log(resultado3)                  // Consola -> True. Y si borramos el 1 del texto false. 
// Tambien podemos reemplazar el [0-9] por /d que buscara un digito. 

// Patron de correos electronicos 
let pattern4 = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i 
//  primera parte hasta el @ , segunda parte hasta el "punto" y tercera parte hasta el final
console.log('')
console.log('Comprobacion de correo electronico')
console.log( pattern4.test('miguel@1.1'))
// Consola -> false porque busca que las ultimas 3 letras sea com. lo mismo si ponemos ('miguel') por ('migue@1.1')). 