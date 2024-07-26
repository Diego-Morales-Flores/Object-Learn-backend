
import unittest
from problema import Vehiculo, Coche, Moto

class TestVehiculos(unittest.TestCase):
    def test_descripcion(self):
        coche = Coche("Toyota", "Corolla")
        moto = Moto("Honda", "CBR")
        
        self.assertEqual(coche.descripcion(), "Coche marca Toyota modelo Corolla")
        self.assertEqual(moto.descripcion(), "Moto marca Honda modelo CBR")

if __name__ == "__main__":
    unittest.main()
