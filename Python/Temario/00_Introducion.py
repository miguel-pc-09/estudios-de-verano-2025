# Hola mundo. Comentario con #

# Comentario en tres líneas 

"""Pulsando las teclas Shift + Alt + A
comentario de 
varias líneas 
"""
# Mensaje por consola 
print("--------- String con " " -------- ")
print("Hola mundo")
print("")

# String. Podemos usar o doble " " o ' '
print("------- String con '' ---------- ")
print('Hola mundo')
print("")

# Number -> Integer
print("------ Number ---------")
integer = -3
float = 1.2
# Si no separamos por comas 
print(f"f-string: {integer}")
# Convirtiendo a string 
print("Convirtiendo a string: "+str(float))
# format
print(".format: {}".format(integer))
print("Integer con coma: ", integer)
print("Float con coma: ", float)
print("")

# Boolean
print("---- Boolean --------")
verdadero = True
falso = False
print("Boolean True:",verdadero)
print("Boolean False:",falso)

print("Comparaciones: ")
print(" 10 > 5: ", 10 > 5)
print('"a" == "b": ', "a" == "b")
print("")

# Listas -> List
print("----- Listas ------")
lista_numeros = [1,2,3]
lista_strings = ["Curso", "de", "Python"]
lista_mixta = ["Texto", 42, 3.14, True]
lista_anidada = [[1,2], ["a", "b"]]

print("Lista números:", lista_numeros)
print("Lista strings:", lista_strings)
print("Lista mixta:", lista_mixta)
print("Lista anidada:", lista_anidada)
print("")

print("Acceso por índice / rebanadas:")
print("Primero (lista_numeros[0]):", lista_numeros[0])
print("Último (lista_numeros[-1]):", lista_numeros[-1])
print("Slice (lista_numeros[1:]):", lista_numeros[1:])
print("Longitud con len():", len(lista_numeros))
print("¿Está el 2 en lista_numeros?:", 2 in lista_numeros)
print("")

print("Mutando la lista:")
lista_numeros.append(4)
print("append(4)(Añade un elemento al final):", lista_numeros)
lista_numeros.insert(0, 0)
print("insert(0, 0)(Inserta en la posición 0 el 0):", lista_numeros)
lista_numeros.remove(2)
print("remove(2)(Quita la primera aparición del número seleccionado en este el 2):", lista_numeros)
ultimo = lista_numeros.pop()
print("pop() ->", ultimo, "   lista:", lista_numeros)

# Asignación por slice: lista[1:3] = [20, 30] (reemplaza esa porción).
print("")

print("Recorriendo lista_strings:")
for i, s in enumerate(lista_strings, start=1):
    print(i, s)
print("")

print("Variantes de enumerate / formateo:")
# 1) Índice real (0-based) pero mostrado 1-based con f-string
for i, s in enumerate(lista_strings):     # i: 0,1,2...
    print(f"{i+1}. {s}")                  # muestro 1,2,3...

print("")

# 2) Contador humano directamente con start=1
for pos, s in enumerate(lista_strings, start=1):  # pos: 1,2,3...
    print(pos, s)

print("")

# 3) Todo en una sola línea con join + f-strings
print("\n".join(f"{i+1}. {s}" for i, s in enumerate(lista_strings)))
print("")

cuadrados = [n * n for n in range(1, 6)]
print("List comprehension (1..5)^2:", cuadrados)
print("")

# type: es una operación del sistema que ya nos permite inferir cuál es el tipo de dato que tenemos.
# Ejemplo 
print("--- Ejemplo de type ----")
print("Hola Python")
print(type("Hola Python")) # Nos devuelve que es una clase de str -> String
print("")
print("Entero")
print(type(10))                    # Integer
print("")
print("Float")
print(type(3.14))                  # Float
print("")
print("Número complejo")
print(type(1 + 3j))                # Complex Number
print("")
print("Lista")
print(type([1,2,3]))               # List
print("")
print("Diccionario")
print(type({'name': 'Asabeneh'}))  # Dictionary
print("")
print("Set")
print(type({9.8, 3.14, 2.7}))      # Set
print("")
print("Tuple")
print(type((9.8, 3.14, 2.7)))      # Tuple
print("")