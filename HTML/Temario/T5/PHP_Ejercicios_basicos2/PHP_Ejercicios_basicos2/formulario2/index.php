<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>Formulario de Registro de Usuario</title>
</head>
<body>
    <h1>Formulario de Registro de Usuario</h1>

    <form action="conexion.php" method="POST">
        
        <label for="nombre">Nombre de Usuario:</label>
        <input type="text" id="nombre" name="nombre" required>
        <br>

        <label for="correo">Correo Electrónico:</label>
        <input type="email" id="correo" name="correo" required>
        
         <br>

        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" required></textarea>
        
         <br>

        <input type="submit" value="Registrar">
    </form>
</body>
</html>
