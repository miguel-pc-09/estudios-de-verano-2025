### Dictionaries ###

# Definicion -> Es un tipo de estructura en el que podemos almacenar datos de tipo clave/valor
my_dict = dict()
my_other_dict = {}

print(type(my_dict))
print(type(my_other_dict))

# Para diferenciar de un set, relacion clave :  valor.
my_other_dict = {"Nombre": "Miguel", "Apellido":"Perucha", "Edad": 37, 1:"Python"} # Mezclamos las claves string tres primeras y la ultima un int

my_dict = {
    "Nombre": "Miguel", 
    "Apellido":"Perucha", 
    "Edad": 37, 
    "Lenguajes":{"Python", "Java", "C#"},         # Clave un string -> Valor un set
    1 : 1.90
}

print(my_other_dict)
print(my_dict)
print("---- Len ----- ")
print(len(my_other_dict))
print(len(my_dict))
print("")

# Búsqueda 
print("--- Búsqueda ----- ")
print(my_dict["Nombre"])

# Actualización 
print("Cambio de nombre ")
my_dict["Nombre"] = "Pedro"
print(my_dict["Nombre"])
print("otra busqueda de entero")
print(my_dict[1])
print("")

# Inserción 
print("Agregando Calle y Valor--------- ")
my_dict["Calle"] = "Calle mapc"
print(my_dict)

# Eliminación 
del my_dict["Calle"]        # Con el y pasando una clave borrara solo la clave 
print(my_dict)


# Otras operaciones
print("Buscando con in Miguel que es un valor")
print("Miguel" in my_dict)       # No funciona porque estamos buscando por valor y no la clave
print("Apellido que es una clave ")
print("Apellido" in my_dict)
print("")
print("mas cosas con el punto")
print("----- items ------")
print(my_dict.items())
print("------- keys ---------")
print(my_dict.keys())
print("------ values ----------")
print(my_dict.values())
print("----- fromkeys ------ ")              # print(my_dict.fromkeys("Nombre", 1)) -> {'N': 1, 'o': 1, 'm': 1, 'b': 1, 'r': 1, 'e': 1}
# print(my_dict.fromkeys(("Nombre", 1)))   

my_list =["Nombre", 1, "Piso"]

my_new_dict = my_other_dict.fromkeys(my_list) # Realmente lo que hacemos es crear un diccionario
print(my_new_dict)
my_new_dict = my_other_dict.fromkeys(("Nombre", 1, "Piso"))
print((my_new_dict))
my_new_dict = my_other_dict.fromkeys(my_dict, "Mapcdev")
print(my_new_dict)
print("")
print("List")
print(list(my_new_dict))
print("tuple")
print(tuple(my_new_dict))
print("set")
print(set(my_new_dict))