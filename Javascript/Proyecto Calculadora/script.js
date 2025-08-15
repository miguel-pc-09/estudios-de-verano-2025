// Esto agregar el valor del boton de la calculadora que toquemos con el value += valor
function agregar(valor){
    document.getElementById('pantalla').value += valor
}
// Funcion que vacía la pantalla
function borrar(){
    document.getElementById('pantalla').value = ''
}
// Funcion que toma el valor de la pantalla y ejecuta los calculos
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}