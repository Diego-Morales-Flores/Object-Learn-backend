
import unittest
from problema import CuentaAhorros

class TestCuentaAhorros(unittest.TestCase):
    def test_operaciones(self):
        cuenta = CuentaAhorros("Maria Gomez", 500.0)
        self.assertEqual(cuenta.titular, "Maria Gomez")
        self.assertEqual(cuenta.saldo, 500.0)
        
        cuenta.depositar(300.0)
        self.assertEqual(cuenta.saldo, 800.0)
        
        cuenta.retirar(200.0)
        self.assertEqual(cuenta.saldo, 600.0)
        
        self.assertEqual(str(cuenta), "CuentaAhorros(titular: Maria Gomez, saldo: 600.0)")

if __name__ == "__main__":
    unittest.main()
    