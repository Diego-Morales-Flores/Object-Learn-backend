
import unittest
from problema import Vehiculo, Coche, Moto, Estacionamiento

class TestEstacionamiento(unittest.TestCase):
    def test_operaciones(self):
        coche = Coche("Toyota", "Corolla", 4)
        moto = Moto("Honda", "CBR", 600)
        estacionamiento = Estacionamiento()
        estacionamiento.agregar_vehiculo(coche)
        estacionamiento.agregar_vehiculo(moto)
        
        self.assertIn(coche, estacionamiento.vehiculos)
        self.assertIn(moto, estacionamiento.vehiculos)
        
        estacionamiento.eliminar_vehiculo(moto)
        self.assertNotIn(moto, estacionamiento.vehiculos)
        
        vehiculos_str = estacionamiento.mostrar_vehiculos()
        self.assertIn("Coche(marca: Toyota, modelo: Corolla, numero_puertas: 4)", vehiculos_str)

if __name__ == "__main__":
    unittest.main()
