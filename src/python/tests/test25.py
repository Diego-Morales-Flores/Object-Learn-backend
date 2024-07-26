
import unittest
from problema import ItemBiblioteca, Libro, Revista, Biblioteca

class TestBiblioteca(unittest.TestCase):
    def test_operaciones(self):
        libro = Libro("El Quijote", "Cervantes", 1000)
        revista = Revista("National Geographic", "Varios", "Enero 2024")
        biblio = Biblioteca()
        biblio.agregar_item(libro)
        biblio.agregar_item(revista)
        
        self.assertIn(libro, biblio.items.values())
        self.assertIn(revista, biblio.items.values())
        
        biblio.eliminar_item("El Quijote")
        self.assertNotIn(libro, biblio.items.values())
        
        items_str = biblio.mostrar_items()
        self.assertIn("Revista(titulo: National Geographic, autor: Varios, disponible: True, edicion: Enero 2024)", items_str)

if __name__ == "__main__":
    unittest.main()
