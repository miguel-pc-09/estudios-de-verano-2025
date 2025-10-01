# 1. Crea una lista con los números del 1 al 5 e imprímela.
print("Ejercicio 1")
my_list = [1,2,3,4,5]
print(my_list)
print("")

# 2. Accede e imprime el tercer elemento de la lista [10, 20, 30, 40, 50].
print("Ejercicio 2")
my_list2 = [10, 20, 30, 40, 50]
print(my_list2[2])
print("")

# 3. Agrega el número 6 al final de la lista [1, 2, 3, 4, 5] e imprí­mela.
print("Ejercicio 3")
my_list3 = [1, 2, 3, 4, 5]
my_list3.append(6)
print(my_list3)
print("")

# 4. Inserta el número 15 en la posición 2 de la lista [10, 20, 30, 40, 50].
print("Ejercicio 4")
my_list4 = [10, 20, 30, 40, 50]
my_list4.insert(2 , 15)
print(my_list4)
print("")

# 5. Elimina el primer valor 30 de la lista [10, 20, 30, 30, 40, 50].
print("Ejercicio 5")
my_list5 = [10, 20, 30, 30, 40, 50]
my_list5.remove(30)
print(my_list5)
print("")

# 6. Usa la función pop() para eliminar el último elemento de la lista [1, 2, 3, 4, 5] y almacénalo en una variable. Imprime la variable y la lista.
print("Ejercicio 6")
my_list6 = [1, 2, 3, 4, 5]
my_list_pop = my_list6.pop()
print(my_list6)
print(my_list_pop)
print("")

# 7. Invierte la lista [100, 200, 300, 400, 500] e imprí­mela.
print("Ejercicio 7")
my_list7 = [100, 200, 300, 400, 500]
print(my_list7)
my_list7.reverse()
print(my_list7)
print("")

# 8. Ordena la lista [3, 1, 4, 2, 5] en orden ascendente e imprí­mela.
print("Ejercicio 8")
my_list8 = [3, 1, 4, 2, 5]
print(my_list8)
my_list8.sort()
print(my_list8)
print("")

# 9. Concatena las listas [1, 2, 3] y [4, 5, 6] y almacena el resultado en una nueva lista. Imprime la lista resultante.
print("Ejercicio 9")
my_list9 = [1, 2, 3]
my_list10 = [4, 5, 6]
print(my_list9 + my_list10)
my_list11 = my_list9 + my_list10
print(my_list11)
print("")

# 10. Crea una sublista con los elementos de la lista [10, 20, 30, 40, 50] que van desde la posición 1 hasta la 3 (sin incluir la posición 3).
print("Ejercicio 10")
my_list12 = [10, 20, 30, 40, 50]
my_sublist = my_list12[1:3]
print(my_sublist)