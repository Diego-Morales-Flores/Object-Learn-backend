
import unittest
from problema import Animal, Perro, Gato

class TestAnimales(unittest.TestCase):
    def test_sonidos(self):
        perro = Perro("Firulais")
        gato = Gato("Michi")
        self.assertEqual(perro.hacer_sonido(), "Guau")
        self.assertEqual(gato.hacer_sonido(), "Miau")
        self.assertEqual(str(perro), "Animal(nombre: Firulais)")
        self.assertEqual(str(gato), "Animal(nombre: Michi)")

if __name__ == "__main__":
    unittest.main()
    