<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario POST sin XSS</title>
</head>
<body>

    <h2>Formulario con POST (Sin protección XSS)</h2>
    <form action="" method="POST">
        <label>Nombre:</label>
        <input type="text" name="nombre">
        <button type="submit">Enviar</button>
    </form>

    <hr>

    <?php
    if (isset($_POST["nombre"])) { // Sin htmlspecialchars(), permite XSS
        $nombre = $_POST["nombre"]; // No hay protección    htmlspecialchars($_POST["nombre"]); // Evita ataques XSS
        echo "<h3>Hola, $nombre!</h3>"; // Muestra directamente el input del usuario
    }
    ?>

</body>
</html>


