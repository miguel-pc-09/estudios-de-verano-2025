# Hola mundo. comentario con #

# Comentario en tres lineas 

"""Pulsando las teclas Shift + Alt + A
comentario de 
varias lineas 
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
print("Integer con coma: ",+ integer)
print("Float con coma: ",+ float)
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
print("append(4):", lista_numeros)
lista_numeros.insert(0, 0)
print("insert(0, 0):", lista_numeros)
lista_numeros.remove(2)
print("remove(2):", lista_numeros)
ultimo = lista_numeros.pop()
print("pop() ->", ultimo, "   lista:", lista_numeros)
print("")

print("Recorriendo lista_strings:")
for i, s in enumerate(lista_strings, start=1):
    print(i, s)
print("")

cuadrados = [n * n for n in range(1, 6)]
print("List comprehension (1..5)^2:", cuadrados)
print("")