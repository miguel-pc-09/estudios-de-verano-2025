# 1) Declara y asigna valores a las siguientes variables:
#    - name: una cadena con tu nombre.
#    - age: un número entero que represente tu edad.
#    - height: un número flotante que represente tu altura.
#   Imprime cada variable en una línea separada.
print("----- Ejercicio 1 -----")
name = "Miguel"
age = 37
height = 190.2
print(name)
print(age)
print(height)

print("")

# 2) Convierte la variable edad de entero a cadena y concatenala con un texto que diga cuántos años tienes.
print("---- Ejercicio 2 -------- ")
print("Tengo "+ str(age)+"años")
print("")

# 3) 3. Declara una variable booleana is_student que indique si eres estudiante o no. Usa True o False según corresponda e imprí­mela.
print("---- Ejercicio 3 ------ ")
is_student = True
print(is_student)
print("")

# 4) Usa la función len() para calcular cuántos caracteres tiene tu nombre completo, almacenado en una variable.
print("---- Ejercicio 4 ------- ")
name2 = "Miguel Ángel"
print(len(name2))
print("")

# 5) Declara tres variables en una sola línea que representen tu nombre, apellido y ciudad de origen. Luego, imprime estos valores.
print("---- Ejercicio 5 ------- ")
name3, surname, city = "Miguel", "Perucha", "Quer"
print(name3, surname, city)
print("")

# 6) Usa la función input() para solicitar al usuario su color favorito y almacénalo en una variable color. Luego, imprime el valor ingresado.
print("---- Ejercicio 6 ------ ")
color = input("Cual es tu color favorito: ")
print(color)
print("")

# 7) Declara una variable fruit e inicialízala con un valor. Luego, cambia el valor de la fruta a otro diferente y vuelve a imprimirla.
print("---- Ejercicio 7 ------ ")
fruit = "Manzana"
print(fruit)
fruit = 4
print(fruit)
print("")

# 8) Convierte un número decimal, almacenado en la variable price, a un número entero y luego imprímelo.
print("---- Ejercicio 8 ------ ")
price = 3.75
print(int(price))
print("")

# 9) Declara una variable llamada address_len y almacena en ella la cantidad de caracteres de una dirección usando la función len(). Imprime el resultado.
print("---- Ejercicio 9 ------- ")
address = "Avenida de madrid"
address_len = len(address)
print(address_len)
print("")

# 10) Usa un tipo de dato forzado para declarar una variable phone, asegurándote de que siempre será un número. 
# Luego, cambia su valor a un número diferente y verifica el tipo de la variable con type().
print("----- Ejercicio 10 --------- ")
phone: int = 123456
print(type(phone))
phone = 654321
print(type(phone))
print("")
