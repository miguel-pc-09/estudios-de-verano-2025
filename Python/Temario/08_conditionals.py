## Condicionales ##

# Lo que nos está representando un condicional es la manera de establecer flujos de ejecución de nuestro código.
# Es decir, decidir si algo de nuestro código se va a ejecutar o no.

# if
print("Primera condición")
# my_condition = True

my_condition = False

if my_condition:                                   # Es lo mismo que if my_condition == True:
    print("Se ejecuta la condición del if")

print("La ejecución continúa")                     # Si es false pasa a esta línea directo 
print("")

print("---- Condición segunda ---- ")
my_condition = 5 * 5

if my_condition == 10:                                   
    print("Se ejecuta la condición del segundo if")
print("")
# if else
# Si queremos que salte cuando no se cumple 
print("---- If else ----- ")
if my_condition > 10:
    print("Es mayor que 10")
else:
    print("Es menor o igual que 10")

print("La ejecución continúa")
print("")

# if elif else                              # elif necesitan una condición 
print("---- if elif else ------ ")
if my_condition > 10 and my_condition < 20:
    print("Es mayor que 10 y menor que 20")
elif my_condition == 25:
    print("Es igual a 25")
else:
    print("Es menor o igual que 10 o mayor o igual que 20 o distinto de 25")
print("La ejecución continúa")
print("")

# Condicional con inspección de valor
print("---- my_string -----")
my_string = ""                       # Un string vacío es false    "Mi cadena de texto"

if my_string:
    print("Mi cadena de texto no es vacía")
print("Igualando al string")
print("")
# Si ponemos lo mismo 
if my_string == "Mi cadena de texto":
    print("Mi cadena de texto no es vacía")

if my_string == "Mi cadena de textoooooooo":           # Como no es igual el string entra en false y no saca mensaje 
    print("Mi cadena de texto no es vacía")

print("Negando con not")     # Vaciamos el string 
if not my_string:
    print("Mi cadena de texto es vacía")
