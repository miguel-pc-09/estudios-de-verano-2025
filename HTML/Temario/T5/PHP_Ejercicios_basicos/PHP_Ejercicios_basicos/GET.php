<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario GET sin XSS</title>
</head>
<body>

    <h2>Formulario con GET (Sin protección XSS)</h2>
    <form action="" method="GET">
        <label>Nombre:</label>
        <input type="text" name="nombre">
        <button type="submit">Enviar</button>
    </form>

    <hr>

    <?php
    if (isset($_GET["nombre"])) { // Sin htmlspecialchars(), permite XSS
        $nombre = $_GET["nombre"]; // No hay protección      $nombre = htmlspecialchars($_GET["nombre"]); // Evita ataques XSS
        echo "<h3>Hola, $nombre!</h3>"; // Muestra directamente el input del usuario
    }
    ?>

</body>
</html>


