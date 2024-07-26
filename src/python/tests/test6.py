
import unittest
from problema import Cubo

class TestCubo(unittest.TestCase):
    def test_volumen(self):
        c = Cubo(3.0)
        self.assertEqual(c.volumen(), 27.0)
        self.assertEqual(str(c), "Cubo(lado: 3.0, volumen: 27.0)")

if __name__ == "__main__":
    unittest.main()
    