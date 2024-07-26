
import unittest
from problema import Libro, Biblioteca

class TestBiblioteca(unittest.TestCase):
    def test_operaciones(self):
        libro1 = Libro("Libro1", "Autor1")
        libro2 = Libro("Libro2", "Autor2")
        b = Biblioteca([libro1, libro2])
        libro3 = Libro("Libro3", "Autor3")
        b.agregar_libro(libro3)
        self.assertIn("Libro3", b.libros)
        b.prestar_libro("Libro1")
        self.assertFalse(b.libros["Libro1"].disponible)
        b.devolver_libro("Libro1")
        self.assertTrue(b.libros["Libro1"].disponible)
        self.assertEqual(str(b), "Biblioteca(libros: {'Libro1': libro1, 'Libro2': libro2, 'Libro3': libro3})")

if __name__ == "__main__":
    unittest.main()
