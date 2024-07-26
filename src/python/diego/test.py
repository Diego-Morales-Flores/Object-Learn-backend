import unittest

from problema import Producto, Inventario

class TestInventario(unittest.TestCase):
    def test_producto(self):
        p = Producto("Laptop", 1500.0, 10)
        self.assertEqual(p.nombre, "Laptop")
        self.assertEqual(p.precio, 1500.0)
        self.assertEqual(p.cantidad, 10)
        self.assertEqual(str(p), "Producto(nombre: Laptop, precio: 1500.0, cantidad: 10)")
        
        p.actualizar_precio(1600.0)
        self.assertEqual(p.precio, 1600.0)
        
        p.actualizar_cantidad(8)
        self.assertEqual(p.cantidad, 8)

    def test_inventario(self):
        p1 = Producto("Laptop", 1500.0, 10)
        p2 = Producto("Mouse", 50.0, 200)
        inv = Inventario()
        
        inv.agregar_producto(p1)
        inv.agregar_producto(p2)
        
        self.assertEqual(inv.obtener_producto("Laptop"), p1)
        self.assertEqual(inv.obtener_producto("Mouse"), p2)
        self.assertEqual(inv.obtener_producto("Teclado"), None)
        
        inv.eliminar_producto("Mouse")
        self.assertEqual(inv.obtener_producto("Mouse"), None)
        
        self.assertEqual(inv.valor_total_inventario(), 15000.0)

if __name__ == "__main__":
    unittest.main()