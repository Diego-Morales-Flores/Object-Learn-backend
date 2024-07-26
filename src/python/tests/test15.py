
import unittest
from problema import OperacionMatematica, Suma, Resta, Multiplicacion

class TestOperacionMatematica(unittest.TestCase):
    def test_operaciones(self):
        suma = Suma()
        resta = Resta()
        multiplicacion = Multiplicacion()
        
        self.assertEqual(suma.operar(1, 2), 3)
        self.assertEqual(resta.operar(5, 3), 2)
        self.assertEqual(multiplicacion.operar(4, 3), 12)

if __name__ == "__main__":
    unittest.main()
