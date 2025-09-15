/* 
Se suelen escribir con la barra /pattern/modificadores.
En los patrones podemos poner que vamos a buscar letras o solo números, 
y en los modificadores podemos poner que busque solamente mayúsculas, que busque en todos los lados, en multilínea.
*/

let texto = ' Este curso es de JavaScript y está dado por Sergie Code 1'
let busqueda = texto.search(/Sergie/)

console.log(busqueda)   
/* 
Por consola aparece un 45. Quiere decir que en el carácter 45 aparece Sergie.
Si ponemos (/sergie/) en vez de (/Sergie/) nos sale un -1; quiere decir que no encontró. 
Y si queremos omitir mayúsculas y minúsculas se pondría (/sergie/i).
-> i quiere decir ignorar.
*/

// ---- MODIFICADORES --------------------
/*
 i: Ignorar mayúsculas y minúsculas. 
 g: Buscar en todo el texto pasado.
 m: Búsqueda multilínea; no se para en la primera línea. 
 s: Permite usar . (punto), en el caso de que estemos buscando algo muy específico. 
 Estos son los más utilizados, excepto la s, que ya apenas se usa o es menos usada.
*/
// ----------- También se puede hacer al revés ---------------- 
let pattern = /sergie/i
let resultado = pattern.test(texto)
console.log('')
console.log('----- Búsqueda al revés -------')
console.log(resultado)                        // Consola true. Si quitamos la i y lo dejamos como está, saldrá false porque no está el nombre en minúscula.

//---------- Utilizando EXEC -> Nos va a traer varios atributos ----------------
let pattern2 = /sergie/i
let resultado2 = pattern2.exec(texto)
console.log('')
console.log('----- Búsqueda con exec -------')
console.log(resultado2)
/* CONSOLA 
[
  'Sergie',
  index: 45,
  input: ' Este curso es de JavaScript y está dado por Sergie Code ',
  groups: undefined
]
  En el caso de que eliminemos la i nos mandará, en este caso, un null. 
 */

//-------- Buscando por número -------- 
let pattern3 = /[0-9]/                   // Para agregar un rango se ponen los corchetes. Y en el texto añadimos un 1. 
let resultado3 = pattern3.test(texto)    // exec lo cambiamos por test 
console.log('')
console.log('----- Búsqueda por número -------')
console.log(resultado3)                  // Consola -> true. Y si borramos el 1 del texto, false. 
// También podemos reemplazar el [0-9] por /d, que buscará un dígito. 

// Patrón de correos electrónicos 
let pattern4 = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i 
// Primera parte hasta el @, segunda parte hasta el "punto" y tercera parte hasta el final.
console.log('')
console.log('Comprobación de correo electrónico')
console.log( pattern4.test('miguel@1.1'))
// Consola -> false porque busca que las últimas 3 letras sean com. Lo mismo si ponemos ('miguel') por ('migue@1.1')), igual que si ponemos (miguel@gmail),
// porque falta el .com. (miguel@gmail.com); y si ponemos esto ya nos sale TRUE. 
