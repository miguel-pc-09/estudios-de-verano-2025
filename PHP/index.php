<?php
// PHP es dinamico y devil, aparte de gradual. Se puede mezclar php y html
# Los comentarios en php son con // o con # o con /* */
# Las instrucciones en php terminan con ;
# el echo se puede hacer asi o <?php echo "Hola Mundo"; 
# o asi <?= "Hola Mundo";
# Variables
$name = "Miguel";
$isDev = true;
$age = 39;

// Al ser devil, el mas es para sumar numeros, por mas que pongamos string lo va a tomar como int
$newAge = 39 + '1';
// Y con el punto es para concatenar
$newAge2 = $age. '1'
?>


<h1>
    <?= $newAge2; ?>
    <?= $name = "Miguel"; ?>
</h1>

<style>
    :root {
        color-scheme: light dark;
    }

    body {
        display: grid;
        place-content: center;
    }
</style>