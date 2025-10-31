<!DOCTYPE html>
<html>
    <head>
        <title>Calculadora Básica</title>
    </head>
    <body>
        <h1>Calculadora Básica</h1>

        <form method="post">
            <label for="num1">Número 1:</label>
            <input type="number" id="num1" name="num1">
            <br>
            <label for="num2">Número 2:</label>
            <input type="number" id="num2" name="num2">
            <br>
            <select name="operacion">
                <option value="suma">Suma</option>
                <option value="resta">Resta</option>
                <option value="multiplicacion">Multiplicación</option>
                <option value="division">División</option>
            </select>
            <br>
            <input type="submit" value="Calcular">
        </form>

        <?php
        // Verifica si el formulario ha sido enviado mediante el método POST
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Obtiene los valores enviados desde el formulario
            $num1 = $_POST["num1"]; // Primer número ingresado por el usuario
            $num2 = $_POST["num2"]; // Segundo número ingresado por el usuario
            $operacion = $_POST["operacion"]; // Tipo de operación seleccionada por el usuario
            // Utiliza una estructura switch para determinar qué operación realizar
            switch ($operacion) {
                case "suma":
                    $resultado = $num1 + $num2; // Realiza la suma
                    break;
                case "resta":
                    $resultado = $num1 - $num2; // Realiza la resta
                    break;
                case "multiplicacion":
                    $resultado = $num1 * $num2; // Realiza la multiplicación
                    break;
                case "division":
                    if ($num2 != 0) { // Verifica que el divisor no sea 0 para evitar errores
                        $resultado = $num1 / $num2; // Realiza la división
                    } else {
                        $resultado = "Error: División por cero."; // Mensaje de error si el divisor es 0
                    }
                    break;
                default:
                    $resultado = "Operación no válida."; // Mensaje de error si la operación no es válida
                    break;
            }

            // Muestra el resultado de la operación en pantalla
            echo "El resultado de la operación es: $resultado";
        }
        /*
          Explicación paso a paso:
          Verifica si la solicitud es de tipo POST

          $_SERVER["REQUEST_METHOD"] == "POST" asegura que el código solo se ejecute cuando se envíen datos desde un formulario HTML usando POST.
          Recibe los valores enviados desde el formulario HTML

          $_POST["num1"] y $_POST["num2"] capturan los números ingresados por el usuario.
          $_POST["operacion"] obtiene la operación seleccionada (suma, resta, multiplicacion, division).
          Usa switch para realizar la operación matemática correspondiente

          Dependiendo del valor de operacion, se ejecuta el cálculo correspondiente.
          Si la operación es división, se verifica que num2 no sea 0 para evitar errores.
          Si la operación no coincide con ninguna opción válida, se asigna "Operación no válida.".
          Muestra el resultado en la página

          Se usa echo para imprimir el resultado de la operación.
         */
        ?>

    </body>
</html>

