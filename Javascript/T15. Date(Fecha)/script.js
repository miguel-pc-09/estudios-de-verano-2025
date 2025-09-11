// Principalmente se suele utilizar este metodo que nos dara la fecha de ahora 
console.log('')
console.log('---- Fecha normal ---- ')
const fecha = new Date() 
console.log(fecha) 
//  consola -> 2025-09-11T11:20:07.586Z

// Todo esto se puede formatear y mandarle una fecha en particular por ejemplo. 
// En ingles se pone AAAA-MM-DD Año-Mes-Día ESTO ES LA FORMA "ISO" 
// Forma ShORT 03/15/2020 -> Día/Mes/Año
// Forma LONG Mar 25 2020 -> Mes Día Año
console.log('')
console.log('---- Fecha elegida ---- ')
const fecha2 = new Date("2021-05-01") 
console.log(fecha2)
// Consola -> 2021-05-01T00:00:00.000Z

// En caso de querer solo traer el año de la fecha getFullYear
console.log('')
console.log('---- Solo el Año ---- ')
const fecha3 = new Date() 
console.log(fecha3.getFullYear()) // RECORDAR como es un metodo siempre () para que ejecute 
// consola -> 2025

// Si solo  queremos el mes 
console.log('')
console.log('---- Solo el Mes ---- ')
const fecha4 = new Date() 
//Modificamos 
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

let resultado = meses[fecha4.getMonth()] // Ahora de esta forma nos dara el indice y modificamos del console fecha4.getMonth() por resultado 
// Ahora el resultado por consola sera Septiembre.
console.log(resultado) // Aqui tenemos una cuestion porque con get Month nos trae el 8 cuando estamos al 9
// Esto es porque los meses es un array de meses 
// INDICES        0          1         2        3        4       5        6        7           8            9         10            11 
// let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

// ------     Sacando todo por partes ---------
console.log('')
console.log('---- El año por partes ---- ')

const fecha5 = new Date()
let meses2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

let resultado2 = fecha5.getDate() + ' ' + meses2[fecha5.getMonth()] + ' ' + fecha5.getFullYear()
console.log(resultado2)
// consola -> 11 Septiembre 2025

// Modificacion de una de las partes el año por ejemplo 
console.log('')
console.log('---- Fecha completa modificando el año con SET ---- ')

const fecha6 = new Date() // Despues del const fecha new date añadimos lo siguiente 
fecha6.setFullYear(2029)
fecha6.setMonth(9)
fecha6.setDate(29)
// Lo mismo para meses o dias, utilizamos el SET 
// Meses setMonth(9) -> nos daria octubre, tenemos que poner uno menos siempre 
// fecha setDate(29)

let meses3 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

let resultado3 = fecha6.getDate() + ' de ' + meses3[fecha6.getMonth()] + ' de ' + fecha6.getFullYear()
console.log(resultado3)
// Consola -> 11 Septiembre 2029 // 11 Octubre 2029 // 29 de Octubre de 2029
//       SOLO ->     AÑO                AÑO Y MES          COMPLETO 