// Selecciona los elementos del DOM
const resultadosDiv = document.getElementById("resultados"); // Obtiene el elemento con id "resultados", donde se mostrarán las notas y mensajes
const botonIngresarNota = document.getElementById("ingresarNota"); // Obtiene el botón con id "ingresarNota", que será utilizado para iniciar el proceso de introducción de notas

// Función para procesar y mostrar la nota
function solicitarNota() {
    // PIDE UNA NOTA POR TECLADO Y LA GUARDA EN LA VARIABLE nota
    const nota = prompt("Introduce tu nota:"); // Muestra un cuadro emergente solicitando una nota al usuario, y almacena la entrada en la variable 'nota'

    // SI EL USUARIO PULSA CANCELAR, NO HACE NADA
    if (nota === null) { // Verifica si el usuario pulsó "Cancelar" en el cuadro emergente
        resultadosDiv.innerHTML += `<p>Operación cancelada. No se introdujo ninguna nota.</p>`; // Muestra un mensaje en pantalla indicando que la operación fue cancelada
        return; // Sale de la función sin continuar
    }

    // SI SE INTRODUJO UN NÚMERO
    if (Number(nota) == nota) { // Comprueba si la entrada del usuario es un número válido
        // SI LA NOTA ES ENTRE 0 Y 10, COMPRUEBA EL RANGO Y DA UN MENSAJE
        if (nota > 0 && nota <= 10) { // Comprueba si el número está en el rango válido (1-10)
            let mensaje = ""; // Declara una variable para almacenar el mensaje correspondiente a la nota
            if (nota < 3) { // Si la nota es menor que 3
                mensaje = "Muy deficiente";
            } else if (nota < 5) { // Si la nota es mayor o igual a 3 pero menor que 5
                mensaje = "Insuficiente";
            } else if (nota < 6) { // Si la nota es mayor o igual a 5 pero menor que 6
                mensaje = "Suficiente";
            } else if (nota < 7) { // Si la nota es mayor o igual a 6 pero menor que 7
                mensaje = "Bien";
            } else if (nota < 9) { // Si la nota es mayor o igual a 7 pero menor que 9
                mensaje = "Notable";
            } else if (nota >= 9) { // Si la nota es mayor o igual a 9
                mensaje = "Sobresaliente";
            }
            // Muestra el mensaje en pantalla inmediatamente
            resultadosDiv.innerHTML += `<p>Nota: ${nota} - ${mensaje}</p>`; // Añade el mensaje generado al contenedor "resultados"
        } else {
            // SI LA NOTA NO ES ENTRE 0 Y 10
            resultadosDiv.innerHTML += `<p>Nota: ${nota} - Nota errónea</p>`; // Si el número está fuera del rango, muestra un mensaje indicando que la nota es errónea
        }
    } else {
        // SI LA NOTA INTRODUCIDA NO ES UN NÚMERO
        resultadosDiv.innerHTML += `<p>Introduce un número válido</p>`; // Muestra un mensaje indicando que la entrada no es un número válido
    }
}

// Agrega un evento al botón para que el usuario pueda introducir una nota
botonIngresarNota.addEventListener("click", solicitarNota); // Asocia un evento "click" al botón para que, al pulsarlo, llame a la función 'solicitarNota'
