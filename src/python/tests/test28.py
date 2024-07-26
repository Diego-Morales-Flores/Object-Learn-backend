
import unittest
from problema import Persona, Gerente, Desarrollador, Proyecto

class TestProyecto(unittest.TestCase):
    def test_operaciones(self):
        gerente = Gerente("Carlos", 40)
        desarrollador = Desarrollador("Ana", 30)
        proyecto = Proyecto("Nuevo Proyecto")
        proyecto.agregar_persona(gerente)
        proyecto.agregar_persona(desarrollador)
        
        self.assertIn(gerente, proyecto.personas)
        self.assertIn(desarrollador, proyecto.personas)
        
        proyecto.eliminar_persona(desarrollador)
        self.assertNotIn(desarrollador, proyecto.personas)
        
        personas_str = proyecto.mostrar_personas()
        self.assertIn("Gerente: Carlos, 40 años", personas_str)

if __name__ == "__main__":
    unittest.main()
