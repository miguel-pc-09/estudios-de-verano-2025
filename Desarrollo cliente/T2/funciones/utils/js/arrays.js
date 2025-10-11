// array -> colección de datos .
// const equipos = [];
// puedo meter equipos? -> Se puede, como si esta vacio como si no. Una constante no nos dejara asignarle otro valor,
// ejemplo: equipos = []

// Como trabajamos con un array

const equipos = ["Barcelona", "Real Madrid", "Atletico de Madrid", "Bilbao"];
console.log(equipos);

// Si queremos coger elementos del array
console.log(equipos[1]); // Real Madrid

// Si hacemos esto siguiente
equipos[4] = "Osasuna"; // Añade al final
// Y si ponemos [10]
equipos[10] = "Valencia"; // sacaria todas las posiciones y saltaria a la 10, Y los que no tienen pondria undefined
console.log(equipos);

// Si quisieramos modificar en este caso en la posicion 1
equipos[1] = "R.Madrid"; // Modifica el valor de Real Madrid a R.Madrid

// Queremos sacar todos los equipos -> for. Tradicional
console.log("---- FOR ----");
for (let index = 0; index < equipos.length; index++) {
  const equipo = equipos[index];
  console.log(equipo);
}
// Tenemos tambien forIn. -> Dame la clave de los elementos.
console.log("---- FOR IN ----");
for (const key in equipos) {
  console.log(key); // Nos saca las posiciones del array
}

// Tenemos tambien forOf que conociamos por foreach en java -> dame los elementos del...
console.log("---- FOR OF ----");
for (const equipo of equipos) {
  console.log(equipo);
}

// Aqui tenemos un foreach pero cambia la manera en la que construye
// foreach es una FUNCION que me permite iterar. -> Como es una funcion, solo se la puedo aplicar a un array
// con tres parametros.   el elemento, el indice y lo que recorres
// elemento -> Barcelona, pasara otra vez y sacara el madrid
console.log("---- FOREACH ----");
equipos.forEach((element, i) => {
  if (i % 2 == 0) {
    console.log(element);
  }
});

// Añadir de forma dinámica
// aaañadir elemento
console.log("--- PUSH ------");

equipos.push("Sevilla", "Rayo"); // Añade al final del array
console.log(equipos);
// En vez de al final queremos al principio
console.log(" Al principio del array ");
equipos.unshift("Celta de Vigo"); // Añade al principio del array el o los elementos
console.log(equipos.unshift("Celta de Vigo", "Las Palmas")); // me imprime la longitud en este caso 14. Ademas aparte de un parametro podemos pasar mas
console.log(equipos); // me imprime el array con el celta de vigo al principio

// borrar elementos POP (final del arrat) y SHIFT (principio del array)
console.log("--- POP ---- ");
equipos.pop(); // borra el ultimo elemento del array y lo retorna, string o undefined
console.log(`Elemento eliminado correctamente ${equipos.shift()}`);
console.log(equipos);
console.log("--- SHIFT ---- ");
// equipos.shift();
console.log(`Elemento eliminado correctamente ${equipos.shift()}`);
console.log(equipos);

// filtrar elementos
// Metodo find o filter
// find ->  retorna el primer elemento que coincida con la busqueda
// Vamos a buscar un equipo que tenga al menos 7 letras
console.log("Filtrado por equipos de 7 FIND");

let busqueda = equipos.find((item) => {
  // retornar true cuando item cumple la condicion de busqueda
  return item.length >= 7; // y pomodemos ponerlo como variable
});
console.log(busqueda);

// filter -> retorna todos los elementos que coinciden con la busqueda
console.log("------- FILTER ------------ ");
equipos
  .filter((item) => {
    // Como nos devuelve una lista podemos recorrerla con un foreach
    return item.length >= 7;
  })
  .forEach((item) => {
    console.log(item);
  });
