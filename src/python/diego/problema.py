class Producto:
    def __init__(self, nombre, precio, cantidad):
        self.nombre = nombre
        self.precio = precio
        self.cantidad = cantidad

    def actualizar_precio(self, nuevo_precio):
        self.precio = nuevo_precio

    def actualizar_cantidad(self, nueva_cantidad):
        self.cantidad = nueva_cantidad

    def __str__(self):
        return f'Producto(nombre: {self.nombre}, precio: {self.precio}, cantidad: {self.cantidad})'

class Inventario:
    def __init__(self):
        self.productos = {}

    def agregar_producto(self, producto):
        self.productos[producto.nombre] = producto

    def eliminar_producto(self, nombre_producto):
        if nombre_producto in self.productos:
            del self.productos[nombre_producto]

    def obtener_producto(self, nombre_producto):
        return self.productos.get(nombre_producto, None)

    def valor_total_inventario(self):
        return sum(producto.precio * producto.cantidad for producto in self.productos.values())