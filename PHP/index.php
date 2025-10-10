<?php
/* PHP es dinámico y débil, además de gradual. Se puede mezclar PHP y HTML.
# Los comentarios en PHP son con // o con # o con /* */
# Las instrucciones en PHP terminan con ;
# El echo se puede hacer así o <?php echo "Hola Mundo";
# o así <?= "Hola Mundo";

# Variables:
// $name = "Miguel";
// $isDev = true;
// $age = 37;

// $isOld = $age > 40;   // Descomentar si no usas el match
// La negación, y más lógico
// $isOld = !$isDev && $age > 40;


// IF
/* if ($isOld) {
    // echo "Eres mayor de 40 años";
    echo "<h2>Eres viejo, lo siento</h2>";
} else if ($isDev) {                         // else if se puede poner también junto elseif.
    echo "<h2>No eres viejo, pero eres dev</h2>";
} else {
    // echo "Eres menor de 40 años";
    echo "<h2>Eres joven, disfruta</h2>";
} */


// Tenemos CONSTANTES GLOBALES que se definen con define(). Es decir, podremos usarlas desde cualquier parte de la aplicación.
// define('LOGO_URL', 'https://cdn.freebiesupply.com/logos/large/2x/php-1-logo-svg-vector.svg');


// Y LAS LOCALES que se definen con const. Solo podremos usarlas en el archivo donde se definen, es decir, a nivel donde estemos trabajando o clases.
// const NOMBRE = 'Miguel'; // Cuando la llamamos no hace falta el símbolo del dólar $ <?= NOMBRE; ? >
// Las constantes no podemos tenerlas dentro de un bucle ni hacer que sean dinámicas. Estas son estáticas.


// Método var_dump para ver el tipo de dato y el valor del dato en el momento que tiene esa variable.
// var_dump($name);
// var_dump($isDev);
// var_dump($age);


// También tenemos el gettype() que solo devuelve el tipo de dato.
// echo gettype($name);
// echo gettype($isDev);
// echo gettype($age);


// Y otros como is_string(), is_bool(), is_int() que devuelven true o false.
// echo is_string($name);
// echo is_bool($isDev);
// echo is_int($age);

// Al ser débil, el más es para sumar números; por más que pongamos string lo va a tomar como int.
// $newAge = 39 + '1';
// Y con el punto es para concatenar.
// $newAge2 = $age . '1';

// De esta forma podemos mezclar variables y texto siempre con "" no con ''.
// $output = "Hola $name, con una edad de $age años 😁";
// Con ternarias
// $outputAge = $isOld
// ? 'Eres viejo, lo siento'
// : 'Eres joven, felicidades';

// MATCH
/* $outputAge = match ($age) {              // Para no hacer tanto, vamos a usar el match de expresiones
    0, 1, 2 => "Eres un bebé, $name 👶",
    3, 4, 5, 6, 7, 8, 9, 10 => "Eres un niño, $name 🧒",
    11, 12, 13, 14, 15, 16, 17, 18 => "Eres un adolescente, $name 🧑",
    19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 => "Eres un adulto joven, $name 🧔",
    default => "Eres un adulto, $name 👴",
} */
/* $outputAge = match (true) {
    $age < 2  => "Eres un bebé, $name 👶",
    $age < 10 => "Eres un niño, $name 🧒",
    $age < 18 => "Eres un adolescente, $name 🧑",
    $age == 18 => "Eres mayor de edad, $name 🍺",
    $age < 40 => "Eres un adulto joven, $name 🙎",
    $age < 60 => "Eres un adulto joven, $name 🙎",
    default   => "Hueles más a madera que a fruta, $name 👴",
}; */

// ARRAY
/* $bestLanguages = ['JavaScript', 'Python', 'PHP', 'C#']; // Mezclado
// Para añadir
$bestLanguages[] = 'Java';            // Añade al final
$bestLanguages[3] = 'Typescript';     // En la posición 3 pondrá Typescript en vez de C#
 */

// Submapa o algo parecido a objeto
 


// También podemos concatenar con el punto $output .=
// $output = "Hola $name";
// $output .= ", con una edad de $age años 😁";


// Para mostrar símbolos o escaparlos usamos la barra invertida \$

const API_URL = "https://whenisthenextmcufilm.com/api";
# Inicializar una nueva sesión de cURL; ch = cURL handle
$ch = curl_init(API_URL);  // Siempre que usemos cURL hay que inicializarlo con curl_init()
// Inicar que queremos recibir el resultado de la petición y no mostrarla en pantalla
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
/* Ejecutar la petición 
y guardamos el resultado
*/
$result = curl_exec($ch);
$data = json_decode($result, true); // Decodificamos el JSON que nos devuelve la API
curl_close($ch); // Cerramos la sesión de cURL

var_dump($data); // Vemos qué nos devuelve la API

?>


<!-- Pero lo mejor para un array es iterarlo; si queremos sacar el índice metemos KEY -->
<!--<ul>
    php foreach ($bestLanguages as $key => $language) : ?>
       <li> $key . "  " . $language </li> 
    php endforeach; 
</ul>

 Acceder a una posición del array
<h3>
    El mejor lenguaje es:  $bestLanguages[0]
</h3>

<h2>?= $outputAge /h2>

<img src="<?= LOGO_URL ?>" alt="PHP Logo" width="200">
<h1>
    = NOMBRE;
    <br>
    = $output 
</h1> -->

<main>
    <h2>La próxima película de Marvel</h2>
</main>

<style>
    :root {
        color-scheme: light dark;
    }

    body {
        display: grid;
        place-content: center;
    }
</style>
