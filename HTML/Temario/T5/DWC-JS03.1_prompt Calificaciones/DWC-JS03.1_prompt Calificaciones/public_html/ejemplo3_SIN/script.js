// Selecciona los elementos del DOM
const resultadosDiv = document.getElementById("resultados");
const botonIngresarNota = document.getElementById("ingresarNota");

// Función para procesar y mostrar la nota
function solicitarNota() {
    // PIDE UNA NOTA POR TECLADO Y LA GUARDA EN LA VARIABLE nota
    const nota = prompt("Introduce tu nota:");

    // SI EL USUARIO PULSA CANCELAR, NO HACE NADA
    if (nota === null) {
        resultadosDiv.innerHTML += `<p>Operación cancelada. No se introdujo ninguna nota.</p>`;
        return; // Sale de la función
    }

    // SI SE INTRODUJO UN NÚMERO
    if (Number(nota) == nota) {
        // SI LA NOTA ES ENTRE 0 Y 10, COMPRUEBA EL RANGO Y DA UN MENSAJE
        if (nota > 0 && nota <= 10) {
            let mensaje = ""; // Variable para almacenar el mensaje según la nota
            if (nota < 3) {
                mensaje = "Muy deficiente";
            } else if (nota < 5) {
                mensaje = "Insuficiente";
            } else if (nota < 6) {
                mensaje = "Suficiente";
            } else if (nota < 7) {
                mensaje = "Bien";
            } else if (nota < 9) {
                mensaje = "Notable";
            } else if (nota >= 9) {
                mensaje = "Sobresaliente";
            }
            // Muestra el mensaje en pantalla inmediatamente
            resultadosDiv.innerHTML += `<p>Nota: ${nota} - ${mensaje}</p>`;
        } else {
            // SI LA NOTA NO ES ENTRE 0 Y 10
            resultadosDiv.innerHTML += `<p>Nota: ${nota} - Nota errónea</p>`;
        }
    } else {
        // SI LA NOTA INTRODUCIDA NO ES UN NÚMERO
        resultadosDiv.innerHTML += `<p>Introduce un número válido</p>`;
    }
}

// Agrega un evento al botón para que el usuario pueda introducir una nota
botonIngresarNota.addEventListener("click", solicitarNota);
