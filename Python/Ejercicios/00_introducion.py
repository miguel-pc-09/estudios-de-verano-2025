# 1 Imprime "¡Hola Mundo!" por consola.
print("¡Hola Mundo!")
print("")

# 2 Escribe un comentario de una sola línea explicando qué hace el código del Ejercicio 1.
# Imprime por consola el mensaje que tiene entre comillas

# 3 Imprime tu nombre y edad en la misma línea utilizando la función print

print("Mi nombre es Miguel y tengo ",37, "años")
print("")

# 4 Usa la función type() para imprimir el tipo de dato de una cadena de texto, un número entero y un número decimal.
print(type("Esto es el ejercicio..."))
print(type(4))
print(type(3.14))
print("")

# 5 Escribe un comentario en varias líneas explicando qué son los tipos de datos en Python.
"""
Un tipo de dato describe la naturaleza de un valor y qué operaciones
se pueden realizar con él (sumar, indexar, comparar, etc.). 

Python es de tipado dinámico: el tipo se determina en tiempo de
ejecución por el valor, no por el nombre de la variable.

Principales tipos incorporados:
- Numéricos: int (enteros), float (decimales), complex (complejos).
- Texto: str (cadenas de caracteres).
- Booleano: bool (True / False).
- Secuencias: list (mutable), tuple (inmutable), range.
- Conjuntos: set (mutable), frozenset (inmutable).
- Mapeos: dict (pares clave–valor).
- Especial: NoneType (el valor None, ausencia de valor).

Mutabilidad:
- Inmutables: int, float, bool, str, tuple, frozenset.
- Mutables: list, dict, set.

Utilidades:
- type(x) indica el tipo de x.
- isinstance(x, T) comprueba si x es de tipo T.
- Conversión (casting): int(), float(), str(), list(), dict(), set(), etc.
"""

# 6 Imprime el resultado de concatenar dos cadenas de texto, por ejemplo: "Hola" y "Mundo".

print("Hola"+ "" + "Mundo")
print("")

# 7 Crea una variable para almacenar tu nombre, otra para tu edad, e imprime ambas en la misma línea.
nombre = "Miguel"
edad = 37
print("Mi nombre es ",nombre," y tengo ",edad, "años")
print("")

# 8 Escribe un programa que solicite al usuario su nombre y lo imprima junto con un saludo.
user_name = input("Cual es tu nombre: ")
print("Hola", user_name +"!")
print("")

# 9 Usa print() para mostrar el resultado de la suma de dos números enteros y el tipo de dato resultante.
resultado = 5 + 3
print("El resultado es: ", resultado)
print("El tipo de resultado es un: ",type(resultado))
print("")

# 10 Comenta el código del Ejercicio 9, y explica qué hace cada línea usando comentarios de una sola línea.
# suma dos numeros enteros 
# imprime el resultado de la suma 
# imprime el tipo de dato del resultado, que es un int.