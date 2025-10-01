# 1. Crea una tupla con los valores (10, 20, 30, 40, 50) e imprí­mela.
print("Ejercicio 1")
my_tupla = (10, 20, 30, 40, 50)
print(my_tupla)
print("")

# 2. Accede al segundo elemento de la tupla (100, 200, 300, 400, 500) y muéstralo.
print("Ejercicio 2")
my_tupla2 = (100, 200, 300, 400, 500)
print(my_tupla2[1])
print("")

# 3. Intenta modificar el primer elemento de la tupla (1, 2, 3) a 10 y observa el resultado.
print("Ejercicio 3")
my_tupla3 = (1, 2, 3)
print("TypeError: 'tuple' object does not support item assignment")
# my_tupla3[0] = 10      -> TypeError: 'tuple' object does not support item assignment
print("")

# 4. Cuenta cuántas veces aparece el número 3 en la tupla (1, 2, 3, 3, 4, 5, 3).
print("Ejercicio 4")
my_tupla4 = (1, 2, 3, 3, 4, 5, 3)
print(my_tupla4.count(3))
print("")

# 5. Encuentra el í­ndice de la primera aparición de la cadena "Python" en la tupla ("Java", "Python", "JavaScript", "Python").
print("Ejercicio 5")
my_tupla5 = ("Java", "Python", "JavaScript", "Python")
print(my_tupla5.index("Python"))
print("")

# 6. Concatena dos tuplas: (1, 2, 3) y (4, 5, 6) e imprime la tupla resultante.
print("Ejercicio 6")
my_tupla6 = (1, 2, 3)
my_tupla7 = (4, 5, 6)
my_sum_tupla = my_tupla6 + my_tupla7
print(my_sum_tupla)
print("")

# 7. Crea una subtupla con los elementos desde la posición 2 hasta la 4 (sin incluir la 4) de la tupla (10, 20, 30, 40, 50).
print("Ejercicio 7")
my_tupla8 = (10, 20, 30, 40, 50)
my_sub_tupla = my_tupla8[2:4]
print(my_sub_tupla)
print("")

# 8. Convierte la tupla ("rojo", "verde", "azul") en una lista, cambia el segundo elemento a "amarillo" y vuelve a convertirla en una tupla. Imprime la tupla resultante.
print("Ejercicio 8")
my_tupla9 = ("rojo", "verde", "azul")
print(my_tupla9)
my_list = list(my_tupla9)
my_list[1] = "amarillo"
my_modified_tuple = tuple(my_list)
print(my_modified_tuple)
print("")

# 9. Elimina una tupla llamada my_tuple usando del y luego intenta imprimirla para ver el resultado.
print("Ejercicio 9")
my_tuple10 = (1,2,3)
del my_tuple10
print("NameError: name 'my_tuple10' is not defined. Did you mean: 'my_tupla'?")
# print(my_tuple10)   NameError: name 'my_tuple10' is not defined. Did you mean: 'my_tupla'?
print("")

# 10. Crea una tupla con un solo elemento (el número 100) e imprí­mela. Asegúrate de usar la sintaxis correcta para crear una tupla con un solo elemento.
print("Ejercicio 10")
my_tupla11 = (100,)
print(my_tupla11)
print(type(my_tupla11))