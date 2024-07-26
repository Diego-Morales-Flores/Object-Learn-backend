
import unittest
from problema import Biblioteca

class TestBiblioteca(unittest.TestCase):
    def test_operaciones(self):
        biblioteca = Biblioteca(["El Quijote", "La Odisea"])
        self.assertEqual(biblioteca.libros, ["El Quijote", "La Odisea"])
        
        biblioteca.agregar_libro("Hamlet")
        self.assertEqual(biblioteca.libros, ["El Quijote", "La Odisea", "Hamlet"])
        
        biblioteca.eliminar_libro("La Odisea")
        self.assertEqual(biblioteca.libros, ["El Quijote", "Hamlet"])
        
        self.assertEqual(str(biblioteca), "Biblioteca(libros: ['El Quijote', 'Hamlet'])")

if __name__ == "__main__":
    unittest.main()
    