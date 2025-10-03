// STRING
 let a = typeof 'Miguel'

 // Number 
 let b = typeof 3.14

 // Number (caso especial)
 let c = typeof NaN     

 // BOOLEAN 
 let d = typeof true     // Podemos poner false 

 // ARRAY
 let e = typeof ['Ricardo','Pedro','María']

 // OBJETO
 let f = typeof {curso: 'JAVASCRIPT'}

 // Todos los que se pueden hacer con new... DATE, MAP o SET  
 let g = typeof new Date()
 
 // FUNCTION 
 let h = typeof function(){}

 // UNDEFINED (por error)
 let i = typeof Miguel

 // OBJETO (CASO ESPECIAL)
 let j = typeof null

 console.log('--- Typeof String "Miguel" -------')
 console.log(a)       // Sale en consola -> string porque el tipo de dato de Miguel es un string. Si cambiamos a por la palabra string seguirá saliendo string 
 console.log('')
 console.log('--- Typeof String "Number 3.14" -------')
 console.log(b)
 console.log('')      // Consola -> number 
 console.log('--- Typeof String "Number NaN" -------')
 console.log(c)         // Incluso el propio error de number NaN es un number 
 console.log('')
 console.log('--- Typeof String "BOOLEAN con true" -------')
 console.log(d)        // Consola -> boolean
 console.log('')
 console.log('--- Typeof String "ARRAY" -------')
 console.log(e)        // Consola -> object y da esto porque un array es un tipo de objeto de JavaScript
 console.log('')
 console.log('--- Typeof String "OBJETO" -------')
 console.log(f)        // Consola -> object
 console.log('')
 console.log('--- Typeof String "con NEW" -------')
 console.log(g)        // Consola -> object 
 console.log('')
 console.log('--- Typeof String "FUNCTION" -------')
 console.log(h)        // Consola -> function 
 console.log('')
 console.log('--- Typeof String "UNDEFINED" -------')
 console.log(i)        // Consola -> undefined porque busca una referencia del nombre a algo y como no tiene nada...
 console.log('')
 console.log('--- Typeof String "NULL" -------')
 console.log(j)        // Consola -> object  

 // Entonces typeof nos sirve si nos viene algo del backend y queremos saber si es, por ejemplo, un string. Un ejemplo 
 console.log('')
 console.log('--------- Ejemplo si viene algo del backend ----------- ')
 let datoQueVieneDeBackend = 'Curso de JavaScript'           // Si cambiamos 'Curso de JavaScript' por 3.14 nos saltará el else. 
 if ( typeof datoQueVieneDeBackend === 'string'){
    console.log('Lo que viene del backend es string ')
 }else {
    console.log('Reclama a tu compañero que te mande un string ')
 }

 // Y ¿cómo hago si lo que me trae es un objeto? ¿Cómo identificar cuál es? INSTANCEOF
 //------------  instanceof ----------------------
 console.log('')
 console.log('--------- Ejemplo de instanceof ----------- ')
 let k = [1,2,3,4,5]
 let l = new Date()
 let m = new Set()
 let n = new Map()
 let o = null

 console.log(k instanceof Array)    // Consola -> true; si cambiamos solo la letra a la de date...
 console.log('----- Cambiando la pregunta de k a l ----- ')
 console.log(l instanceof Array)    // Consola -> false porque no es un array 
 // y podemos hacer un if
 console.log('---- Comprobamos con if y else --------')
 if(e instanceof Array){
    console.log('Gracias, backend, por mandarme un array')
 }else{
    console.log('Mándame un array, por favor ')
 }
 // ** NO SE PUEDE HACER UN instanceof DE UN NULL, SE ROMPE 
