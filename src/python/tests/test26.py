
import unittest
from problema import Persona, Empleado, Empresa

class TestEmpresa(unittest.TestCase):
    def test_operaciones(self):
        emp1 = Empleado("Alice", 30, "Ingeniera")
        emp2 = Empleado("Bob", 25, "Contador")
        empresa = Empresa()
        empresa.agregar_empleado(emp1)
        empresa.agregar_empleado(emp2)
        
        self.assertIn(emp1, empresa.empleados)
        self.assertIn(emp2, empresa.empleados)
        
        empresa.eliminar_empleado(emp2)
        self.assertNotIn(emp2, empresa.empleados)
        
        empleados_str = empresa.mostrar_empleados()
        self.assertIn("Empleado(nombre: Alice, edad: 30, puesto: Ingeniera)", empleados_str)

if __name__ == "__main__":
    unittest.main()
