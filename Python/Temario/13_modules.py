## Módulos ##

# Tenemos código en algún lugar externo a nuestro fichero o a nuestro proyecto y queremos utilizarlo,
# como si fuese una librería.

# Accedemos con la palabra clave import. Creamos un fichero module para practicar.
import my_module
# from 10_functions import sum_two_values  → la forma en la que se llama el fichero no vale en Python
# porque no puede empezar por un número. Probamos a cambiar module por my_module.
print("Con import my_module")
my_module.sum(5, 3, 1)
my_module.printValue("Hola Python")

print("")

# También, si definimos el módulo, podemos importar algo en concreto, por ejemplo:
from my_module import sum, printValue        # con comas podemos traer lo que necesitemos
print("Con from my_module import sum")
sum(5, 3, 1)
printValue("Hola Python")

print("")

# El sistema también tiene módulos.
print("Módulo math para traer a pi")
import math
print(math.pi)
print("Una potencia de 2, 8")
print(math.pow(2, 8))

print("")

# Llamando a pi con alias
print("Cogiendo solo pi de math")
from math import pi as PI_VaLUE
print(PI_VaLUE)
