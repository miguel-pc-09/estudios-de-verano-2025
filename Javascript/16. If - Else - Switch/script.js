/*
¿Qué es un condicional en JavaScript? Es una estructura de control que te
permite ejecutar distintos bloques de código dependiendo de una condición específica,
esto te permite tener cierto comportamiento o ciertas acciones dependiendo de si esta condición es verdadera o falsa
*/ 
//-----------------  ¿Puede entrar este chico al establecimiento? -------------------
console.log('')
console.log('---------- Con IF / ELSE (SIMPLE) ---------')
console.log('¿Puede entrar este chico al establecimiento?')

let edadChico = 17

if(edadChico >= 18){
    console.log('Puedes pasar. ')        // Puedes pasar. -> con 18 en adelante 
}else {
    console.log('No puedes pasar. ')     // No puedes pasar. -> menos de 18
}

console.log('')

// -----------  Añadiendo más variables -> IF / ELSE ---------------------------------------------
console.log('---------- Con IF / ELSE (CON &&) ---------')
console.log('¿Puede entrar esta persona al establecimiento?')

let edadPersona = 18
if(edadPersona >= 18 && edadPersona <= 60){    // Es decir, entre 18 y 60 sí podrán pasar 
    console.log('Puedes pasar. ')         
}else {
    console.log('No puedes pasar. ')     
}

console.log('')

// ----------- IF / ELSE IF -------------------------
console.log('---------- Con IF / ELSE IF ---------')
console.log('¿Puede entrar esta persona al establecimiento?')

let edadPersona2 = 17
if(edadPersona2 >= 18 && edadPersona2 < 60){                     // Es decir, entre 18 y 60 sí podrán pasar 
    console.log('Puedes pasar. ')         
}else if(edadPersona2 <= 18) {
    console.log('No puedes pasar, eres menor de edad. ')         // Aquí se separa en dos partes: menores de 18
}else{
    console.log('No puedes pasar, pasas el máximo de edad. ')    // Mayores de 60
}

console.log('')

// ---------------  Switch -------------------
console.log('---------- SWITCH ---------')
console.log('Respuesta dependiendo de lo que pongamos de música. ')

let estiloDeMusica = 'Pop'

switch (estiloDeMusica) {
    case 'Punk':
        console.log('Te recomiendo a los Ramones. ')
        break;
    case 'Hard Rock':
        console.log('Te recomiendo a Guns N\' Roses. ')
        break;
    case 'Metal':
        console.log('Te recomiendo a Pantera. ')
        break;
    case 'Rock and Roll':
        console.log('Te recomiendo a The Rolling Stones. ')
        break;  
    case 'Pop':
        console.log('Te recomiendo a Michael Jackson. ')
        break;          
    default:
        'No conozco esta música, pero te recomiendo escuchar Mozart. '
        break;
}

console.log('')

// --------------- IF anidado -------------------------------------
console.log('--------- IF anidado -----------')

let edad2 = 17
let nacionalidad = 'Española'
let tienePasaporte = true

if(edad2 >= 18){
    console.log('Tienes edad para viajar, aprobado trámite 1')
    if(nacionalidad == 'Española'){
        console.log('La documentación está correcta, aprobado trámite 2')
        if(tienePasaporte){
            console.log('Usted puede viajar, ¡buen viaje!')
        }else{
            console.log('No puedes viajar porque el pasaporte es obligatorio')
        }
    }else{
        console.log('Debes presentar la documentación de tu país de origen')
    }
}else{
    console.log('Debes ser mayor de edad para viajar al exterior')
}

// RESUMEN DE LA SINTAXIS
/*
-- Sencillo --
IF (CONDICIÓN){
        CÓDIGO
}

-- Completa -- 
IF (CONDICIÓN){
        CÓDIGO
}else{
    CÓDIGO
}

-- Múltiple -- 
IF (CONDICIÓN){
        CÓDIGO
}else if (OTRA CONDICIÓN){
    CÓDIGO
}else{
    CÓDIGO
}
*/
