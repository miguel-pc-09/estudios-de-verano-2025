# 1. Escribe un programa que verifique si un número es positivo, negativo o cero.
print("-- Ejercicio  1------")
number = int(input("Introduce un número: "))
if number > 0:
    print("El número es positivo")
elif number < 0:
    print("El número es negativo")
else:
    print("El numero es cero")
print("")

# 2. Solicita al usuario que ingrese su edad y muestra un mensaje indicando si es mayor de edad(18 añs o más) o menor de edad.
print("-- Ejercicio 2 ------")
age = int(input("Introduce tu edad: "))
if age >= 18:
    print("Eres mayor de edad")
else:
    print("Eres menor de edad")
print("")

# 3. Escribe un programa que verifique si una cadena de texto está vací­a y muestre un mensaje en consecuencia.
print("-- Ejercicio 3 ------")
text = input("Introduce una cadena: ")
if not text:
    print("La cadena está vacía ")
else:
    print("La cadena no está vacía")
print("")

# 4. Crea un programa que solicite dos números al usuario y compare cuál es mayor. 
# Si son iguales, muestra un mensaje indicando la igualdad.
print("-- Ejercicio 4 ------")
number1 = int(input("Introduce el primer número: "))
number2 = int(input("Introduce el segundo número: "))
if number1 > number2:
    print(f"{number1} es mayor que {number2}")
else:
    print(f"{number1} es menor que {number2}")
print()

# 5. Escribe un programa que verifique si un número es divisible por 3 y por 5 al mismo tiempo.
print("-- Ejercicio 5 ------")
number3 = int(input("Introduce un numero: "))
if number3 % 3 == 0 and number3 % 5 == 0:
    print(f"{number3} es divisible por 3 y por 5")
else:
    print(f"{number3} no es divisible por 3 y 5 al mismo tiempo.")
print("")

# 6. Solicita al usuario que ingrese un número y verifica si es par o impar.
print("-- Ejercicio 6 ------")
number4 = int(input("Introduce un número: "))
if number4 % 2 == 0:
    print(f"{number4} es par.")
else: 
    print(f"{number4} es impar.")
print("")

# 7. Escribe un programa que determine si una persona puede votar en función de su edad(mayor o igual a 18). 
# Si tiene 16 o 17 años, indica que puede votar con permiso especial.
print("-- Ejercicio 7 ------")
age2 = int(input("Introduce tu edad: "))
if age2 >= 18:
    print("Puedes votar")
elif 16 <= age < 18:
    print("Puedes votar con permiso especial")
else:
    print("No puedes votar.")
print("")

# 8. Crea un programa que solicite una contraseña al usuario y verifique si coincide con una contraseña predefinida.
# Si no coincide, muestra un mensaje de error.
print("-- Ejercicio 8 ------")
password = "python123"
user_password = input("Introduce la contraseña: ")
if user_password == password:
    print("Acceso permitido.")
else: 
    print("Contraseña incorrecta.")
print("")

# 9. Escribe un programa que determine si un número está entre 10 y 20 (ambos incluidos).
print("-- Ejercicio 9 ------")
number5 = int(input("Introduce un número: "))
if 10 <= number5 <= 20:
    print(f"{number5} está entre 10 y 20.")
else:
    print(f"{number5} No está entre 10 y 20.")
print("")

# 10. Escribe un programa que simule un semáforo: solicita al usuario que ingrese un color(rojo, amarillo, verde) 
# y muestra un mensaje indicando si debe detenerse, estar alerta o avanzar.
print("-- Ejercicio 10 ------")
color = input("Introduce un color (rojo , amarillo, verde): ").lower()
if color == "rojo":
    print("Detente")
elif color == "amarillo":
    print("Precaución")
elif color == "verde":
    print("Avanza")
else:
    print("Color no válido")
print("")