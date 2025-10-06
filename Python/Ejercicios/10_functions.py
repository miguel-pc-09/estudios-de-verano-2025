# 1. Crea una función llamada "personalized_greeting" que reciba un nombre como argumento e imprima "Hola, <nombre>". Si no se proporciona ningún nombre, debe saludar diciendo "Hola, desconocido".
print("------ Ejercicio 1 ----------")
def personalized_greeting(name = "desconocido"):
    print(f"Hola, {name}")
personalized_greeting("Miguel")
personalized_greeting()
print("")

# 2. Escribe una función llamada "multiply" que reciba dos números como argumentos y retorne el resultado de multiplicarlos.
print("------ Ejercicio 2 -----------")
def multiply(num1, num2):
    return num1 * num2
result = multiply(2, 2)
print(result)

print(".......Otra forma........")
def multiply2(n1, n2):
    my_multi = n1 * n2
    return my_multi
my_result2 = multiply2(3, 3)
print(my_result2)
print("")

# 3. Crea una función llamada "is_even" que reciba un número entero como argumento y retorne True si es par y False si es impar.
print("------ Ejercicio 3 --------")
def is_even(number):
    if number % 2 == 0:
        return f"{number} True"
    else:
        return f"{number} False"
print(is_even(5))
print("")

# 4. Escribe una función llamada "convert_to_uppercase" que reciba una cadena de texto y la retorne en mayúsculas.
print("--------- Ejercicio 4----------")
def convert_to_uppercase(*texts):
    for text in texts:
        print(text.upper())
convert_to_uppercase("Miguel", "Angel", "Python")

print("...... Otra forma........")
text2 = input("Ingrese un texto: ")
def convert_to_uppercase2(text2):
    return text2.upper()
print(convert_to_uppercase2(text2))
print("")

# 5. Crea una función llamada "arbitrary_sum" que reciba un número arbitrario de números como argumentos y retorne la suma de todos ellos.
print("-------- Ejercicio 5 -------- ")
def arbitrary_sum(*nar):
    for i in nar:
        return sum(nar)
print(arbitrary_sum(32, 2, 41, 5))
print("")

# 6. Escribe una función llamada "generate_full_greeting" que reciba dos argumentos: nombre y apellido, y retorne el saludo completo "Hola, <nombre> <apellido>". Los argumentos deben ser pasados por clave.
print("Ejercicio 6")
def generate_full_greeting(name, surname):
    print(f"Hola, {name} {surname} ")
generate_full_greeting("Miguel", "Perucha")
generate_full_greeting(name = "Miguel", surname = "Perucha")
print("")

# 7. Crea una función llamada "power" que reciba dos números: base y exponente, y retorne el resultado de elevar la base al exponente.
print("Ejercicio 7")
def power(bas, exp):
    return bas ** exp
print(power(2,2))
print("")

# 8. Escribe una función llamada "calculate_average" que reciba tres números y retorne su promedio.
print("Ejercicio 8")
def calculate_average(number1, number2, number3):
    return (number1 + number2 + number3) / 3
print(calculate_average(2, 6, 10))
print("")

# 9. Crea una función llamada "count_characters" que reciba una cadena de texto y retorne el número de caracteres que contiene.
print("Ejercicio 9")
def count_characters(texto4):
    return(len(texto4))
print(count_characters("miguel"))
print("")

# 10. Escribe una función llamada "display_messages" que reciba un número indefinido de cadenas y las imprima en mayúsculas, una por una, tal como se hizo en el archivo proporcionado.
print("Ejercicio 10")
def display_messages(*messages):
    for message in messages:
        print(message.upper())
display_messages("miguel","Angel")
print("")
