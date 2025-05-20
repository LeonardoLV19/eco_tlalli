import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Columna 1 - Logo y descripción */}
          <div>
            <h3 className="text-xl font-bold mb-4">EcoTlalli</h3>
            <p className="text-gray-400">
              Transformando hogares hacia la sustentabilidad desde 2025.
            </p>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div>
            <h4 className="font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/calculadora" className="text-gray-400 hover:text-white transition">
                  Calculadora
                </Link>
              </li>
              <li>
                <Link href="/vendedores" className="text-gray-400 hover:text-white transition">
                  Para vendedores
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacidad" className="text-gray-400 hover:text-white transition">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-gray-400 hover:text-white transition">
                  Términos y condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Contacto y redes (ESPACIO PARA ÍCONOS) */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <p className="text-gray-400 mb-2">contacto@ecotlalli.com</p>
            
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} EcoTlalli. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}