
import unittest
from problema import Publicacion, Libro, Revista, Biblioteca

class TestBiblioteca(unittest.TestCase):
    def test_operaciones(self):
        libro = Libro("El Quijote", "Cervantes", 1000)
        revista = Revista("National Geographic", "Varios", "Enero 2024")
        biblio = Biblioteca()
        biblio.agregar_publicacion(libro)
        biblio.agregar_publicacion(revista)
        
        self.assertIn(libro, biblio.publicaciones)
        self.assertIn(revista, biblio.publicaciones)
        
        biblio.eliminar_publicacion(libro)
        self.assertNotIn(libro, biblio.publicaciones)
        
        publicaciones_str = biblio.mostrar_publicaciones()
        self.assertIn("Revista(titulo: National Geographic, autor: Varios, edicion: Enero 2024)", publicaciones_str)

if __name__ == "__main__":
    unittest.main()
