
import unittest
from problema import Producto, Tienda

class TestTienda(unittest.TestCase):
    def test_operaciones(self):
        p1 = Producto("Laptop", 1500.0, 10)
        p2 = Producto("Mouse", 50.0, 200)
        tienda = Tienda()
        
        tienda.agregar_producto(p1)
        tienda.agregar_producto(p2)
        
        self.assertEqual(tienda.obtener_producto("Laptop"), p1)
        self.assertEqual(tienda.obtener_producto("Mouse"), p2)
        self.assertEqual(tienda.obtener_producto("Teclado"), None)
        
        tienda.eliminar_producto("Mouse")
        self.assertEqual(tienda.obtener_producto("Mouse"), None)
        
        productos_str = tienda.mostrar_productos()
        self.assertIn("Producto(nombre: Laptop, precio: 1500.0, cantidad: 10)", productos_str)

if __name__ == "__main__":
    unittest.main()
