
import unittest
from problema import Tarea, ListaTareas

class TestListaTareas(unittest.TestCase):
    def test_operaciones(self):
        tarea1 = Tarea("Comprar leche")
        tarea2 = Tarea("Llamar al médico")
        lista = ListaTareas()
        lista.agregar_tarea(tarea1)
        lista.agregar_tarea(tarea2)
        
        self.assertIn(tarea1, lista.tareas)
        self.assertIn(tarea2, lista.tareas)
        
        lista.eliminar_tarea(tarea1)
        self.assertNotIn(tarea1, lista.tareas)
        
        tareas_str = lista.mostrar_tareas()
        self.assertIn("Tarea(descripcion: Llamar al médico, completada: False)", tareas_str)

if __name__ == "__main__":
    unittest.main()
