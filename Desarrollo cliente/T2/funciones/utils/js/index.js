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
let continuar = confirm("Estas seguro de que quieres continuar?"); // -> Devuelve true o false
if(continuar){
    let edad = Number(prompt("Por favor introduce tu edad")) ;
    if(isNaN(edad)){
        alert("Dato incorrecto")
    }else {
        alert(`Tu edad es ${edad}`);
    }
}else{
    alert("No quieres continuar")
}