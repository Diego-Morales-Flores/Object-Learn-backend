
import unittest
from problema import Figura, Cuadrado, Triangulo

class TestFiguras(unittest.TestCase):
    def test_perimetros(self):
        cuadrado = Cuadrado(4)
        triangulo = Triangulo(3, 4, 5)
        
        self.assertEqual(cuadrado.perimetro(), 16)
        self.assertEqual(triangulo.perimetro(), 12)

if __name__ == "__main__":
    unittest.main()
