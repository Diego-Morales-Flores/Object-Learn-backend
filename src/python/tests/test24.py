
import unittest
from problema import Producto, ListaCompras

class TestListaCompras(unittest.TestCase):
    def test_operaciones(self):
        p1 = Producto("Manzanas", 5)
        p2 = Producto("Peras", 10)
        lista = ListaCompras()
        
        lista.agregar_producto(p1)
        lista.agregar_producto(p2)
        
        self.assertEqual(lista.productos["Manzanas"], p1)
        self.assertEqual(lista.productos["Peras"], p2)
        
        lista.eliminar_producto("Peras")
        self.assertNotIn("Peras", lista.productos)
        
        productos_str = lista.mostrar_productos()
        self.assertIn("Producto(nombre: Manzanas, cantidad: 5)", productos_str)

if __name__ == "__main__":
    unittest.main()
