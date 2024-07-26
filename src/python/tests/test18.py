
import unittest
from problema import Persona, Empleado, Cliente

class TestPersonas(unittest.TestCase):
    def test_descripcion(self):
        empleado = Empleado("Carlos", 30)
        cliente = Cliente("Ana", 25)
        
        self.assertEqual(empleado.descripcion(), "Empleado: Carlos, 30 años")
        self.assertEqual(cliente.descripcion(), "Cliente: Ana, 25 años")

if __name__ == "__main__":
    unittest.main()
