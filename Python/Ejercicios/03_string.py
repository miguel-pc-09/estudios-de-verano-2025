# 1. Declara una variable text con la frase "Aprendiendo Python" y luego imprime la longitud de la cadena usando len().
print("---- Ejercicio 1 ----- ")
text = "Aperndiendo Python"
print(len(text))
print("")

# 2. Concatena dos cadenas: "Hola" y "Python", y muestra el resultado en una sola lí­nea.
print("--- Ejercicio 2 ----- ")
print("Hola" + " " + "Python")
print("")

# 3. Crea una cadena que incluya un salto de lí­nea, y luego imprí­mela para ver el resultado.
print("--- Ejercicio 3 -----")
text2 = "Esta es una linea \nEsta es otra linea"
print(text2)
print("Hola mi nombre es \nMiguel")
print("")

# 4. Usa el formateo de cadenas con f-strings para imprimir tu nombre, apellido y edad en una cadena de texto.
print("--- Ejercicio 4 -----")
name, username, age = "Miguel", "Perucha", 37
print(f"Mi nombre es {name} mi apellido {username} y tengo {age} años")
print("")

# 5. Desempaqueta los caracteres de la palabra "Python" en variables separadas y luego imprí­melos uno por uno.
print("--- Ejercicio 5 -----")
palara = "Python"
a, b, c, d, e, f = palara
print(a)
print(b)
print(c)
print(d)
print(e)
print(f)
print("")

# 6. Extrae un “slice” de la palabra “Programación” para obtener los caracteres desde la posición 3 hasta la 7.
print("--- Ejercicio 6 -----")
text3 = "Programación"
text3_slice = text3[3:8]
print(text3_slice)
print("")

# 7. Invierte la cadena “Python” usando slicing y muestra el resultado.
print("--- Ejercicio 7 -----")
text4 = "Python"
text4_reverse = text4[::-1]
print(text4_reverse)
print("")

# 8. Convierte la cadena “aprendiendo python” en mayúsculas usando el método adecuado e imprí­mela.
print("--- Ejercicio 8 -----")
text5 = "aprendiendo python"
print(text5.upper())
print("")

# 9. Cuenta cuántas veces aparece la letra “n” en la cadena “Programación en Python”.
print("--- Ejercicio 9 -----")
text6 = "Programación en Python"
print(text5.count("n"))
print("")

# 10. Verifica si la cadena “12345” es numérica usando el método adecuado e imprime el resultado.
print("--- Ejercicio 10 -----")
cadena = "12345"
print(cadena.isnumeric())