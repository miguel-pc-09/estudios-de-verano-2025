// Callbascks es básicamente una función que se pasa a otra función para poder utilizarla dentro

function mostrarConsola(num){
    console.log(num)
}

function calcular(num1, num2, callaback){
    let suma = num1 + num2
    callaback(suma)
}
calcular(1, 3, mostrarConsola)   // Consola -> 4 