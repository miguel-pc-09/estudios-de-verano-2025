# 1. Crea una clase llamada "Animal" que tenga una propiedad "species" y un método "make_sound" que imprima un sonido genérico.
print("Ejercicio 1")
class Animal:
    def __init__(self, especies):
        self.especies = especies
    
    def make_sound(self):
        print("Grrrrr")

my_animal = Animal("Perro")
print(my_animal.especies)
my_animal.make_sound()

print("")

# 2. Modifica la clase "Animal" para que reciba la especie al crear un objeto y almacénala en una propiedad pública. Añade el método "make_sound" que imprima un sonido dependiendo de la especie.
print("Ejercicio 2")
class Animal2:
    def __init__(self, especies):
        self.especies = especies

    def make_sound(self):
        if self.especies == "Perro":
            print(f"El {self.especies} hace GuauGuau")
        elif self.especies == "Gato":
            print(f"El {self.especies} hace MiauMiau")
        else:
            print("No tengo el sonido")

animal_perro = Animal2("Perro")
print(animal_perro.especies)
animal_perro.make_sound()

animal_gato = Animal2("Gato")
animal_gato.make_sound()

animal_vaca = Animal2("Vaca")
animal_vaca.make_sound()

print("")

# 3. Crea una clase llamada "Car" con las propiedades públicas "brand" y "model". Además, debe tener una propiedad privada "_speed" que inicialmente será 0.
# 4. Añade a la clase "Car" un método llamado "accelerate" que aumente la velocidad en 10 unidades. Añade también un método "brake" que reduzca la velocidad en 10 unidades. Asegúrate de que la velocidad no sea negativa.
print("Ejercicio 3 y 4")
class Car:
    def __init__(self, brand, model, speed = 0):
        self.brand = brand     # publica
        self.model = model     # publica
        self.__speed = speed   # privada

    def accelerate(self):
        self.__speed += 10

    def brake(self):
        self.__speed -= 10
        if self.__speed < 0:
         self.__speed = 0

    def get_speed(self):
        return self.__speed

my_car = Car("Ford", "Mondeo")
print(f"Marca: {my_car.brand}")
print(f"Modelo: {my_car.model}")
print(f"Velocidad: {my_car.get_speed()}")
my_car.accelerate()
print(f"El coche va a una velocidad de: {my_car.get_speed()}")
my_car.brake()
print(f"El coche despues de frenar su velocidad es: {my_car.get_speed()}")
my_car.brake()
my_car.brake()
print(f"El coche despues de frenar dos veces mas: {my_car.get_speed()}")
print("")

# 5. Crea una clase "Book" que tenga propiedades como "title" (público) y "author" (privado). Añade un método para obtener el autor y otro para cambiar el tí­tulo del libro.
print("Ejercicio 5")
class Book:
    def __init__(self, title, author):
        self.title = title
        self.__author = author

    def set_title(self, new_title):
        self.title = new_title
    
    def get_author(self):
        return self.__author
    
my_book = Book("El señor de los anillos", "J.R.R. Tolkien")
print("Tìtulo: ", my_book.title)
print("Autor:", my_book.get_author())
my_book.set_title("El Hobbit")
print("Nuevo título:", my_book.title)
        
print("")

# 6. Crea una clase "Estudiante" que tenga como propiedades su nombre, apellido y una lista de notas. Añade un método para calcular y devolver la nota media del estudiante.
print("Ejercicio 6")
class Estudiante:
    def __init__(self, nombre, apellido, notas):
        self.nombre = nombre
        self.apellido = apellido
        self.notas = list(notas)

    def nota_media(self):
        return sum(self.notas) / len(self.notas)

alumno = Estudiante("Miguel", "Perucha", [8, 7.5, 9])
print(f"Media de {alumno.nombre} {alumno.apellido}: {alumno.nota_media():.2f}")
print("")

# 7. Crea una clase "BankAccount" con propiedades como "owner" y "balance". Añade método para depositar y retirar dinero, asegurándote de que no se pueda retirar más de lo que hay en la cuenta.
print("Ejercicio 7")
class BankAccount: 
    def __init__(self, owner, balance=0.0):
        self.owner = owner
        self.balance = float(balance)

    def deposit(self, value):
        if value <= 0:
            print("\tEl importe a depositar debe ser positivo.")
            return self.balance
        self.balance += value
        return self.balance

    def withdraw(self, value):
        if value <= 0:
            print("\tEl importe a retirar debe ser positivo.")
            return self.balance
        if value <= self.balance:
            self.balance -= value
        else:
            print("\tFondos insuficientes.")
        return self.balance

cuenta = BankAccount("Miguel", 100)
print(f"Titular: {cuenta.owner}")
print(f"Saldo inicial: {cuenta.balance}")

print(f"Tras depositar 50: {cuenta.deposit(50)}")
print(f"Tras retirar 30: {cuenta.withdraw(30)}")
print(f"Intento retirar 500: {cuenta.withdraw(500)}")
print(f"Saldo final: {cuenta.balance}")
print("")

# 8. Crea una clase "Point" que represente un punto en el espacio 2D con coordenadas "x" e "y". Añade un método que calcule la distancia entre dos puntos.
print("Ejercicio 8")
class Point:
    def __init__(self, x, y):
        self.x = float(x)
        self.y = float(y)
    
    def distance_to(self, other):
        dx = other.x - self.x
        dy = other.y - self.y
        return (dx*dx + dy*dy) ** 0.5

    def __repr__(self):
        return f"Point(x={self.x}, y={self.y})" 
    
p1 = Point(0, 0)
p2 = Point(3, 4)
print("Distancia:", p1.distance_to(p2))
print("")

# 9. Crea una clase "Employee" que tenga propiedades como "name", "hourly_wage" (pago por hora) y "hours_worked". Añade un método que calcule el pago total basado en las horas trabajadas y el salario por hora.
print("Ejercicio 9")
class Employee:
    def __init__(self, name, hourly_wage, hours_worked):
        self.name = name
        self.hourly_wage = float(hourly_wage)
        self.hours_worked = float(hours_worked)
    
    def total_pay(self):
        return self.hourly_wage * self.hours_worked
    
    def __str__(self):
        return f"Empleado: {self.name} | Pago total: {self.total_pay():.2f}"

emp = Employee("Miguel", 12.5, 20)  
print("Nombre:", emp.name)
print("Pago total:", emp.total_pay())        
print(emp)
print("")

# 10. Crea una clase "Store" que tenga una propiedad "inventory" (una lista de productos). Añade un método para agregar un producto al inventario y otro para mostrar todos los productos disponibles.
print("Ejercicio 10")
class Store:
    def __init__(self, inventory=None):
        self.inventory = list(inventory) if inventory is not None else []

    def add_product(self, product):
        """Agrega un producto al inventario."""
        self.inventory.append(product)

    def show_inventory(self):
        """Muestra todos los productos disponibles."""
        if not self.inventory:
            print("No hay productos disponibles.")
            return
        print("Productos disponibles:")
        for i, prod in enumerate(self.inventory, start=1):
            print(f"{i}. {prod}")

    def __str__(self):
        return f"Tienda con {len(self.inventory)} producto(s)"


store = Store()
store.show_inventory()          
store.add_product("Teclado")
store.add_product("Ratón")
store.add_product("Monitor")
store.show_inventory()
print("")
