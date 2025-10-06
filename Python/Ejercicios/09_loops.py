# 1. Usa un bucle while para imprimir los números del 1 al 10.
print("Ejercicio 1")
i = 0
while i < 11:
    print(i)
    i += 1

print("")

# 2. Usa un bucle for para recorrer la lista[10, 20, 30, 40, 50] e imprime cada número.
print("Ejercicio 2")
numbers = [10, 20, 30, 40, 50]
for element in numbers:
    print(element)
print("")

# 3. Escribe un programa que use un bucle while para sumar los números del 1 al 100 e imprime el resultado.
print("Ejercicio 3")
i2 = 1
sum = 0
while i2 <= 100:
    sum += 1
    i2 += 1
    print(sum)
print("")

# 4. Escribe un bucle for que imprima cada carácter de la cadena "Python".
print("Ejercicio 4")
word = "Python"
for letter in word:
    print(letter)
print("")

# 5. Usa un bucle while para encontrar el primer número divisible por 7 entre 1 y 50.
print("Ejercicio 5")
i3 = 1
while i3 <= 50:
    if i3 % 7 == 0:
        print(i3)
        break
    i3 += 1
print("")

# 6. Usa un bucle for para recorrer el diccionario {"name": "Brais", "age": 37, "country": "Galicia"} e imprime las claves.
print("Ejercicio 6")
person = {"name": "Brais", "age": 37, "country": "Galicia"}
for key in person:
    print(key)
print("")

# 7. Escribe un programa que use un bucle while para imprimir los números pares entre 1 y 20.
print("Ejercicio 7")
i4 = 1
while i4 <= 20:
    if i4 % 2 == 0:
        print(i4)
    i4 += 1
print("")

# 8. Usa un bucle for con la función range() para imprimir los números del 1 al 10 en orden inverso.
print("Ejercicio 8")
for i5 in range(10, 0, -1):
    print(i5)
print("")

# 9. Escribe un programa que use un bucle for para contar cuántas veces aparece el número 30 en la lista[30, 10, 30, 20, 30, 40].
print("Ejercicio 9")
list = [30, 10, 30, 20, 30, 40]
counter = 0
for number in list:
    if number == 30:
        counter += 1
print(counter)
print("")

# 10. Usa un bucle for para recorrer una lista de nombres y detener el bucle cuando se encuentre el nombre "Brais".
print("Ejercicio 10")
names = ["Sara", "Brais", "Pedro"]
for name in names:
    if name == "Brais":
        print("Se encontró a Brais")
        break
    print(name)
print("")