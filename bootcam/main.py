#Crear una clase llamada Usuario. Sus atributos son: nombre, edad y DNI. Construye los
#siguientes métodos para la clase:
#● Un constructor, donde los datos pueden estar vacíos.
#● Los setters y getters para cada uno de los atributos. Hay que validar las entradas
#de datos.
#● mostrar(): Muestra los datos de la persona.
#● esMayorDeEdad(): Devuelve un valor lógico indicando si es mayor de edad.t)




class Usuario:
    nombre = input ("Ingrese nombre:")
    Edad= int (input("Ingrese Edad:"))
    Dni= int(input("Ingrese su Numero de documento sin puntos:"))

    def Decir_datos( self):
        return("%i de %s de %i " % (Usuario.nombre, Usuario.Edad, Usuario.Dni))
    
DatosUsuario=Usuario()
print ("Nombre:" ,DatosUsuario.nombre," Edad: " ,DatosUsuario.Edad, "Dni:",DatosUsuario.Dni)


    
