import math
# 1. Crea una función que intente dividir dos números proporcionados por el usuario. Usa try-except para capturar cualquier error de división (por ejemplo, división por cero).
print("----- Ejercicio 1--------")
def divide_numbers(n1, n2):
    try:
        result = n1 / n2
        print(f"El resultado de la división de {n1} / {n2} es: {result}")
    except ZeroDivisionError:
        print("Error: no se puede dividir entre cero")
    except TypeError as error:
        print("Erro no se puede introducir texto")
        print(error)

divide_numbers(2, 4)
divide_numbers(4, 2)
divide_numbers(4,0)
divide_numbers(3,"2")
print("")

# 2. Crea una función que tome una cadena e intente convertirla en un número entero. Usa try-except para capturar cualquier error en la conversión.
print("----- Ejercicio 2--------")
def convert_to_integer(string):
    try:
       return int(string)
    except ValueError:
        print("Error: No se puede convertir a entero.")

print("423")
print(convert_to_integer("423"))
print("3.14")
print(convert_to_integer("3.14"))
print("Texto")
print(convert_to_integer("texto"))
print(convert_to_integer(2))
 
print("")

# 3. Crea una función que abra un archivo, lea su contenido y maneje posibles errores (por ejemplo, archivo no encontrado). Usa try-except para gestionar las operaciones de archivos de forma segura.
print("----- Ejercicio 3--------")
print("Descomentar el fichero abajo.")
def read_file(filename):                        # filname: ruta del archivo (ej."datos.txt") o ("carpeta/datos.txt")
    try:                                        # with usa un context manager.Entra al bloque y asigna el objeto devuelto por open(...) a la variable file.Al salir del bloque, cierra el archivo automáticamente (aunque haya excepción). Es la forma segura.
        with open(filename, 'r') as file:       # Función incorporada que abre un archivo y devuelve un objeto fichero.
            content = file.read()               # 'r': modo de apertura = read (solo lectura).* 'r'= leer///  'w' escribir (crea/borra el contenido si ya existe)
            print(content)                      # 'a' añadir al final (append) ///  x' crear nuevo (falla si existe) /// ñade 'b' para binario: 'rb', 'wb' (imágenes, pdf…)
    except FileNotFoundError:
        print("Error: Fichero no encontrado.")

# read_file('Ejercicios/12_exceptions.py')    # Utilizar '' y la barra / y no ""  y \
print("")

# 4. Crea una función que realice múltiples operaciones (suma, resta, división, multiplicación) con dos números. Usa try-except-else-finally para manejar errores y asegurar que se imprima un mensaje final, independientemente de los errores.
print("----- Ejercicio 4--------")
def operations(num1, num2):
    try:
        print(f"Suma: {num1 + num2}")
        print(f"Resta: {num1 - num2}")
        print(f"Multiplicación: {num1 * num2}")
        print(f"Divsión: {num1 / num2}")
    except ZeroDivisionError:
        print("Error: No se puede dividir entre cero")
    else:
        print("Operaciones realizadas correctamente.")
    finally:
        print("Fin de las operaciones.")

operations(2,2)
print("")

# 5. Crea una función que le pida al usuario su edad y lance un ValueError si la entrada no es un número entero positivo. Usa el manejo de excepciones para gestionar la entrada y lanzar excepciones personalizadas cuando sea necesario.
print("----- Ejercicio 5--------")
def ask_age():
    try:
        age = int(input("Introduce tu edad: "))
        if age <= 0:
            raise ValueError("La edad debe ser un entero positivo. ")
        return age
    except ValueError as e:
        print(f"Error: {e}")

ask_age()
print("")

# 6. Crea una función que intente acceder a un elemento de una lista por í­ndice. Usa try-except para manejar el caso donde el Ã­ndice estÃ© fuera de rango.
print("----- Ejercicio 6--------")
def access_list_element(list, index):
    try:
        return list[index]
    except IndexError:
        print("Error: índice fuera de rango. ")
nums = [10, 20, 30]

print(access_list_element(nums, 0))
print(access_list_element(nums, 1))
print(access_list_element(nums, 2))
print(access_list_element(nums, 3))
print("")

# 7. Crea una función que use try-except para manejar múltiples excepciones: ZeroDivisionError, ValueError y TypeError.
print("----- Ejercicio 7--------")
def handle_multiple_exceptions(num1, num2):
    try:
        result = float(num1) / float(num2)
        print(f"Result: {result}")
    except ZeroDivisionError:
        print("Error: No se puede dividir entre cero.")
    except ValueError:
        print("Error: Valor inválido.")     # Nunca saldra excepto que dentro metamos una conversion result = float(num1) / float(num2)
    except TypeError:
        print("Error: Tipo no compatible.")

handle_multiple_exceptions(3, 5)
handle_multiple_exceptions(3, 0)
handle_multiple_exceptions("treninta", 2)
handle_multiple_exceptions(None, 2)
print("")

# 8. Crea una función que simule una transacción. Lanza una excepción personalizada llamada InsufficientFundsError si el saldo es menor que la cantidad a retirar.
print("----- Ejercicio 8--------")
class InsufficientFundsError(Exception):
    pass


def simulate_transaction(balance, withdrawal_amount):
    try:
        if withdrawal_amount > balance:
            raise InsufficientFundsError(
                "Saldo insuficiente para la transacción.")
        balance -= withdrawal_amount
        print(f"Transacción realizada correctamente. Nuevo saldo: {balance}")
    except InsufficientFundsError as e:
        print(f"Error: {e}")

simulate_transaction(100, 30)
simulate_transaction(50, 80)
print("")

# 9. Crea una función que intente convertir una lista de cadenas en enteros. Maneja cualquier error que surja cuando una cadena no pueda convertirse.
print("----- Ejercicio 9--------")
def convert_list_to_integers(string_list):
    integers = []
    for string in string_list:
        try:
            integers.append(int(string))
        except ValueError:
            print(f"Error: '{string}' no se puede transformar en un entero.")
    return integers

convert_list_to_integers (["Hola", "Que tal", "12"])
print(convert_list_to_integers(["10", " 7 ", "-3", "+5"])) 
print("")

# 10. Crea una función que calcule la raí­z cuadrada de un número. Lanza un ValueError si el número es negativo.
print("----- Ejercicio 10--------")
def calculate_square_root(number):
    try:
        if number < 0:
            raise ValueError(
                "No se puede calcular la raí­z cuadrada de un número negativo.")
        return number ** 0.5
    except ValueError as e:
        print(f"Error: {e}")

print(calculate_square_root(20))
print("")
