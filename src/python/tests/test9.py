
import unittest
from problema import Cilindro

class TestCilindro(unittest.TestCase):
    def test_volumen_area_superficial(self):
        c = Cilindro(2.0, 5.0)
        self.assertAlmostEqual(c.volumen(), 62.83185307179586)
        self.assertAlmostEqual(c.area_superficial(), 87.96459430051421)
        self.assertEqual(str(c), "Cilindro(radio: 2.0, altura: 5.0, volumen: 62.83185307179586, area_superficial: 87.96459430051421)")

if __name__ == "__main__":
    unittest.main()
    