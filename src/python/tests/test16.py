
import unittest
from problema import Animal, Perro, Pajaro, Pez

class TestAnimales(unittest.TestCase):
    def test_movimientos(self):
        perro = Perro("Firulais")
        pajaro = Pajaro("Tweety")
        pez = Pez("Nemo")
        
        self.assertEqual(perro.mover(), "corre")
        self.assertEqual(pajaro.mover(), "vuela")
        self.assertEqual(pez.mover(), "nada")

if __name__ == "__main__":
    unittest.main()
