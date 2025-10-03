// STRING A NUMBER
let a = Number('3.14')
console.log('---- STRING A NUMBER --------')
console.log(a)          // Al poner let a = Number('3.14') por consola nos sale 3.14
console.log(typeof a)   // Y con el typeof nos sale -> number 
console.log('')

// Ahora otro ejemplo con parseInt
let b = parseInt('3.14')
console.log('----- STRING A NUMBER con parseInt -------')
console.log(b)          // Al poner let b = parseInt('3.14') por consola nos sale 3
console.log(typeof b)   // Y con el typeof nos sale -> number
console.log('')

// Ahora otro ejemplo con parseFloat
let c = parseFloat('3.14')
console.log('----- STRING A NUMBER con parseFloat ------ ')
console.log(c)          // Al poner let c = parseFloat('3.14') por consola nos sale 3.14
console.log(typeof c)   // Y con el typeof nos sale -> number
console.log('')

// Ahora otro ejemplo con un string 
let d = parseFloat('Pedro')
console.log('------ STRING A NUMBER con parseFloat y en vez de 3.14 con Pedro -----')
console.log(d)          // Al poner let d = Number('Pedro') por consola nos sale NaN
console.log(typeof d)   // Y con el typeof nos sale -> number
// -> Ya sea que pongamos parseInt o Number nos seguirá dando NaN y, si no ponemos nada, nos sacará 0 y number. Incluso si ponemos let a = + '1' también lo convierte a number y sacaría 1 y number 
console.log('')

// NUMBER A STRING 
let e = String(1)
console.log('---- NUMBER A STRING -------')
console.log(e)          // Al poner let e = String(1) por consola nos sale 1
console.log(typeof e)   // Y con el typeof nos sale -> string; lo mismo con toString 
console.log('')

// DATE A NUMBER 
let f = new Date()
let g = Number(f)
console.log('---- DATE A NUMBER  -------')
console.log(g)          // Al poner let f = new Date() por consola nos sale 1757792650083 milisegundos de la fecha 
console.log(typeof g)   // Y con el typeof nos sale -> number  
console.log('')

// DATE A STRING
let h = new Date()      // Aquí sí podríamos utilizar el toString() -> let h = new Date().toString()
let i = Number(h)
let j = String(h)
console.log('---- DATE A STRING  -------')
console.log(h)          // Al poner let h = new Date() por consola nos sale 2025-09-13T19:45:54.990Z 
console.log(typeof i)   // Y con el typeof nos sale -> number
console.log(j)          // Sat Sep 13 2025 21:48:47 GMT+0200 (hora de verano de Europa central)
console.log('')

// NUMBER A BOOLEAN
console.log('----- NUMBER A BOOLEAN ------- ')
let k = Boolean(0)
let l = Boolean(1)
console.log('-- Boolean del 0 --')
console.log(k)                           // Consola -> false
console.log(typeof k)                    // Consola -> boolean
console.log('-- Boolean del 1 --')
console.log(l)                           // Consola -> true. A partir del 1 en adelante siempre será true 
console.log(typeof l)                    // Consola -> boolean 
console.log('')

// Otro ejemplo  > 
let ricardo = 0                        // Con cero siempre pasará al else, pero con cualquier otro número del 1 en adelante pasará al "Vino un dato", incluso si ponemos 'Pablo'
if(ricardo && ricardo == 0){           // Entonces, para que no pase esto, usamos && y así el cero, si necesitamos que sí sea un dato, pasará por el if y no el else 
    console.log('Vino un dato')
}else{
    console.log('Es null o undefined')
}
console.log('')

// Lo mismo de boolean a string 
console.log('----- Boolean a string ------ ')
let m = String(true)               // También se podría poner con toString() como en otro caso anterior
console.log(m, typeof m)           // Consola -> true string
