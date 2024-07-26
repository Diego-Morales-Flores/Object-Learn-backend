
import unittest
from problema import CuentaBancaria

class TestCuentaBancaria(unittest.TestCase):
    def test_operaciones(self):
        cuenta = CuentaBancaria("Juan Perez", 1000.0)
        self.assertEqual(cuenta.titular, "Juan Perez")
        self.assertEqual(cuenta.saldo, 1000.0)
        
        cuenta.depositar(500.0)
        self.assertEqual(cuenta.saldo, 1500.0)
        
        cuenta.retirar(300.0)
        self.assertEqual(cuenta.saldo, 1200.0)
        
        self.assertEqual(str(cuenta), "CuentaBancaria(titular: Juan Perez, saldo: 1200.0)")

if __name__ == "__main__":
    unittest.main()
    