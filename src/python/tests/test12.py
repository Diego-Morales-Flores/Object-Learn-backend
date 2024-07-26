
import unittest
from problema import Biblioteca

class TestBiblioteca(unittest.TestCase):
    def test_operaciones(self):
        b = Biblioteca({"Libro1": True, "Libro2": True})
        b.agregar_libro("Libro3")
        self.assertIn("Libro3", b.libros)
        b.prestar_libro("Libro1")
        self.assertFalse(b.libros["Libro1"])
        b.devolver_libro("Libro1")
        self.assertTrue(b.libros["Libro1"])
        self.assertEqual(str(b), "Biblioteca(libros: {'Libro1': True, 'Libro2': True, 'Libro3': True})")

if __name__ == "__main__":
    unittest.main()
