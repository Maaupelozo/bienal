precios = {
    "Tomate": 2500,
    "Papa": 1800,
    "Cebolla": 1200,
    "Morrón": 3000,
    "Mandioca": 200,
    "Batata": 2300
}

while True:
    verdura = input("Ingrese nombre de la verdura(Primera letra en mayuscula y sin espacios ) o bien FIN para terminar(Palabra entera en mayuscula): ")
    if verdura == "FIN":
        break
    cantidad = int(input("Ingrese la cantidad vendida: "))

    if verdura in precios:
        precio_total = precios[verdura] * cantidad
        print(f"El precio total de {verdura} es: {precio_total}")
    else:
        print("Verdura no existente \U0001F600")