
import unittest
from problema import Rectangulo

class TestRectangulo(unittest.TestCase):
    def test_area(self):
        r = Rectangulo(5.0, 3.0)
        self.assertEqual(r.area(), 15.0)
        self.assertEqual(str(r), "Rectangulo(largo: 5.0, ancho: 3.0, area: 15.0)")

if __name__ == "__main__":
    unittest.main()
    