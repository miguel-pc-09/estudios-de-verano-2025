### String 

# definimos una variable string 
my_string = "Mi String"
my_other_string = 'Mi otro String'

# longitud del string
print("Longitud my_string")
print(len(my_string))
print("Longitud my_other_string")
print(len(my_other_string))
# concatenamos 
print("Concatenamos los dos")
print(my_string + " " + my_other_string)   # ponemos + " " + para meter espacio 
print("")

# Los string pueden tener ciertos caracteres
print("----- String con otros caracteres ------ ")
print("------ Con salto de linea ---------- ")
my_new_line_string = "Este es un String \ncon salto de linea"    # \nSeguido de lo siguiente o dejara hueco
print(my_new_line_string)
print("------ Con tabulación ------------")
print("Con tab")
my_tab_string = "\tEste es un String con tabulación"             # \t para tabulación 
print(my_tab_string)
print("------- Con los dos ---------")
my_scape_string = "\tEste es un String \n escapado"
print(my_scape_string)
print("Negandole el salto y la tab con doble \\")
my_scape2_string = "\\tEste es un String \\n escapado"
print(my_scape2_string)
print("")

# Formatear String 
print("------ Formatear String ------ ")

name, surname, age = "Miguel" , "Ángel", 37   # %f -> para float
print("Con llaves {}") # %d -> para los enteros
print("Mi nombre es {} {} y mi edad es {}".format(name,surname,age))   # %s ->El primer texto que le pase formateado lo mete y el segundo para el apellido
print("Con %")
print("Mi nombre es %s %s y mi edad es %d"%(name, surname, age))       # Podemos hacerlo de dos formas la anterior y esta
# print("Mi nombre es Miguel Ángel")                                   # Imaginar que Miguel Ángel no estuviera, creamos una variable 
print("Inferencia de datos")
print(f"Mi nombre es {name} {surname} y mi edad es {age}")             # Metemos una f al principio 
print("")

# Desempaquetado de caracteres
print("----- Desempaquetado de caracteres -------  ")
language = "python"         
a, b, c, d, e, f = "Python"               # si no metemos los mismo caracteres que tiene Python nos dara error
print(a)
print(e)
print("")

# División 
print("------ División ----- ")
language_slice = language[1:3]       # Comienza donde decimos pero termina uno anterior
print("Con 1:3")
print(language_slice)
print("Con 1: solo")
language_slice = language[1:]        # Nos devuelve de la primera letra al final, no decimos donde cortar asi que saca todo
print(language_slice)
print("Con -2")
language_slice = language[-2]        # Cuenta de alante a atras
print(language_slice)
print("Con 0:6:2")
language_slice = language[0:6:2]
print(language_slice)
print("")

# Reverse
print("----- Reverse --------- ")
reverse_language = language[::-1]
print(reverse_language)
print("")

# Funciones , Al meter el punto no sale que operaciones podemos hacer
print("---- Funciones ------- ")
print(language.capitalize())             # Cambiamos a la palabra Python la mayuscula primera para ver que hace esta 
print(language.upper())                  # Todas las letras a mayusculas
print(language.count("t"))               # Cuenta lo que le pases por parametro     
print(language.isnumeric())              # si es un número  -> False 
print("1".isnumeric())                   # con un string de un numero -> True
print(language.lower())                  # Todas minusculas
print(language.upper().isupper())        # Combinacion pasamos a mayusculas y pregunta si son mayusculas
print(language.lower().isupper())        # False, pasa a minusculas y pregunta sobre mayusculas
print(language.startswith("py"))         # python comienza con py? -> True
print(language.startswith("Py"))         # python comienza con Py? -> False
print("Py" == "py")                      # muy parecido al anterior
                   
