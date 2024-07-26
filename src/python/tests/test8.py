
import unittest
from problema import Triangulo

class TestTriangulo(unittest.TestCase):
    def test_area(self):
        t = Triangulo(4.0, 3.0)
        self.assertEqual(t.area(), 6.0)
        self.assertEqual(str(t), "Triangulo(base: 4.0, altura: 3.0, area: 6.0)")

if __name__ == "__main__":
    unittest.main()
    