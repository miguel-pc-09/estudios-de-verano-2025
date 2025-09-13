// Esto hace que floor redonde hacia abajo y el random siempre sea entre 1 y 100
// Esta parte del juego selecciona un numero al azar para que adivines
let numeroAzar = Math.floor(Math.random()*100) +1    

let numeroEntrada = document.getElementById('numeroEntrada')


let mensaje = document.getElementById('mensaje')
let intento= document.getElementById('intento')
let intentos = 0

// Esta acción se va a ejecutar cuando se toque el botón chequear
function chequearResultado (){
    intentos ++
    intento.textContent = intentos;
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Porfavor, introduce un número válido entre 1 y 100'
        mensaje.style.color = 'black' ;
        return                                                                       // Ponemos return para que corte aqui y no siga 
    }

    if(numeroIngresado === numeroAzar){
        mensaje.textContent = '¡Felicitaciones, has adivinado el número! ';
        mensaje.style.color = 'green' ;                                      // Cambia el color del mensaje
        numeroEntrada.ariaDisabled = true;                                   // No puede cambiar el número 
        
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = '¡Más alto!, el número es mayor al que me dijiste ';
        mensaje.style.color = 'red' ;
    }else{
        mensaje.textContent = '¡Más bajo!, el número es menor al que me dijiste ';
        mensaje.style.color = 'red' ;
    }
}