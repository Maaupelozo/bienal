#Realizar un programa de una tienda en línea "Mercado Shop" vende productos informáticos (teclados, mouse, memoria, disco ssd, procesadores ADM). Cada producto esta compuesto por un nombre, precio y cantidad (stock). Los clientes puden realizar los pedidos por la web, que el mismo pueden ser uno o varios productos, y se retira de manera presencial por el local. Ud. deberá realizar un programa que gestione el inventario (stock) de cada producto que comercializa, precese el pedido y calcule el total a pagar.
##Consideraciones:

#Elabore una aplicación de consola en Python.
#Considere el diagrama de clases entregado como punto de partida para organizar su programa.
#El programa deberá contener un Inventario de Productos, donde almacenará los productos mencionados anteriormente. Mostrar inventario, donde figure el Stock del mismo y Procesar Pedidos, deberá mostrar el total de la compra.
#Coloque los métodos faltantes, puede agregar otras funciones si lo requiriese.
#Podrá hacer uso de los elementos del lenguaje vistos hasta el momento.
#Además de la funcionalidad del código se valorará su correcto diseño.

print("hola como estas? soy Mauricio y sere tu acesor de ventas")
print("En que puedo ayudarte?")

def agregar_producto(inventario, nombre, precio, cantidad):
    inventario.append({'nombre': nombre, 'precio': precio, 'cantidad': cantidad})


def mostrar_stock(inventario):
    print("stock de Productos:")
    for producto in inventario:
        print(f"{producto['nombre']} - Precio: ${producto['precio']} - Stock: {producto['cantidad']}")

def compra_pedido(inventario, nombre, cantidad):
    for producto in inventario:
        if producto['nombre'] == nombre:
            if producto['cantidad'] >= cantidad:
                producto['cantidad'] -= cantidad
                total = producto['precio'] * cantidad
                print(f"compra en curso: {cantidad} x {producto['nombre']} - Total a pagar: ${total}")
                return total
            else:
                print(f"No hay stock de {nombre}. Stock disponible: {producto['cantidad']}")
                return 0
    print(f"Producto {nombre} no encontrado en el stock.")
    return 0


def main():
    
    inventario = []
    agregar_producto(inventario, "Teclado", 25000, 50)
    agregar_producto(inventario, "Mouse", 15000, 100)
    agregar_producto(inventario, "Memoria", 45000, 30)
    agregar_producto(inventario, "Disco ", 89000, 20)
    agregar_producto(inventario, "Procesador", 199000, 10)

    while True:
        print("1. Mostrar Inventario")
        print("2. Realizar Pedido")
        print("3. Salir")
        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            mostrar_stock(inventario)
        elif opcion == "2":
            nombre_producto = input("Ingrese el nombre del producto(Primera en mayuscula): ")
            cantidad = int(input("Ingrese la cantidad: "))
            compra_pedido(inventario, nombre_producto, cantidad)
        elif opcion == "3":
            print("Gracias por su compra")
            break
        else:
            print("Opción no encontrada ingrese.")

if __name__ == "__main__":
    main()
