
import unittest
from problema import ItemBiblioteca, Libro, Revista, Biblioteca

class TestBiblioteca(unittest.TestCase):
    def test_operaciones(self):
        libro = Libro("El Quijote", "Cervantes")
        revista = Revista("National Geographic", "Varios")
        biblio = Biblioteca()
        biblio.agregar_item(libro)
        biblio.agregar_item(revista)
        
        self.assertIn(libro, biblio.items.values())
        self.assertIn(revista, biblio.items.values())
        
        biblio.eliminar_item("El Quijote")
        self.assertNotIn(libro, biblio.items.values())
        
        items_str = biblio.mostrar_items()
        self.assertIn("Revista: National Geographic por Varios", items_str)

if __name__ == "__main__":
    unittest.main()
