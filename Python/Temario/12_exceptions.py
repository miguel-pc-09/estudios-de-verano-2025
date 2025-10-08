### Exception Handling ###

# El manejo de errores: si en nuestro programa se da un error y no hacemos nada con ese error, nuestro programa muere
"""
try:
            Run this code
except:  <----------------------------------------------------May or may not have a condition
            Execute this code when there is an exception
else:
            No exceptions? Run this code.
finally:
            Always run this code.

"""
numberOne = 5
numberTwo = 1
# print(numberOne + numberTwo)   # aquí no tenemos error
numberTwo = "1"    
# print(numberOne + numberTwo)   # Python nos dará un error TypeError: unsupported operand type(s) for +: 'int' and 'str'

# Excepción base: try except
print(".............. Excepción base: try except ..........................")
try:
    print(numberOne + numberTwo)
    print("No se ha producido un error")
except:
    # Se ejecuta si se produce una excepción
    print("Se ha producido un error")

print("")

# Flujo completo de una excepción: try except else finally
print("........ Flujo completo de una excepción: try except else finally .............")
try:
    print(numberOne + numberTwo)
    print("No se ha producido un error")
except:                                            # except captura todos los errores.
    # Se ejecuta si se produce una excepción
    print("Se ha producido un error")
else:
    # Se ejecuta si no se produce una excepción
    print("La ejecución continúa correctamente")   # En este caso no se ejecutó; si comentamos numberTwo = "1" veremos el mensaje
finally: # Opcional
    # Se ejecuta siempre
    print("La ejecución continúa")

print("")
# Excepciones por tipo
print("........ Excepciones por tipo .............")
try:
    print(numberOne + numberTwo)
    print("No se ha producido un error")
except ValueError:                          # Se ejecuta solo si tiene ValueError
    print("Se ha producido un ValueError")
except TypeError:                           # Se ejecuta solo si tiene TypeError
    print("Se ha producido un TypeError")

print("")
# Captura de la información de la excepción
print("......... Captura de la información de la excepción ...........")
try:
    print(numberOne + numberTwo)
    print("No se ha producido un error")
except ValueError as error:                # as “como”. Sirve para guardar la instancia de la excepción en una variable.  
    print(error)                           # error: el nombre de la variable donde se guarda esa instancia
except Exception as my_random_error_name:  # Exception: es una excepción genérica. Es decir, en el caso de que el error que se produce no sea ValueError, se nos va por el
    print(my_random_error_name)            # bloque de Exception
