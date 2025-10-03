# 1. Crea un diccionario con las claves name, age, y country, asignando valores a cada una. Imprime el diccionario.
print("Ejercicio 1")
my_dict = {"name":"Miguel", "age":37, "country": "Quer"}
print(my_dict)
print("")

# 2. Accede al valor de la clave name en el diccionario.
print("Ejercicio 2")
print(my_dict["name"])
print("")

# 3. Añade una nueva clave job con el valor "Programador" al diccionario del punto anterior. Imprime el diccionario actualizado.
print("Ejercicio 3")
my_dict["job"] = "Programador"
print(my_dict)
print("")

# 4. Modifica el valor de la clave age en el diccionario para que sea 38. Imprime el diccionario actualizado.
print("Ejercicio 4")
my_dict["age"] = 38
print(my_dict)
print("")

# 5. Elimina la clave country del diccionario e imprime el diccionario resultante.
print("Ejercicio 5")
del my_dict["country"]
print(my_dict)
print("")

# 6. Crea un diccionario donde las claves sean números del 1 al 5 y los valores sean sus cuadrados (ejemplo: 1: 1, 2: 4, ...).
print("Ejercicio 6")
my_dict_numb = {x: x**2 for x in range(1, 6)}
print(my_dict_numb)
print("")

# 7. Verifica si la clave age está presente en el diccionario {"name": "Brais", "age": 37, "country": "Galicia"}.
print("Ejercicio 7")
my_dict2 = {"name": "Brais", "age": 37, "country": "Galicia"}
print("age" in my_dict2)
print("")

# 8. Imprime solo las claves del diccionario.
print("Ejercicio 8")

print("")

# 9. Convierte las claves del diccionario en una lista e imprime la lista resultante.
print("Ejercicio 9")
print(my_dict.keys())
print("")

# 10. Crea un nuevo diccionario a partir de una lista de claves ["name", "age", "job"] usando fromkeys(), asignando a todas las claves el valor "Desconocido".
print("Ejercicio 10")
my_keys = ["name", "age", "job"]
my_new_dict = dict.fromkeys(my_keys, "Desconocido")
print(my_new_dict)