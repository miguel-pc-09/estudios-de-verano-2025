####    TUPLES  ####

# Definición: Un conjunto de valores; no es lo mismo que una lista. Aquí la tupla es como el conjunto de elementos; en otros casos solo son 2 o 3.

my_tuple = tuple()       # Estas son sus dos formas de definirlo
my_other_tuple = ()

print("Creación primera tupla, imprimir y tipo")
my_tuple = (37, 1.90, "Miguel", "Perucha", "Miguel") 
my_other_tuple = (35, 60, 30)

print(my_tuple)                                       # (37, 1.9, 'Miguel', 'Perucha')
print(type(my_tuple))                                 # <class 'tuple'> Python lo interpreta como una tupla 
print("")

# Accediendo a elementos y búsqueda
print("Accediendo a elementos y búsqueda")
print(my_tuple[0])                                    # 37 -> podemos acceder a elementos 
print(my_tuple[-1])                                   # Perucha
# print(my_tuple[4])                                  # IndexError
# print(my_tuple[-6])                                 # IndexError

# Operaciones que podemos hacer 
print("Operaciones que podemos hacer")
print(" --- COUNT ----- ")
print(my_tuple.count("Miguel"))                       # 1 -> pero si añadimos otro Miguel saca un dos
print(my_tuple.count("Ángel"))                        # 0 -> No encontró nada, por lo que retorna 0.
print(" --- INDEX ------- ")
print(my_tuple.index("Perucha"))                      # 3 -> Nos indica el índice
# Probamos con algo que tenga dos 
print(my_tuple.index("Miguel"))                       # 2 -> Nos da el primer índice que ha encontrado
print("")

# my_tuple[1] = 1.80                                  # Es inmutable, podemos guardar datos en ella, pero ese conjunto de valores es cerrado 
# print(my_tuple)

# No podemos modificarlas, pero sí sumarlas 
print("Sumamos tuplas ")
print("Primera forma")
# Se puede hacer de esta manera o de la siguiente 
print(my_tuple + my_other_tuple)                      # (37, 1.9, 'Miguel', 'Perucha', 'Miguel', 35, 60, 30)
# Otra forma de sumarlas 
print("Segunda forma")
my_sum_tuple = my_tuple + my_other_tuple
print(my_sum_tuple)
print("")

# Subtuplas
print("--- Subtuplas ----- ")
print(my_sum_tuple[3:6])
print("")

# Tupla mutable con conversión a lista 
print("Tupla mutable con conversión a lista ")
my_tuple = list(my_tuple)
print(type(my_tuple))                                 # <class 'list'>
print("")

# Ahora podemos modificar los datos de dentro 
my_tuple[4] = "Ángel"                                 # Cambiamos el índice 4 de Perucha a Ángel y además... 
my_tuple.insert(1, "Verde")                           # en el índice 1 poner Verde
my_tuple = tuple(my_tuple)                            # La volvemos a tupla
print(my_tuple)                                       # [37, 'Verde', 1.9, 'Miguel', 'Perucha', 'Ángel']
print(type(my_tuple))                                 # <class 'tuple'>

# Esto es en el caso de que tenga una estructura fija y, de repente, yo quiera cambiarlo. 
# Si quiero que mi programa sea más seguro y que nunca va a cambiar, definir una tupla. Cuanto más inmutable, mejor.

# Eliminación 

# del my_tuple[2]                                         # TypeError: 'tuple' object doesn't support item deletion
# del my_tuple                                            # NameError: name 'my_tuple' is not defined
# print(my_tuple)
