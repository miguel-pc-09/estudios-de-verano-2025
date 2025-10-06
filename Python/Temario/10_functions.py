## Functions ## 

# Definición: Con las funciones intentamos resolver dos problemas:
#        1º Intentamos encapsular una lógica muy concreta; es decir, una función va a intentar resolver
#           un problema muy concreto que nosotros vamos a indicar.
#        2º Gracias a las funciones, vamos a evitar errores, porque todo el código que va a resolver
#           un problema muy concreto va a estar en un único lugar; entonces, siempre que queramos
#           resolver ese problema, llamaremos a esa misma función.

# Palabra reservada DEF + nombreFuncion():
def my_function():
    print("Esto es una función")

my_function()
my_function()
my_function()

# Función con parámetros de entrada/argumentos: Se va a encargar de sumar dos valores.
# Y estos valores quiero indicárselos.
print("Función con parámetros de entrada/argumentos")
def sum_two_values(first_value, second_value):
    print(first_value + second_value)

sum_two_values(5, 7)
sum_two_values(54754, 71231)
sum_two_values("5", "7")        # Al ser cadena de texto, lo concatena; si queremos que solo coja números,
                                # podríamos crear, mediante type, que sepa si es un int o no.
sum_two_values(1.4, 5.2)
print("")

# Función con parámetros de entrada/argumentos y retorno
print("Función con parámetros de entrada/argumentos y retorno")

def sum_two_values_with_return(first_value, second_value):
    return  first_value + second_value

my_result = sum_two_values_with_return(10, 5)
print(my_result)                               # Podemos guardarlo en una variable y luego imprimir, o directamente imprimir.
print(sum_two_values_with_return(10, 5))

# Con más líneas dentro de la función
print("Segunda forma creando más líneas dentro de la función")
def sum_two_values_with_return(first_value, second_value):
    my_sum = first_value + second_value
    return my_sum

my_result = sum_two_values_with_return(10, 5)
print(my_result)
print("")

# Función con parámetros de entrada/argumentos por clave
print("Función con parámetros de entrada/argumentos por clave")

def print_name(name, surname):
    print(f"{name} {surname}")     # Lo que hace será interpolar y meter como texto.

# print("Perucha", "Miguel")
print_name(surname = "Perucha", name = "Miguel")    # Cómo decirle que el nombre es nombre y cuál el apellido para que los ponga correctos.
print("")

# Función con parámetros de entrada/argumentos por defecto
print("Función con parámetros de entrada/argumentos por defecto")

def print_name_with_default(name, surname, alias="Sin alias"):     # Alias con un valor por defecto, por si no nos dan ese dato.
    print(f"{name} {surname} {alias}") 

print_name_with_default("Miguel", "Perucha")
print_name_with_default("Miguel", "Perucha", "Mapcdev")        # Si ponemos esto, imprime lo de dentro.
print("")

# Función con parámetros de entrada/argumentos arbitrarios
print("Función con parámetros de entrada/argumentos arbitrarios")

def print_texts(*texts):   # Así de simple, solo imprime un parámetro; si le ponemos delante * imprimirá todo lo que le pongamos.
    for text in texts:
        print(text)

print_texts("Hola", "Python", "Miguel")
print_texts("Miguel")
print("")

print("Haciendo que sean mayúsculas ")
def print_upper_texts(*texts):   
    print(type(texts))              # También podemos añadir que nos diga el tipo.
    for text in texts:
        print(text.upper())         # Añadimos upper a lo que nos tiene que mandar.

print_upper_texts("Hola", "Python", "Miguel")
print_upper_texts("Miguel")


