
import unittest
from problema import Circulo

class TestCirculo(unittest.TestCase):
    def test_area_circunferencia(self):
        c = Circulo(2.0)
        self.assertAlmostEqual(c.area(), 12.566370614359172)
        self.assertAlmostEqual(c.circunferencia(), 12.566370614359172)
        self.assertEqual(str(c), "Circulo(radio: 2.0, area: 12.566370614359172, circunferencia: 12.566370614359172)")

if __name__ == "__main__":
    unittest.main()
    