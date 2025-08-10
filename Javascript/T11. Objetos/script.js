// OBJETOS
/*
¿Qué es un objeto en JavaScript?
Un objeto en JavaScript es una estructura de datos formada por pares de clave-valor, 
que puede tener propiedades y métodos, y representa algo en la realidad, 
como por ejemplo un producto, un alumno, etc.

En programación orientada a objetos (POO), los objetos están basados en moldes llamados "clases",
que definen su comportamiento y estructura.
El objeto es una representación en el código de algo real.
Por ejemplo, si hablamos de un auto, el objeto podría tener: marca, modelo, peso, color...
Y si hablamos de "vehículo" (algo más abstracto), podríamos incluir propiedades como 
número de ruedas o si tiene puertas o no.
*/

// Ejemplo en script.js:
let auto1 = {
	marca: 'FIAT',
	modelo: 'Uno',
	peso: 1000, 
	color: 'Rojo'
};

let auto2 = {
	marca: 'RENAULT',
	modelo: '12',
	peso: 1100, 
	color: 'Marrón'
};

console.log('Auto1:', auto1);
console.log('Auto2:', auto2);

/*
// SALIDA EN CONSOLA:
Auto1: { marca: 'FIAT', modelo: 'Uno', peso: 1000, color: 'Rojo' }
Auto2: { marca: 'RENAULT', modelo: '12', peso: 1100, color: 'Marrón' }
*/

/*
*** En la consola del navegador, si desplegamos Auto1 o Auto2, veremos una sección [[Prototype]],
que contiene las funciones, métodos, etc., asociados al objeto.
*/

// Acceder solo a una propiedad:
console.log('El color del auto1 es:', auto1.color); // Objeto -> auto1 / Clave -> color / Valor -> 'Rojo'
// CONSOLA: El color del auto1 es: Rojo

// -------------------------------------------------------
// Modificar propiedades de un objeto declarado con const (sí es posible):
const auto3 = {
	marca: 'FIAT',
	modelo: 'Uno',
	peso: 1000, 
	color: 'Rojo'
};

auto3.marca = 'BMW';
auto3.modelo = 'X5';
console.log(auto3);
/*
// CONSOLA:
{ marca: 'BMW', modelo: 'X5', peso: 1000, color: 'Rojo' }
*/

// También podemos acceder usando la notación con corchetes:
console.log(auto3["marca"]); // BMW

// -------------------------------------------------------
// OTRO EJEMPLO CON UN OBJETO "vendedor"
const vendedor = {
	nombre: 'Pedro',
	apellido: 'González',
	empresa: 'Auto S.A.',
	habilidadesBlandas: ['Carisma', 'Puntualidad'], // Usamos un array
	vender: function() {
		return "Pedro ha vendido un auto";
	}, 
	nombreCompleto: function() {
		return this.nombre + " " + this.apellido;
	}
};
                                           // CONSOLA
console.log(vendedor.vender());            // Pedro ha vendido un auto
console.log(vendedor.nombreCompleto());    // Pedro González
console.log(vendedor.habilidadesBlandas);  // [ 'Carisma', 'Puntualidad' ]
