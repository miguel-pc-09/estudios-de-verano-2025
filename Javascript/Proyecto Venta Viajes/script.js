// Importamos los objetos creados en ciudades.js. Ponemos ./ciudades porque está dentro de la carpeta; si no lo estuviera, tendríamos que poner la dirección donde tendría que recoger esos datos.
import { barcelona, roma, paris, londres } from './ciudades.js'

/* IMPORTANTE:
DOM -> Document Object Model; en JavaScript es una representación estructurada de un documento HTML.
La interacción con esto nos va a permitir hacer una modificación de estructura, contenido o estilo en la
página web de forma dinámica. El DOM se organiza como un árbol de nodos y cada nodo es un elemento. Este 
elemento es un objeto en JavaScript que tiene sus propiedades y sus métodos, con los cuales vamos a poder 
interactuar con él y modificar la aplicación de forma que se vea muchísimo más dinámica. La buena utilización 
del DOM en JavaScript nos va a permitir hacer páginas web súper dinámicas y súper atractivas.
*/

// Capturamos los datos del HTML 
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

// Agregar evento CLICK a cada enlace. El iterable sería "enlaces" y cada uno cogerá un (enlace)
enlaces.forEach(function (enlace) {
        enlace.addEventListener('click', function () {                          // Evento que escucha, parecido al onclick de HTML pero desde JavaScript

            // REMOVER la clase "active" de todos los enlaces
            enlaces.forEach(function (enlace) {
                enlace.classList.remove('active');
            });
            
            // Agregar la clase "active" al enlace actual
            this.classList.add('active')

            // Obtener el contenido correspondiente según el enlace 
            let contenido = obtenerContenido(this.textContent)          // Esta parte se podrá ver en consola de la web en cada una de las 4 partes.

            // MOSTRAR CONTENIDO EN EL DOM
            tituloElemento.innerHTML = contenido.titulo
            subTituloElemento.innerHTML = contenido.subtitulo
            parrafoElemento.innerHTML = contenido.parrafo
            precioElemento.innerHTML = contenido.precio
        });   
    });

// FUNCIÓN PARA TRAER LA INFORMACIÓN CORRECTA DESDE CIUDADES.JS
function obtenerContenido (enlace){                 
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,                         // Mandará un enlace y, a su vez, tendrá uno de estos puntos 
        'París' : paris,
        'Londres' : londres
    };
    return contenido[enlace];                   // Dependiendo del enlace, traerá el contenido solo de ese
}

