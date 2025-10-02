##      SETS    ## 

# Definición: Un set de base tiene un array; en Python no existen los arrays como tal. Lo que tenemos son listas.

my_set = set()      # la creación de un set
my_other_set = {}   # Diccionario 

print(type(my_set))         # <class 'set'>
print(type(my_other_set))   # <class 'dict'> Nos dice que inicialmente es un diccionario

my_other_set = {"Miguel", "Perucha", 37}
print(type(my_other_set))   # 
print("")
# Un diccionario tiene la misma estructura my_other_set = {} inicialmente; a diferencia de las listas que puedes con [] y las tuplas (), 
# los sets no se pueden. Python es dinámico.

# Operación con set
print("-- Len ---")
print(len(my_other_set))     # 3 -> tiene 3 elementos

# print(my_other_set[0])      # TypeError: 'set' object is not subscriptable
# Inserción
print("--- Inserción ----- ")
my_other_set.add("mapcdev")
print(my_other_set)          # {'Perucha', 'Miguel', 'mapcdev', 37} Un set no es una estructura ordenada. Por eso antes no se podía acceder al elemento 0. 

# Añadimos y volvemos a imprimir 
print("Segunda inserción mismo elemento")
my_other_set.add("mapcdev")
print(my_other_set)          # Un set no admite repetidos. Y lo que guarda, lo guarda en una estructura hash. No asegura el orden.

# Búsqueda: posibilidad de buscar 
print("--- Búsqueda ---- ")
print("Miguel" in my_other_set)        # True
print("Miguil" in my_other_set)        # False 

# Eliminación 
print("--- Eliminación ----- ")
my_other_set.remove("Perucha")
print(my_other_set)

my_other_set.clear()    # Borra todos los elementos del set
print(my_other_set)
print(type(my_other_set))
print(len(my_other_set))

# También tenemos - del - palabra reservada del sistema. A diferencia del clear que solo elimina lo de dentro, pero sigue el set 
del my_other_set                                        # del se carga todo por completo 
# print(my_other_set)  # Con el del nos cargamos el objeto -> NameError: name 'my_other_set' is not defined
print("")

# Transformación en una lista
print("-- Transformación -- ")
my_set = {"Miguel", "Perucha", 37}
my_list = list(my_set)
print(my_list)
print("--- Elemento 0---- ")
print(my_list[0])


# Otras operaciones 
print(" Otras operaciones ")
my_other_set = {"Java", "C#", "Python"}
print(my_other_set)
print("Unión de sets")
my_new_set = my_set.union(my_other_set)
print(my_new_set)                        # {'C#', 37, 'Java', 'Miguel', 'Perucha', 'Python'}

# Podemos seguir uniendo 
print(my_new_set.union(my_new_set).union(my_set).union({"Javascript", "HTML"})) # {'Javascript', 'Python', 'HTML', 'Miguel', 37, 'Perucha', 'Java', 'C#'}

# Diferencia
print("--- Diferencia ---- ")
print(my_new_set.difference(my_set)) # {'C#', 'Java', 'Python'} Quitamos a 'newSet' los elementos de 'mySet', no salen "Javascript", "HTML" 
#                                                               1º porque fue una ejecución en el momento y 2º no la guardamos en variable
