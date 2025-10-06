## Functions ## 

# Definición: Con las funciones intentamos resolver dos problemas:
#        1º Intentamos encapsular una lógica muy concreta, es decir una función va a intentar resolver un problema muy concreto que nosotros vamos a indicar 
#        2º Gracias a las funciones, vamos a evitar errores, porque, todo el código que va a resolver un problema muy concreto, va a estar en un único lugar, entonces
#               siempre que querramos resolver ese problema, llamaremos a esa misma función.

# Palabra reservada DEF + nombreFuncion():
def my_function():
    print("Esto es una función")

my_function()
my_function()
my_function()

# Función con parámetros de entrada/argumentos: Se va a encargar de sumar dos valores. Y estos valores quiero indicarselo. 
print("Función con parámetros de entrada/argumentos")
def sum_two_values(first_value, second_value):
    print(first_value + second_value)

sum_two_values(5, 7)
sum_two_values(54754, 71231)
sum_two_values("5", "7")        # Al ser cadena de texto lo concatena, si queremos que solo coja numeros, podriamos crear mediante type que sepa si es un int o no.
sum_two_values(1.4, 5.2)
print("")

# Función con parámetros de entrada/argumentos y retorno
print("Función con parámetros de entrada/argumentos y retorno")

def sum_two_values_with_return(first_value, second_value):
    return  first_value + second_value

my_result = sum_two_values_with_return(10, 5)
print(my_result)                               # podemos guardarlo en una variable y luego imprimir, o directamente imprimir
print(sum_two_values_with_return(10, 5))

# con mas lineas dentro de la funcion
print("Segunda forma creando mas lineas dentro de la función")
def sum_two_values_with_return(first_value, second_value):
    my_sum = first_value + second_value
    return my_sum

my_result = sum_two_values_with_return(10, 5)
print(my_result)
print("")

# 13:12

