<?php
/**
 * 
 *
 * ──────────────────────────────────────────────────────────────────────────────
 * 1) Estructura mínima:
 *    - Abrimos con <?php  (NO es necesario cerrar con ?> si el archivo es solo PHP)
 *    - Opcional: activar tipado estricto para evitar sorpresas.
 * 2) Comentarios:
 *    - // comentario de línea
 *    - # comentario de línea
 *    - /* comentario de bloque *\/
 * 3) Salida:
 *    - echo "texto";    // imprime
 *    - print "texto";   // similar a echo
 * 4) Variables:
 *    - Siempre empiezan por $ (ej: $nombre)
 *    - Tipos comunes: int, float, string, bool, array, object, null
 * 5) Constantes:
 *    - define('NOMBRE', valor) o const NOMBRE = valor;
 * 6) Arrays:
 *    - Indexados: [10, 20, 30]
 *    - Asociativos: ['clave' => 'valor']
 * 7) Control de flujo:
 *    - if / elseif / else, switch, while, do...while, for, foreach
 * 8) Funciones (con y sin tipos), return, parámetros opcionales y por defecto
 * 9) POO:
 *    - class, propiedades, constructor, métodos, visibilidad (public/protected/private)
 * 10) Errores/excepciones:
 *    - try/catch/finally, throw
 * 11) Superglobales:
 *    - $_GET, $_POST, $_SERVER, $_SESSION, $_COOKIE, $_FILES
 *    - Sanitizar/escapar antes de mostrar: htmlspecialchars(...)
 * ──────────────────────────────────────────────────────────────────────────────
 */

declare(strict_types=1); // Recomendada: activa comprobación estricta de tipos

// =========================
// SALIDA BÁSICA
// =========================
echo "<h1>PHP: guía rápida con comentarios</h1>";
echo "<p>Hola, mundo 👋</p>";

// =========================
// VARIABLES (tipos básicos)
// =========================
$entero   = 42;            // int
$decimal  = 3.14;          // float (double)
$texto    = "Miguel";      // string
$booleano = true;          // bool
$nulo     = null;          // null

// Interpolación de strings (solo comillas dobles):
echo "<p>Interpolación: Mi nombre es $texto y mi número favorito es $entero.</p>";

// Concatenación:
echo '<p>Concatenación: Mi nombre es ' . $texto . '.</p>';

// =========================
// CONSTANTES
// =========================
define('APP_NAME', 'MiAppPHP'); // Estilo 1
const VERSION = '1.0.0';        // Estilo 2 (válido a nivel de fichero/clase)
echo "<p>Constantes: " . APP_NAME . " v" . VERSION . "</p>";

// =========================
// ARRAYS
// =========================
// Indexado
$numeros = [10, 20, 30];

// Asociativo
$usuario = [
    'nombre' => 'Miguel',
    'edad'   => 25,
    'activo' => true,
];

// Multidimensional
$listaUsuarios = [
    ['nombre' => 'Ana', 'edad' => 22],
    ['nombre' => 'Luis', 'edad' => 30],
];

// =========================
// CONTROL DE FLUJO
// =========================
if ($usuario['edad'] >= 18) {
    echo "<p>{$usuario['nombre']} es mayor de edad.</p>";
} else {
    echo "<p>{$usuario['nombre']} es menor de edad.</p>";
}

// Ternario
$estado = $usuario['activo'] ? 'activo' : 'inactivo';
echo "<p>Estado: $estado</p>";

// Null coalescing (si $_GET['q'] no existe, usa 'sin-busqueda')
$busqueda = $_GET['q'] ?? 'sin-busqueda';
echo "<p>Búsqueda: " . htmlspecialchars($busqueda) . "</p>";

// Switch
$rol = 'admin';
switch ($rol) {
    case 'admin':
        echo "<p>Rol: Administrador</p>";
        break;
    case 'user':
        echo "<p>Rol: Usuario</p>";
        break;
    default:
        echo "<p>Rol: Invitado</p>";
}

// Bucles
echo "<ul>";
foreach ($numeros as $i => $valor) {
    echo "<li>Índice $i → $valor</li>";
}
echo "</ul>";

// =========================
// FUNCIONES (con tipos)
// =========================

/**
 * Suma dos enteros y devuelve un entero.
 */
function sumar(int $a, int $b): int {
    return $a + $b;
}

/**
 * Saluda a un usuario. El parámetro $mayus es opcional (false por defecto).
 */
function saludar(string $nombre, bool $mayus = false): string {
    $mensaje = "Hola, $nombre";
    return $mayus ? strtoupper($mensaje) : $mensaje;
}

echo "<p>sumar(2, 3) = " . sumar(2, 3) . "</p>";
echo "<p>" . saludar('Miguel') . "</p>";
echo "<p>" . saludar('Miguel', true) . "</p>";

// Función con tipos compuestos (union types) y valor de retorno nullable
function aCadena(int|float|string $valor): ?string {
    if ($valor === '') return null;
    return (string)$valor;
}
echo "<p>aCadena(3.5) = " . (aCadena(3.5) ?? 'null') . "</p>";

// =========================
// CLASES (POO básica)
// =========================
/**
 * Clase Usuario: ejemplo sencillo de POO
 */
class Usuario
{
    // Visibilidad: public / protected / private
    public string $nombre;
    private int $edad;
    protected bool $activo;

    public function __construct(string $nombre, int $edad, bool $activo = true)
    {
        $this->nombre = $nombre;
        $this->edad   = $edad;
        $this->activo = $activo;
    }

    public function getEdad(): int
    {
        return $this->edad;
    }

    public function activar(): void
    {
        $this->activo = true;
    }

    public function desactivar(): void
    {
        $this->activo = false;
    }

    public function esAdulto(): bool
    {
        return $this->edad >= 18;
    }

    // Método estático: no necesita instancia
    public static function crearInvitado(): self
    {
        return new self('Invitado', 0, false);
    }
}

// Usar la clase
$u = new Usuario('Lucía', 21);
echo "<p>{$u->nombre} tiene {$u->getEdad()} años. Adulto: " . ($u->esAdulto() ? 'sí' : 'no') . "</p>";

$inv = Usuario::crearInvitado();
echo "<p>Usuario estático: {$inv->nombre} (activo: " . ($inv->esAdulto() ? 'adulto' : 'no adulto') . ")</p>";

// =========================
// ERRORES Y EXCEPCIONES
// =========================
function dividir(float $a, float $b): float {
    if ($b == 0.0) {
        throw new InvalidArgumentException("No se puede dividir entre cero");
    }
    return $a / $b;
}

try {
    echo "<p>10 / 2 = " . dividir(10, 2) . "</p>";
    echo "<p>10 / 0 = " . dividir(10, 0) . "</p>"; // lanza excepción
} catch (InvalidArgumentException $e) {
    // Nunca muestres errores sin filtrar al usuario final en producción
    echo "<p style='color:red'>Error: " . htmlspecialchars($e->getMessage()) . "</p>";
} finally {
    // Se ejecuta siempre
    // echo "<p>Bloque finally</p>";
}

// =========================
// FORMULARIO SIMPLE (GET/POST)
// =========================
// Tip: en un archivo real, separa lógica (arriba) y vista/HTML (abajo)
// Nota: htmlspecialchars previene XSS al imprimir datos del usuario
?>
<hr>
<h2>Formulario (POST)</h2>
<form method="post">
  <label>Tu nombre: <input name="nombre" required></label>
  <button>Enviar</button>
</form>

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombrePost = $_POST['nombre'] ?? '';
    $nombreLimpio = htmlspecialchars($nombrePost);
    echo "<p>¡Hola, $nombreLimpio! (vía POST)</p>";
}
?>

<hr>
<h2>Parámetro por GET</h2>
<p>Prueba a abrir: <code>?q=php</code></p>
<p>q = <strong><?= htmlspecialchars($_GET['q'] ?? 'sin-busqueda') ?></strong></p>

<?php
// =========================
// INCLUDES (mencionalo por si lo usas)
// =========================
// require 'archivo.php';   // obligatorio; si falla, detiene el script
// include 'archivo.php';   // si falla, muestra warning y sigue

// =========================
// FIN DEL ARCHIVO
// =========================
