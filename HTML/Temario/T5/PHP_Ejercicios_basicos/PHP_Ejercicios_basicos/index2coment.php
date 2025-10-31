<!DOCTYPE html>
<html>
    <head>
        <title>Suma de Dos Números</title>
    </head>
    <body>
        <h1>Suma de Dos Números</h1>

        <form method="post">
            <label for="num1">Número 1:</label>
            <input type="number" id="num1" name="num1">
            <br>
            <label for="num2">Número 2:</label>
            <input type="number" id="num2" name="num2">
            <br>
            <input type="submit" value="Sumar">
        </form>

        <?php
        // Verifica si la solicitud HTTP es de tipo POST
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Recupera los valores enviados desde el formulario a través de POST
            $num1 = $_POST["num1"];
            $num2 = $_POST["num2"];

            // Realiza la suma de los dos números
            $resultado = $num1 + $num2;

            // Muestra el resultado de la suma en pantalla
            echo "La suma de $num1 y $num2 es $resultado.";
        }


        /*
          Explicación paso a paso:
          $_SERVER["REQUEST_METHOD"] == "POST"

          Comprueba si la solicitud HTTP fue enviada mediante el método POST.
          Esto se usa para asegurarse de que los datos provienen de un formulario que usa POST y no de una URL o enlace.
          $_POST["num1"] y $_POST["num2"]

          Obtiene los valores ingresados por el usuario en los campos del formulario con los nombres num1 y num2.
          Estos valores se envían desde un formulario HTML usando el método POST.
          $resultado = $num1 + $num2;

          Suma los valores ingresados y almacena el resultado en la variable $resultado.
          echo "La suma de $num1 y $num2 es $resultado.";

          Muestra el resultado de la suma en la página web.

         */
        ?>

    </body>
</html>


