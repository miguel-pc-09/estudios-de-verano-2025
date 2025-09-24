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
