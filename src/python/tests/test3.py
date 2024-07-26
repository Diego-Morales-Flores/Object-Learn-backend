
import unittest
from problema import OperacionMatematica

class TestOperacionMatematica(unittest.TestCase):
    def test_operaciones(self):
        op = OperacionMatematica()
        self.assertEqual(op.sumar(1, 2), 3)
        self.assertEqual(op.restar(5, 3), 2)
        self.assertEqual(op.multiplicar(4, 3), 12)
        self.assertEqual(op.dividir(10, 2), 5)
        with self.assertRaises(ZeroDivisionError):
            op.dividir(10, 0)

if __name__ == "__main__":
    unittest.main()
    