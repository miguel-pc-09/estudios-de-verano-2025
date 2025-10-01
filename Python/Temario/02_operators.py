# OPERADORES 
# Son esenciales para realizar todo tipo de cálculos y comparaciones.
# Los operadores nos permiten realizar operaciones matemáticas, comparar valores, y evaluar expresiones lógicas, entre otras cosas. 
# Con ellos, podrás desarrollar programas mucho más funcionales y dinámicos.

# Operaciones con enteros 
print("--- Operaciones con enteros ---- ")
print(3 + 4)                                       # Suma
suma = 3 + 4
print("La suma de 3 + 4 = ",suma)
print(3 - 4)                                       # Resta
resta = 3 - 4
print("La resta de 3 - 4 = ",resta)
print(3 * 3)                                       # Multiplicación
multiplicacion = 3 * 3
print("La multiplicacion de 3 x 3 =",multiplicacion)
print(5 / 6)                                       # División
division = 5 / 6
print("La división de 5 / 6 =",division)
print(10 % 3)                                      # Resto
resto = 10 % 3
print("El resto de 10 % 3 =",resto)
print(10 // 3)                                     # División con aproximación a entero
divisionAprox = 10 // 3
print("La division aproximada de 10 // 3 =",divisionAprox)
print(2 ** 3)                                      # Exponente 
exponente = 2 ** 3
print("El exponente de 2 elevado a 3 =",exponente)
print("Operacion larga 2 ** 3 + 3 - 7 / 1 // 4")
print(2 ** 3 + 3 - 7 / 1 // 4)

# Operaciones con cadenas de texto 
print("--- Operaciones con cadenas de texto ------")
print("Hola " + "Python " + "¿Qué tal?")
# entre tipos diferentes no se puede trabajar, ponemos str al 5
print("Hola " + str(5))

# Operaciones mixtas
print("---- Operaciones mixtas ------ ")
print("Multiplicar la misma palabra 'Hola'")
print("Hola " * 5)
print("Multiplicar con exponente 2 ** 3")
print("Hola " * (2 ** 3))
print("Multiplicacion con cambio de entero.")
my_float = 2.5 * 2
print("Hola " * int(my_float))
print("")

### Operadores Comparativos ###
print("--------- Operadores Comparativos --------- ")
# Operaciones con enteros
print(" -------- Operaciones con enteros ------------ ")
print("3 mayor que 4")
print(3 > 4)
print("3 menor  que 4")
print(3 < 4)
print("3 mayor o igual que 4")
print(3 >= 4)
print("4 menor o igual que 4")
print(4 <= 4)
print("3 es igual a 4")
print(3 == 4)
print("3 es distinto de 4")
print(3 != 4)
print("")

# Operaciones con cadenas de texto
print(" ------- Operaciones con cadenas de texto -----------")
print("Hola es mayor que Python")
print("Hola" > "Python")
print("Hola es menor que Python")
print("Hola" < "Python")
print("aaaa es mayor o igual a abaa")
print("aaaa" >= "abaa")                        # Ordenaciónn alfabética por ASCII, Tambien tiene en cuenta mayusculas y minusculas.
print("la longitud de aaaa es mayor o igual a abaa")
print(len("aaaa") >= len("abaa"))              # Cuenta caracteres
print("Hola es menor o igual a Python")
print("Hola" <= "Python")
print("Hola es igual a Hola")
print("Hola" == "Hola")
print("Hola es distinta de Python")
print("Hola" != "Python")
print("")

### Operadores Lógicos ###
print("--- Operadores Lógicos ----- ")
# Basada en el álgebra de Boole https://es.wikipedia.org/wiki/%C3%81lgebra_de_Boole
print("3 es mayor que 4 y Hola es mayor que Python")
print(3 > 4 and "Hola" > "Python")                         # && 
print("3 mayor que 4 o Hola mayor que Python")
print(3 > 4 or "Hola" > "Python")                          # || 
print("3 menor que 4  y Hola menor que Python")
print(3 < 4 and "Hola" < "Python")  
print("3 menor que 4 o Hola mayor que Python")                  
print(3 < 4 or "Hola" > "Python")
print("Hola es  mayor que Python y 4 mas 4 o 3 menor que 4")
print(3 < 4 or ("Hola" > "Python" and 4 == 4))
print("negando la condicion: not(3 > 4)")
print(not (3 > 4))                                         # != 