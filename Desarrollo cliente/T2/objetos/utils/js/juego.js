// 3º Creamos la baraja
let baraja = [];
// CREAMOS LA BARA 2º PALOS [C,T,R,P]
// Creamos un array de palos
let palos = ["C", "T", "R", "P"];
// CORAZONES 1C...13K , TREB 1T.....13K, ......
for (let index = 0; index < palos.length; index++) {
  // en cada vuelta conseguimos 1º C, 2º T, 3º R, 4P
  for (let i = 1; i <= 13; i++) {
    // un switch para decirle que en el caso
    switch (i) {
      case 11:
        // crear la carta, y la meta dentro de la baraja
        baraja.push(new carta("J" + palos[index]));
        break;
      case 12:
        baraja.push(new carta("Q" + palos[index]));
        break;
      case 13:
        baraja.push(new carta("K" + palos[index]));
        break;
      default:
        // Resto de los casos
        baraja.push(new carta(i + palos[index])); // Ahora necesitamos una baraja
        break;
    }
  }
}

// console.log(baraja);  -> Comprobamos que saca la baraja completa

// El siguiente paso esque baraje la carta. Usamos SHUFFLE que nos devuelve una lista mezclada. Y la volvemos a reasignar. Se podria hacer con un random pero seria mas lineas de código
baraja = _.shuffle(baraja);

// baraja = []; Una vez utilizado lo quitamos
// Siguiente que deberia pasar. Empiezo a jugar, o posicion pop. Como no nos sale el pop, y no recordamos lo que podiamos hacer lo creamos. Pop quita el ultimo y shift el primero.
// Empiezo a jugar -> La banca juega hasta que tenga una cuenta de 17 o más
let cuentaBanca = 0;
/* while (cuentaBanca < 17) {
  cuentaBanca += baraja.pop().valor;
}
console.log(`La banca para de jugar porque tiene ${cuentaBanca}`); */

// setTimeout -> postergo la ejecucion de una accion, es lo de que tarda en lanzar el mensaje
/* setTimeout(() => {
    console.log("Ejecucion postergada");
    
}, 3000); */
// Otra opcion setInterval -> ejecuta una accion cada X segundos. Y aqui podemos meter cuentaBanca. Y para que el intervalo pueda para lo asiaciamos a una variable. Si queremos sacar la carta hacemos lo siguiente.
let intervalo = setInterval(() => {
  if (cuentaBanca < 17) {
    let carta = baraja.pop();
    cuentaBanca += carta.valor;
    console.log(carta.imagen);

    console.log(cuentaBanca);
  } else {
    // Se podria decir un ifelse para meterle un intervalo entre 17 y 21 que diga me planto
    // me he pasado de 16 de rango entre 17 en adelante. Ejecutamos clearInterval
    clearInterval(intervalo);
  }
  // Metemos un if para que pare
}, 2000);

// Repito el proceso para el jugador, agregando un pulsador para que pueda seguir pidiendo

/* let cuentaBanca = baraja.pop().valor;
// baraja.pop().valor la metemos a una variable
console.log(cuentaBanca);
// Para evitar hacer lo siguiente
cuentaBanca += baraja.pop().valor;
console.log(cuentaBanca);
cuentaBanca += baraja.pop().valor;
console.log(cuentaBanca);
cuentaBanca += baraja.pop().valor;
console.log(cuentaBanca);
cuentaBanca += baraja.pop().valor;
console.log(cuentaBanca);

console.log(baraja); */

// CREAMOS LA CARTA 1º // 3º comentamos para probar que salga
/* let carta1 = new carta("10C");
let carta2 = new carta("7C");
let carta3 = new carta("9C");
let carta4 = new carta("3C");
console.log(`El valor de la carta es ${carta1.valor}`);
console.log(`La imagen de la carta es ${carta1.imagen}`);
console.log(`El valor de la carta es ${carta2.valor}`);
console.log(`La imagen de la carta es ${carta2.imagen}`);
console.log(`El valor de la carta es ${carta3.valor}`);
console.log(`La imagen de la carta es ${carta3.imagen}`);
console.log(`El valor de la carta es ${carta4.valor}`);
console.log(`La imagen de la carta es ${carta4.imagen}`); */
