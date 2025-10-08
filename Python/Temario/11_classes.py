### Clases ## A diferencia del resto, las clases en CamelCase, es decir, primera mayúscula. Ej: MyPerson 

# Definición: Igual que una función, también nos vale para realizar una tarea muy concreta. La clase dota de principio a fin un objeto. Si tenemos una clase 
# todo lo que esté dentro de nuestra clase tiene que responder a una cierta lógica.

# CLASS palabra reservada, y Person lo que queremos definir. Con esto solo ya estaría la clase creada. 
class MyEmptyPerson: 
    pass        # Para poder dejar la clase vacía

print(MyEmptyPerson)     # Podemos llamar a la clase con y sin paréntesis
print(MyEmptyPerson())   # Serán importantes los paréntesis cuando necesite algo para ejecutarse. 
print("")


# Clase con constructor, funciones y propiedades privadas y públicas
print("Clase con constructor, funciones y propiedades privadas y públicas")
print("Primera forma .........................")
class Person1:                                 # Construiremos uno con nombre y apellido. self siempre tiene que estar; hace referencia a la clase
    def __init__(self, name, surname):         # __init__ : reservado del sistema que nos sirve para un constructor de clase. DEF aquí no es una función, es un constructor
        self.name = name
        self.surname = surname
my_person1 = Person1("miguel", "Perucha")
print(my_person1.name)                           # Ahora, con los self.name = name, podemos acceder a my_person nombre
print(my_person1.surname)
print(f"{my_person1.name} {my_person1.surname}")
print("")

print("Segunda forma ................................")
class Person2:                                 
    def __init__(self):          # Una forma de definir una clase con propiedades dentro.
        self.name = "Miguel"        
        self.surname = "Perucha"
# Creamos una variable y llamamos a person                                            
my_person2 = Person2()                            # Le llegan los datos pero tiene que guardarlos. Eliminamos PASS 
print(f"{my_person2.name} {my_person2.surname}")  
                                                    
print("")                                           # El uso del self: si queremos crear una clase, constructor se debe de poner. Self se refiere a sí mismo; es decir, aquí la instancia persona

print("Tercera forma..................................")
class Person3:                                 
    def __init__(self, name, surname):        
        self.full_name = f"{name} {surname}"    # Ya no almacenamos el nombre de name y surname; lo que hacemos es crear una propiedad almacenada
my_person3 = Person3("Miguel", "Perucha")
print(my_person3.full_name)                       # Ya no tenemos la posibilidad de acceder a name y surname
print("")

# Añadiéndole más funciones 
print("Añadiendo más funciones..................")
class Person4:                                 
    def __init__(self, name, surname):        
        self.full_name = f"{name} {surname}"    

    def walk(self):                                  
        print(f"{self.full_name} está caminando")                 # De primeras no nos deja llamar a full_name 
my_person4 = Person4("Miguel", "Perucha")
print(my_person4.full_name)      
my_person4.walk()                 
print("")

# Poniendo alias
print("Con o sin alias")
class Person5:                                 
    def __init__(self, name, surname, alias = "Sin alias"):        
        self.full_name = f"{name} {surname} ({alias})"           # Propiedad PÚBLICA, pero podemos hacer privado el name
        self.__name = name                                       # PROPIEDAD PRIVADA. Ahora el name es privado y lo guardamos   
        self.__surname = surname

    def get_name (self):                 # De esta manera podríamos acceder al nombre, pero no poder modificarlo
        return self.__name

    def walk(self):                                  
        print(f"{self.full_name} está caminando")                 # De primeras no nos deja llamar a full_name 
my_person5 = Person5("Miguel", "Perucha")
print(my_person5.full_name)   
print("Llamando al get_name:")
print(my_person5.get_name())                                          # Si intentamos acceder a la privada nos dará error
my_person5.walk()
print("")

print("Metiéndole un alias ")
my_other_person = Person5("Miguel", "Perucha", "Mapcdev")
print(my_other_person.full_name)      
my_other_person.walk()
print("")

# Más cosas que podemos hacer                        # Añadimos paréntesis () en el alias 
my_other_person.full_name = "Héctor de León (El loco de los perros)"   # Metemos comillas aquí a ver qué pasa al imprimir
print(my_other_person.full_name)                     # Cambiamos el valor

my_other_person.full_name = 666
print(my_other_person.full_name)
