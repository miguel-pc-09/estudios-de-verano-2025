### Loops (Bucle) ###

# While, se ejecutará mientras cumpla la condición. Se puede usar else
print("--- WHILE -------")
my_condition = 0
while my_condition < 10:
    print(my_condition)
    my_condition += 2
else:    # Es opcional
    print("Mi condición es mayor o igual que 10")

print("La ejecución continúa")
print("")

while my_condition < 20:
    my_condition += 1                 # Para que se cumpla, le metemos un 1
    if my_condition == 15:
        print("Mi condición es 15")   # Cuando llega a 15 imprime el mensaje, pero luego sigue el while. 
        break                         # Si añadimos break, termina la ejecución cuando llega a 15

    print(my_condition)

print("La ejecución continúa otra vez")
print("")

# FOR, nos sirve para iterar un listado de elementos
print("---- FOR ---- ")
print("----- Con lista -------")
my_list = [35, 24, 62, 52, 30, 30, 17]

for element in my_list:
    print(element)

print("")
print("------ Con tuplas -------- ")
my_tuple = (37, 1.90, "Miguel", "Perucha", "Miguel")
for element in my_tuple:
    print(element)

print("")
print("--- Con sets ----- ")
my_set = {"Miguel", "Perucha", 37}
for element in my_set:
    print(element)


print("")
print("--- Con diccionario ----- ")
my_dict = {"Nombre": "Miguel", "Apellido":"Perucha", "Edad": 37, 1:"Python"}
for element in my_dict:          # Poner values() si queremos que muestre los valores. 
    print(element)               # Al igual que podemos detener el bucle while, podemos hacerlo con el for
    if element == "Edad":
        continue                 # Si utilizamos break, ya no pasa por el else del for porque corta el programa. Y si usamos continue, continúa, pero salta el mensaje.
    print("Se ejecuta.")
else:
    print("El bucle for para diccionario ha finalizado")

print("La ejecución continúa una vez más ")
