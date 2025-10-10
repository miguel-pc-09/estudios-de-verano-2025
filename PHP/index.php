<?php
// PHP es dinamico y devil, aparte de gradual. Se puede mezclar php y html
# Los comentarios en php son con // o con # o con /* */
# Las instrucciones en php terminan con ;
# el echo se puede hacer asi o <?php echo "Hola Mundo"; 
# o asi <?= "Hola Mundo";
# Variables
$name = "Miguel";
$isDev = true;
$age = 37;
// Metodo var_dump para ver el tipo de dato y el valor del dato en el momento que tiene esa variable
// var_dump($name);
// var_dump($isDev);
// var_dump($age);
// Tambien tenemos el gettype() que solo devuelve el tipo de dato
// echo gettype($name);
// echo gettype($isDev);
// echo gettype($age);
// Y otros como el is_string(), is_bool(), is_int() que devuelven true o false
// echo is_string($name);
// echo is_bool($isDev);
// echo is_int($age);

// Al ser devil, el mas es para sumar numeros, por mas que pongamos string lo va a tomar como int
$newAge = 39 + '1';
// Y con el punto es para concatenar
$newAge2 = $age. '1';

// De esta forma podemos mezclar variables y texto siempre con "" no con ''
$output = "Hola $name, con una edad de $age años 😁" ;

// Tambien podemos concatenar con el punto$output .= 
// $output = "Hola $name";
// $output .= ", con una edad de $age años 😁" ;

// Para mostrar simbolos o escaparlas usamos la barra invertida \$ 
?>


<h1>
    <?= $newAge2; ?>
    <br>
    <?= $output ?>
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