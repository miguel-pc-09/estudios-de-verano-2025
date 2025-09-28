# Ejercicios tema 3

# 1. Realiza las siguientes operaciones aritméticas:
print("Ejercicio 1: Operaciones aritméticas")
# Suma: 15 + 25
print("Suma 15 + 25")
print(15 + 25)
# Resta: 50 - 22
print("Resta 50 - 20")
print(50 - 20)
# Multiplicación: 8 * 7
print("Multiplicación 8 x 7")
print( 8 * 7)
# División: 100 / 20
print("División 100 / 20")
print( int(100 / 20))
print("")

# 2. Calcula el resto de la división de 37 entre 5 y almacénalo en una variable remainder. Luego imprí­melo.
print(" --------- Ejercicio 2 ----------")
remainder = 37 % 5
print(remainder)
print("")

# 3. Convierte el número 7 en una cadena de texto y concaténalo con la frase " es mi número favorito ". Imprime el resultado.
print(" ------ Ejercicio 3 ------ ")
number = 7
result = str(number) + " es mi número favorito"
print(result)
print("")

# 4. Repite la palabra "Python" 10 veces usando el operador de multiplicación para cadenas y luego imprí­mela.
print("---- Ejercicio 4 ------ ")
print("Python" * 10)
print("")

# 5. Crea dos variables: a y b con los valores 12 y 8 respectivamente. Compara si a es mayor que b y almacena el resultado en una variable booleana resultado. Imprime el valor de resultado.
print("--- Ejercicio 5 ----- ")
a = 12
b = 8
result2 = a > b
print(result2)
print("")

# 6. Compara dos cadenas de texto (“apple” y “banana”) usando los operadores > y < y explica cuál tiene mayor orden alfabético.
print(" ---- Ejercicio 6 ------ ")
print("apple" > "banana")
print("apple" < "banana")
print("")

# 7. Realiza una comparación lógica usando and para verificar si el número 10 es mayor que 5 y menor que 20. Imprime el resultado.
print(" ---- Ejercicio 7 ------ ")
print(10 > 5 and 10 < 20)
print("")

# 8. Usa el operador or para verificar si el número 7 es menor que 3 o mayor que 5. Imprime el resultado.
print("----- Ejercicio 8 ------ ")
print(7 < 3 or 7 > 5)
print("")

# 9. Aplica el operador not para invertir el resultado de la comparación 15 > 20. ¿Cuál es el resultado?
print("---- Ejercicio 9 ----- ")
print(not(15 > 20))
print("")

# 10. Combina operadores aritméticos y lógicos: Verifica si el número resultante de la expresión (5 * 3) + 2 es mayor que 10 y menor que 20. Imprime el resultado.
print("----- Ejercicio 10 ------ ")
print((5 * 3) + 2 > 10 and (5 * 3) + 2 < 20)
print("")