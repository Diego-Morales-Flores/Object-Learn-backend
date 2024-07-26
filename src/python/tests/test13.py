
import unittest
from problema import Playlist

class TestPlaylist(unittest.TestCase):
    def test_operaciones(self):
        p = Playlist(["Cancion1", "Cancion2"])
        p.agregar_cancion("Cancion3")
        self.assertIn("Cancion3", p.canciones)
        p.eliminar_cancion("Cancion2")
        self.assertNotIn("Cancion2", p.canciones)
        self.assertEqual(p.mostrar_playlist(), ["Cancion1", "Cancion3"])
        self.assertEqual(str(p), "Playlist(canciones: ['Cancion1', 'Cancion3'])")

if __name__ == "__main__":
    unittest.main()
