# 1. Crea un set con los números del 1 al 5 e imprímelo.
print("--- Ejercicio 1-----")
my_set = {1, 2, 3, 4, 5}
print(my_set)
print("")

# 2. Añade el número 6 al set {1, 2, 3, 4, 5} e imprímelo.
print("--- Ejercicio 2-----")
my_set2 = {1, 2, 3, 4, 5}
my_set2.add(6)
print(my_set2)
print("")

# 3. Intenta añadir el número 5 al set {1, 2, 3, 4, 5} nuevamente. ¿Qué sucede?
print("--- Ejercicio 3-----")
my_set3 = {1, 2, 3, 4, 5}
my_set3.add(5)
print(my_set3)   # {1, 2, 3, 4, 5}
print("")

# 4. Verifica si el número 3 está en el set {1, 2, 3, 4, 5} e imprime el resultado.
print("--- Ejercicio 4-----")
print(3 in my_set3)
print("")

# 5. Elimina el número 4 del set {1, 2, 3, 4, 5} e imprime el set resultante.
print("--- Ejercicio 5-----")
my_set3.remove(4)
print(my_set3)
print("")

# 6. Usa el método clear() para vaciar un set y luego imprime su longitud.
print("--- Ejercicio 6-----")
my_set3.clear()
print(len(my_set3))
print("")

# 7. Convierte el set {"manzana", "naranja", "plátano"} en una lista e imprime el primer elemento de la lista.
print("--- Ejercicio 7-----")
my_set4 = {"manzana", "naranja", "plátano"}
my_list = list(my_set4)
print(my_list)
print(my_list[1]) # si quieres que sea manzana del primero, hacemos un print para saber donde esta manza. Si no sacara el que este primero con 0
print(my_list[0])
print("")

# 8. Realiza la unión de dos sets: {1, 2, 3} y {4, 5, 6}, e imprime el set resultante.
print("--- Ejercicio 8-----")
my_set5 = {1, 2, 3}
my_other_set = {4, 5, 6}
my_new_set = my_set5.union(my_other_set)
print(my_new_set)
print("")

# 9. Calcula la diferencia entre los sets {1, 2, 3, 4} y {3, 4, 5, 6} e imprime el resultado.
print("--- Ejercicio 9-----")
my_set6 = {1, 2, 3, 4}
my_other_set2 = {3, 4, 5, 6}
my_diference_set = my_set6.difference(my_other_set2)
print(my_diference_set)
print("")

# 10. Elimina un set llamado my_set usando del y luego intenta imprimirlo para ver el resultado.
print("--- Ejercicio 10-----")
del my_set
# print(my_set)   -> NameError: name 'my_set' is not defined. Did you mean: 'my_set2'?
print("")