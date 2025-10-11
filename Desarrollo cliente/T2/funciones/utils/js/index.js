let nombre = "Miguel";

// string template
console.log(`Hola ${nombre} este es el primer programa en JS`);

// interaccion del usuario
// Un alert es void -> any -> cualquier cosa
// alert(`Bienvenido ${nombre} a la pagina`) -> Saca info sin posibilidad de hacer nada

// Mensaje de prompt  que si se puede hacer algo, si ponemos una variable lo guarda en ella
// prompt("Por favor introduce tu nombre");
// let edad = prompt("Por favor introduce tu edad"); // Siempre devuelve un string

// Si yo lo quiero pasar a numero tengo varias formas una de ellas es el parseInt
// let edad = parseInt(prompt("Por favor introduce tu edad")) ;
// Si meten un string, Nan -> Intenta convertirlo a numero y si no puede devuelve NaN
// Como evitarlo con un if
/* if(isNaN(edad)){
    alert("Dato incorrecto")
}else {
    alert(`Tu edad es ${edad}`);
} */
// console.log(edad)

// Siguiente forma de interactuar con el usuario
/* let continuar = confirm("Estas seguro de que quieres continuar?"); // -> Devuelve true o false. Pregunta y responde true o false 
if(continuar){
    let edad = Number(prompt("Por favor introduce tu edad")) ;
    if(isNaN(edad)){
        alert("Dato incorrecto")
    }else {
        alert(`Tu edad es ${edad}`);
    }
}else{
    alert("No quieres continuar")
} */

// Existen librerias con las que trabajar y hacerlo mas bonito
// una vez isntaladas las librerias, se pueden usar
/* Swal.fire({
  title: "Do you want to save the changes?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below 
  if (result.isConfirmed) {
    Swal.fire("Saved!", "", "success");
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
}); */

// Los metodos en java tenian que estar dentro de LAS CLASES
// Aqui no, aqui pueden estar sueltos
// function nombre(){}
// saludar(nombre);
/* console.log("Suma de 4 y 7");
console.log(sumar(4, 7));
console.log("Suma de 4 solo"); */

// parametros posicionales
// console.log(sumar(4));

// FUNCION MULTIPLICAR
console.log("Vamos a multiplicar dos números");
multiplicar(4, 6, 8, 9, 6); // -> Nos va a multiplicar solo los dos primeros parametros y el resto lo va a ignorar

function saludar(nombre) {
  console.log(`Hola ${nombre}, primera función realizada`);
}

// Con operaciones. Podemos igualar el 2 parametro por si acaso alguien solo le pasa uno y asi nos evitamos el NaN
/* function sumar(param1, param2 = 0) {
  return param1 + param2;
} */
// parametros posicionales ejemplo. Evitar ponerlos en el primero, siempre al final, si ponemos el defecto al principio el resto tambien.
function sumar(param1, param2 = 0) {
  // para entender los parametros posicionales enviando solo el 4 aqui nos Sale NaN porque el 4 se asigna a param1 y param2 no tiene valor
  console.log(`Parametro 1: ${param1} Parametro 2: ${param2}`);
  return param1 + param2;
}

//* SI PONEMOS PARAMETRO POR DEFECTO, ES PARA QUE TODOS LOS DEMAS LO LLEVEN  */

function multiplicar(param1, param2) {
  console.log(param1 * param2);
  // ARGUMENTOS INVISIBLES
  console.log(arguments[0]); // Nos devolvera 4 que es el primer parametro
  // Si queremos saber la longitud
  console.log(arguments.length); // Nos devolvera 5 que es el número de parametros que le hemos pasado
}

// Arrow functions -> funciones flecha o funcion lambda. Escrita de forma muy rapida , centrada en el cuerpo
// Las funciones lambda se suelen utilizar como parametros de otras funciones.
// Creacion: 1º una variable y despues funcion lambda, Tantos parametros como queramos. Como es una funcion que suele utilizar como parametro dentro de otra funcion,
// lo normal y corriente esque suela estar asociada a una variable
// let variable = (param1, param2, param3) => {cuerpo de la funcion}

// para esta funcion te voy a pedir, (parametro 1, parametro 2) y quiero que esto sea la ejecucion de la funcion. => {console.log(param1+param2)}
let sumaFlecha = (param1, param2) => {
  console.log(param1 + param2);
};
// Funcion flecha
sumaFlecha(4, 6);

// Importante: Si la funcion lambda tiene un solo parametro, no es necesario poner los parentesis. Al igual que los parentesis de la funcion, si solo tiene un parametro
// no hace falta. Ponerlos siempre para evitar errores. Si en el cuerpo no pongo {} quiere decir que solo tengo una linea en el cuerpo y esta es el retorno.

// el console.log() retorna vacio. si quiero que retorne un numero lo dejo vacio
let restaFlecha = (param1, param2) => param1 - param2;
console.log(restaFlecha(4, 2));
// Si lo dejamos como antes let restaFlecha = (param1, param2) => console.log(param1 - param2);
// Esto console.log(restaFlecha(4, 2)); nos devuelve undefined porque la funcion no retorna nada
// Y si añadimos un return 5 por ejemplo, aparte del resultado me vas a retornar el 5
/*
let restaFlecha = (param1, param2) => {
    console.log(param1 - param2);
    return 5;
console.log(restaFlecha(4, 2));
*/
