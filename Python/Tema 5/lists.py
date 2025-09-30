## LISTS ##

# Definición de como declarala. Conjunto de Datos. Elementos.  Indices 0 1 2 3...

my_list = list()
my_other_list = []

print(len(my_list))

my_list = [35, 24, 62, 52, 30, 30, 17]  # Lista de numeros, con 7 elementos, 6 indices
print(my_list)
print(len(my_list))                     # Len nos dice los elementos que tenemos 

my_other_list = [37, 1.90, "Miguel", "Perucha"]   # No hace falta que siempre guardemos el mismo tipo de dato

# Si tenemos una lista quiere decir que podemos obtener los elementos por separado. 
#obtener el tipo de dato type
print(type(my_other_list))                # class 'list' 
print(len(my_list))         # Nos dice que son de tipo lista no array

# Acceso a elementos y busqueda
# Quiero acceder a la edad de my_other_list
print("--- Primer elemento ----- ")
print(my_other_list[0])    # Como la defini yo la lista se la posición
print("--- Elemento 1 ----- ")
print(my_other_list[1])
print("--- Elemento -1 ----- ")
print(my_other_list[-1])
print("--- Elemento -4 ----- ")
print(my_other_list[-4])
# si ponemos un indice por encima del array nos daria error. IndexError: List index out of range en este -4 o 5

# Que nos cuente por ejemplo si un numero esta repetido, el 30
print("---- Cuantas veces esta el 30 ----- ")
print(my_list.count(30))

# Como esta la lista de my_other_list
#edad, altura, nombre , apellido
age, height, name, surname = my_other_list 
# age, height, name = my_other_list  -> La lista tiene 4 elementos, si no ponemos 4 falla. 
print(name)           # Como lo pusimos en el orden que estan puestos nos trae lo que esta en esa posición

# Desordenamos la lista pero añadimos las posiciones al igualar
print("Desordenando la lista ")
name, height, age, surname = my_other_list[2], my_other_list[1], my_other_list[0], my_other_list[3]
print(name)

# Concatenamos las listas 
print("Concatenamos listas")
print(my_list + my_other_list)
print("")
# Una lista es mutable
# Añadir un elemento INSERCIÓN-> append
print("-- Añadimos Ángel a la lista y la llamamos  --- ")
my_other_list.append("Ángel")
print(my_other_list)                       # [37, 1.9, 'Miguel', 'Perucha', 'Ángel']
print("")

# INSERT Tenemos que decir posicion y valor
print("-- Insertamos posicion y valor ---  ")
my_other_list.insert(1, "Azul")
print(my_other_list)                       # [37, 'Verde', 1.9, 'Miguel', 'Perucha', 'Ángel']
print("")

# Ahora queremos cambiar el valor que añadimos y como sabemos su posicion
print("Cambiando el valor que añadimos Verde")
my_other_list[1] = "Verde"      # Cambio los valores para evitar el fallo 
print(my_other_list)
print("")

# REMOVE Eliminaremos de la lista
print("---- Eliminar un valor de la lista -----  ")
my_other_list.remove("Verde")
print(my_other_list)                      # [37, 1.9, 'Miguel', 'Perucha', 'Ángel']
# Probando si elimina o no los 30 de la lista. Elimina el primer elemento encontrado
my_list.remove(30)
print(my_list)                            # [35, 24, 62, 52, 30, 17]

# Operaciones con listas 
print("--- Operaciones ----")
# pop -> Elimina el ultimo de la lista 
print("POP ")
my_list.pop()
print(my_list)                             # [35, 24, 62, 52, 30]

# Con pop tambien podemos traer el que elmina 
print("")
print("Eliminamos el ultimo y nos lo trae")
print(my_list.pop())                      # 30
print(my_list)                            # [35, 24, 62, 52] 
print("")

# Cargarnos un solo elemento ejemplo el 2
print("- del - para cargarnos un elemento")
del my_list[2]
print(my_list)                            # [35, 24, 52] se cargo el 62

# Copiamos la lista 
print("Copiando la lista ")
my_new_list = my_list.copy()
print(my_new_list)                     # El copi guarda la referencia incluso despues del clear trae ya que se guardo la copia en otra variable
print("")

# pop de un elemento el que le pasemos o el ultimo.
""" print("Pop de un elemento")
print(my_list.pop(2))
print(my_list)  """                           # [35, 24, 52] elimina el elemento de la posicion 2
# la queremos guardar..
print("Guardar el pop")
my_pop_element = my_list.pop(2)
print(my_pop_element)

# Podemos borrar la lista con clear
print("Borrado de la lista my_list")
my_list.clear()
print(my_list)                            # []
print(my_new_list)                        # El COPY que esta mas arriba.
print("")
# REVERSE da la vuelta a la lista 
print("---- REVERSE ----- ")
my_new_list.reverse()
print(my_new_list)
print("")

# SORT -> Ordena la lista, pero ademas podemos añadir criterios
print(" --- SORT ----- ")
my_new_list.sort()
print(my_new_list)                      # [24, 35, 52] La ordeno de menor a mayor. Esto por defecto sin decirle nada
print("")

# SUBLISTAS 
print("---- Sublistas--- ")
print(my_new_list[1:3])                 # [35, 52] Nos dice que entre el elemento 1 y 3 lo que se encuentra 

# tipos dinamicos, cambiamos la lista por un nombre 
print("")
print("Cambios my list y vemos si entra el string y que tipo es")
my_list = "Hola Python"
print(my_list)
print(type(my_list))

