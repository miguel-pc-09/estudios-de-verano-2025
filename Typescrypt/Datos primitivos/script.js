var estudiasteJavascript = false;
if (estudiasteJavascript) {
    console.log('Puedes seguir viendo este curso de Typescript');
}
else {
    console.log('Primero tienes que ver el curso de Javascript');
}
// Number
var interMiami = 11;
// Puede darse el caso que encontremos algo como lo siguiente
// let interMiami: number | null | undefined = null o cualquier de los otros, no daria error
var fcDallas = 10;
// Metemos a messi y creamos un booleano
var messi = 1;
// Si juega o no juega messi 
var juegaMessi = false;
var palabras = 'Me emocioné al verlo a Messi';
// Si no va a devolver nada se pone :void
function jugar(equipo1, equipo2, juegaMessi) {
    var motivo = '';
    // Complicamos algo mas y añadimos llaves
    if (juegaMessi) {
        equipo1 += messi;
        motivo = ' Por que juega messi';
    }
    // No ponemos if else ya que si no entra en uno entra en otro
    if (equipo1 > equipo2)
        console.log("Gana el Inter Miami ".concat(motivo));
    if (equipo1 == equipo2)
        console.log('Empatan');
    if (equipo1 < equipo2)
        console.log('Gana el FC Dallas');
}
jugar(interMiami, fcDallas, juegaMessi); // Por consola sale que empatan 11 y 11
// Al meter a messi el resultado es gana el Inter Miami
// Si ponemos palabras, typescript sabe que es un string, y si ponemos .(punto) nos enseña metodos
// palabras.   Métodos de string
// interMiami. Métodos de number
// juegaMessi. Métodos de boolean
// -------- ANY (cualquier dato) -----------------
/* Siguienet ejemplo
let disney;
disney = 'Star Wars y Marvel'
console.log(disney)
*/
var disney;
// Lo recomendado seria ->  let disney: any; 
// Si ponemos let disney: string; fallaran los que no sean string
// Si ponemos let disney: string | boolean ; fallaran los que no sean string y boolean
disney = 'Star Wars y Marvel';
// Si disney le ponemos un . trae todo lo que fuera un string
console.log(disney);
// Ahora vamos a cambiar disney
disney = 15000000000;
// Si ahora metemos un punto en disney nos trae los number porque es el ultimo valor que se le asigno
console.log(disney);
// Otro mas 
disney = true;
console.log(disney);
// Estos tres ejemplos como no pusimos nada en let dinsey; si señalamos los dos puntos nos sale any
// Si lo igualaramos a algo como = 'jihas ' nos marcaria string. 
// lo recomendado es poner any como se vera arriba 
// --------- ARRAY ------------------
var arregloNumeros = [1, 2, 3, 4, 5, 6];
// Si intentamos tiparlos nos da error
// let arreglo: number = [1,2,3,4,5,6]
var arregloTexto = ['html', 'CSS', 'JS'];
// Si intentamos tiparlos nos da error
// let arreglo2: string = ['html', 'CSS', 'JS']
// Si mandamos lo siguiente nos da un error de tipado 
// arreglo.push('JAVASCRIPT')
// Ahora si hacemos lo siguiente nos dara los metodos de number o string dependiendo del caso
// arreglo[0]."Aqui mostrara los metodos"
arregloTexto[0].indexOf('html');
// ----- OBJETOS --------------------------
// Basicamente sería, en javascript. typescript si señalas programador te dira el tipo de tipado que tiene cada uno
var programador = {
    nombre: 'Miguel',
    tecnologias: ['React', 'Angular', 'JS'],
    tomaAgua: true
};
// Queremos sobre escribi al pioner esto: programador = {} comienza a dar error, pero...
programador = {
    // añadimos datos del objeto 
    nombre: 'Ricardo',
    tecnologias: ['C#'],
    // Otro dato si en vez de false o true en este, lo modificamos por un string, nos dara un error, 
    // porque el primero creado esta diciendo que eso es un boolean
    // En cambio si cambiasemos el nombre del objeto por programador2 o otra cosa no abría ningún problema 
    tomaAgua: false
    // poniendo los 3 como antes y cambiando lo de dentro ya no da fallo 
};
// ¿Y que saldra en console.log?
console.log(programador);
// Ahora nos dejara typar este 
var alumno = {
    nombre: 'Miguel',
    tecnologias: ['React', 'Angular', 'JS'],
    tomaAgua: true
};
// Que ocurre si creamos otro con otros datos
var alumno2 = {
    nombre: 'Federico',
    tecnologias: ['HTML', 'CSS']
    // Pero toma agua no lo se o no quiero ponerlo. Para solucionar esto añadimos ? a tomar agua 
};
var dev = {
    nombre: 'Miguel',
    tecnologias: ['React', 'Angular', 'JS'],
    tomaAgua: true
};
// Aunque quitemos :Trabajador y añadamos mas cosas, y lo llamemos funcionara. En el momento que eliminemos por ejemplo nombre salta error
// Si en la funcion intentamos poner trabajador.apellido, saltaria error. Y si ponemos Type en vez de interface, no daria error
var dev2 = {
    nombre: 'fede',
    tecnologias: ['HTML', 'CSS'],
    tomaAgua: null,
    apellido: 'Valverde',
    recibido: false
};
// recibe un trabajador de tipo Trabajador
function enviarCurriculum(trabajador) {
    console.log("Este Curriculum es de ".concat(trabajador.nombre));
}
enviarCurriculum(dev2);
// ---------- CLASES Y POO -----------------------------
var Pelicula = /** @class */ (function () {
    // Crearemos constructor para que rellene los datos que tiene por defecto 
    function Pelicula(nombre, protagonistas, actores) {
        this.nombre = nombre,
            this.protagonistas = protagonistas,
            this.actores = actores;
    }
    // Puede tener metodos
    Pelicula.prototype.proyectarEnCine = function () {
        console.log("".concat(this.nombre, " est\u00E1 siendo proyectada"));
        // Al nombre le ponemos ahora un nombre por defecto
    };
    return Pelicula;
}());
// Aqui estamos instanciando las peliculas basandonos en el modelo de la clase 
var pelicula = new Pelicula('Barbie', ['Barbie', 'Ken'], ['Margot Robbie', 'Ryan Gosling']);
var pelicula2 = new Pelicula('Oppenheimer', ['Oppenheimer', 'Straus'], ['Cillian Murphy', 'Robert Downey Jr.']);
pelicula2.proyectarEnCine();
console.log(pelicula2);
// const pelicula = new Pelicula
// pelicula.proyectarEnCine()
// ------------ ENCAPSULAMIENTO Y GENÉRICOS -----------------------------------------------
var Sorteo = /** @class */ (function () {
    // Generamos un constructor para ver a quien le tocara el nombre
    function Sorteo(nombre) {
        this.nombre = nombre;
    }
    // Para crear los Getter y Setter, usaremos las palabras Get y Set antes del nombre del atributo
    Sorteo.prototype.setTicket = function (ticket) {
        this.ticket = ticket;
    };
    Sorteo.prototype.getTicket = function () {
        return this.ticket;
    };
    // Método sortear que devolvera un string 
    Sorteo.prototype.sortear = function () {
        return "Para ".concat(this.nombre, " el ticket es ").concat(this.ticket);
    };
    return Sorteo;
}());
var sorteo = new Sorteo('Miguel Ángel');
sorteo.setTicket('A7');
console.log(sorteo.sortear());
