<!DOCTYPE html>
<html>
    <head>
        <title>Saludo Personalizado</title>
    </head>
    <body>
        <h1>Saludo Personalizado</h1>

        <?php
        // Declara una variable llamada $nombre y le asigna el valor "Juan"
        $nombre = "Juan";

        // Muestra un mensaje en la página web utilizando la variable $nombre
        echo "¡Hola, $nombre! Bienvenido a nuestro sitio web.";

        /* Explicación paso a paso:
          $nombre = "Juan";

          Se declara una variable llamada $nombre y se le asigna el valor "Juan".
          echo "¡Hola, $nombre! Bienvenido a nuestro sitio web.";

          Se usa echo para imprimir un mensaje en la página.
          Como $nombre está dentro de comillas dobles (""), PHP reemplaza la variable con su valor (Juan).
          El resultado en pantalla será:
          ¡Hola, Juan! Bienvenido a nuestro sitio web.
         */
        ?>
    </body>
</html>

