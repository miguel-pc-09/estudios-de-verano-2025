# Variables: Siempre comenzamos en minúsculas, y lo más correcto en vez de escribir MyVariable sería my_variable, ni tampoco hacerlas largas my_string_variable 
""" 
Las variables son uno de los conceptos fundamentales de la programación, ya que nos permiten almacenar y manipular datos.
Una variable no es más que un nombre que asocia un valor específico, y en Python, su uso es muy flexible, lo que facilita su aprendizaje.
"""
# La palabra if es una palabra reservada 
print("------ Variables ------------")

my_variable = "My String variable"   # podemos usar también comillas simples '' 
print(my_variable)
print("")

print("----- De número entero ------ ")
my_int_variable = 7
print(my_int_variable)
print("")

print("----- Bool ------ ")
my_bool_variable = True     # o False
print(my_bool_variable)
print("")

# Print puede llevar diferentes argumentos y se los pasamos por comas, CONCATENACIÓN 
print("---- Diferentes argumentos ----- ")
print(my_variable, my_int_variable, my_bool_variable) # El print es capaz de imprimir cualquier cosa como el bool
print("")

# Función str
print("--- Función str ------ ")
my_int_to_str_variable = str(my_int_variable)
print(my_int_to_str_variable)
print(type(my_int_to_str_variable))   # Nos dice que la variable int 7 es un string 
print("")

# Un type del print
print(" ------ Un type del print ------- ")
print(type(print(my_variable, my_int_variable, my_bool_variable))) # Tipo 'NoneType' es una función del sistema por eso sale esto 
print("")

# Len -> longitud de una secuencia o colección. 
print("--- LEN ---- ")
print("len de my_int_to_str_variable")
print(len(my_int_to_str_variable))        # 1 porque el resultado es un 7, un solo número
print("len de my_variable")
print(len(my_variable))                   # 18 cuenta la cadena de caracteres incluye los espacios
print("")

# Variables en una sola línea
print("--- Variables en una sola línea ----- ") 
name, surname, alias, age = "Miguel", "Perucha", "MPC", 37
print("Me llamo:",name, surname, ". Mi edad es:",age, ". Y mi alias es:", alias)      # a la hora de imprimir podemos cambiar el orden 
print("")

# Utilización de un input -> para poder escribir en la terminal
print("--- Uso del input ------ ")
first_name = input('Cuál es tu nombre: ')
age2 = input('Cuál es tu edad: ')
print(first_name)
print(age2)
print("Hola ",first_name, 'tienes',age2, "años.")
print("Vamos a cambiar su tipo después de escribir ")
first_name = 37
age2 = "Miguel"
print("Qué dice first_name: ", first_name)
print("Qué dice ahora age2: ",age2)          # como se puede observar podemos modificar 



# ============================================================
# RESUMEN DE FUNCIONES INCORPORADAS (BUILT-IN) DE PYTHON
# Consejo: evita usar estos nombres como variables (p. ej., no hagas `list = ...`)
# ============================================================

# abs(x): valor absoluto.
# all(iterable): True si todos los elementos son verdaderos (o el iterable está vacío).
# any(iterable): True si al menos un elemento es verdadero.
# ascii(obj): representación ASCII de un objeto (caracteres no ASCII escapados).
# bin(x): representación binaria como cadena ('0b...').
# bool(x): convierte a booleano (reglas de truthiness).
# breakpoint(): entra al depurador interactivo (pdb).
# bytearray([src[, encoding[, errors]]]): arreglo mutable de bytes.
# bytes([src[, encoding[, errors]]]): secuencia inmutable de bytes.
# callable(obj): True si el objeto es invocable (tiene __call__).
# chr(i): carácter Unicode del punto de código i.
# classmethod(func): convierte una función en método de clase.
# compile(source, filename, mode): compila código a un objeto code.
# complex([real[, imag]]): crea un número complejo.
# delattr(obj, name): elimina un atributo de un objeto.
# dict(**kwargs | mapping | iterable): crea un diccionario.
# dir([obj]): lista nombres de atributos del objeto (o del ámbito actual).
# divmod(a, b): tupla (cociente, resto) de a // b y a % b.
# enumerate(iterable, start=0): pares (índice, valor) al iterar.
# eval(expr[, globals[, locals]]): evalúa una expresión (¡ojo con seguridad!).
# exec(source[, globals[, locals]]): ejecuta código Python arbitrario.
# filter(func, iterable): filtra elementos para los que func(elem) es True.
# float(x): convierte a número de coma flotante.
# format(value[, format_spec]): formatea según especificador (f-strings usan esto).
# frozenset([iterable]): conjunto inmutable y hashable.
# getattr(obj, name[, default]): obtiene un atributo por nombre.
# globals(): diccionario de variables globales del módulo actual.
# hasattr(obj, name): True si el objeto tiene ese atributo.
# hash(obj): entero hash del objeto (si es hashable).
# help([obj]): ayuda interactiva (usa pydoc).
# hex(x): representación hexadecimal como cadena ('0x...').
# id(obj): identificador “único” del objeto durante su vida (normalmente dirección).
# input([prompt]): lee una línea de la entrada estándar como str.
# int(x=0, base=10): convierte a entero (permite base).
# isinstance(obj, classinfo): True si obj es instancia de classinfo.
# issubclass(cls, classinfo): True si cls es subclase de classinfo.
# iter(obj[, sentinel]): iterador de obj; modo con sentinel para funciones.
# len(s): longitud de una secuencia o colección.
# list([iterable]): crea una lista (mutable).
# locals(): diccionario de variables locales del marco actual.
# map(func, *iterables): aplica func a los elementos y devuelve un iterador.
# max(iterable[, key][, default]) | max(a, b, ...): máximo.
# memoryview(obj): vista de memoria de un objeto tipo bytes/bytearray.
# min(...): análogo a max, pero mínimo.
# next(iterator[, default]): siguiente elemento del iterador.
# object(): base mínima de todas las clases.
# oct(x): representación octal como cadena ('0o...').
# open(file, mode='r', encoding=None, ...): abre un archivo.
# ord(c): punto de código Unicode del carácter c.
# pow(x, y[, mod]): potencia x**y; con mod hace potencia modular eficiente.
# print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False): imprime.
# property(fget=None, fset=None, fdel=None, doc=None): descriptor tipo propiedad.
# range(stop) | range(start, stop[, step]): rango de enteros iterables.
# repr(obj): representación oficial (para depuración).
# reversed(seq): iterador que recorre una secuencia al revés.
# round(number[, ndigits]): redondeo al número de decimales indicado.
# set([iterable]): conjunto mutable (sin duplicados).
# setattr(obj, name, value): asigna un atributo por nombre.
# slice(stop) | slice(start, stop[, step]): objeto slice para cortes de secuencias.
# sorted(iterable, *, key=None, reverse=False): nueva lista ordenada.
# staticmethod(func): convierte una función en método estático.
# str(obj): convierte a cadena de texto.
# sum(iterable, start=0): suma elementos numéricos (mejor no usar con listas/str).
# super([type[, obj]]): acceso a métodos de la superclase.
# tuple([iterable]): tupla inmutable.
# type(obj) -> type | type(name, bases, dict): obtiene el tipo o crea una clase.
# vars([obj]): __dict__ de obj; sin argumentos, equivale a locals().
# zip(*iterables, strict=False): empareja elementos por índice (hasta el más corto).
# __import__(name, ...): función interna para importaciones de bajo nivel.

# ------------------------------------------------------------
# CONSTANTES ÚTILES
# True / False: booleanos.
# None: ausencia de valor.
# NotImplemented: indica que una operación no está implementada para ese tipo.
# Ellipsis (...): usado en slicing avanzado y como marcador.
# ------------------------------------------------------------

