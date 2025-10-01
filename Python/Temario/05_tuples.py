####    TUPLES  ####

# Definición. Un conjunto de valores, no es lo mismo que una lista. Aqui la tupla es como el conjunto de elementos, en otros solo son 2 o 3

my_tuple = tuple()       # Estas son sus dos formas de definirlo
my_other_tuple = ()

print("Creacion primera tupla, imprimir y tipo")
my_tuple = (37, 1.90, "Miguel", "Perucha", "Miguel") 
my_other_tuple = (35, 60, 30)

print(my_tuple)                                       # (37, 1.9, 'Miguel', 'Perucha')
print(type(my_tuple))                                 # <class 'tuple'> python lo interpreta como una tupla 
print("")

# Accediendo a elementos y busqueda
print("Accediendo a elementos y busqueda")
print(my_tuple[0])                                    # 37 -> podemos llegar a elementos 
print(my_tuple[-1])                                   # Perucha
# print(my_tuple[4])                                  # IndexError
# print(my_tuple[-6])                                 # IndexError

# Operaciones que podemos hacer 
print("Operaciones que podemos hacer")
print(" --- COUNT ----- ")
print(my_tuple.count("Miguel"))                       # 1 -> pero si añadimos otro Miguel saca un dos
print(my_tuple.count("Angel"))                        # 0 -> No encontro nada por lo que retorna 0.
print(" --- INDEX ------- ")
print(my_tuple.index("Perucha"))                      # 3 -> Nos indica el indice
# Probamos con algo que tenga dos 
print(my_tuple.index("Miguel"))                       # 2 -> Nos da el primer indice que a encontrado
print("")

# my_tuple[1] = 1.80                                  # Es imutable, podemos guardar datos en ella, pero ese conjunto de valores es cerrado 
# print(my_tuple)

# No podemos modificarlas pero si sumarlas 
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

#Ahora podemos modificar los datos de dentro 
my_tuple[4] = "Ángel"                                 # Cambiamos el indice 4 de Perucha a Ángel y ademas... 
my_tuple.insert(1, "Verde")                           # en el indice 1 poner Verde
my_tuple = tuple(my_tuple)                            # La volvemos a tupla
print(my_tuple)                                       # [37, 'Verde', 1.9, 'Miguel', 'Perucha', 'Ángel']
print(type(my_tuple))                                 # <class 'tuple'>

# Esto es en el caso que tenga una estructura fija, y de repente yo quiera cambiarlo. 
# Si quiero que mi programa sea mas seguro y que nuca va a cambiar definir una tupla. Cuanto mas imutable mejor

# Eliminación 

# del my_tuple[2]                                         # TypeError: 'tuple' object doesn't support item deletion
# del my_tuple                                            # NameError: name 'my_tuple' is not defined
# print(my_tuple)                                       