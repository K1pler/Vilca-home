export function Footer() {
    return (
      <footer className="bg-gray-100 py-8 text-center mt-auto">
        <div className="container mx-auto">
          <h3 className="text-lg font-semibold">Vilca-home</h3>
          <p className="text-gray-500">Tu hogar lejos de casa</p>
          <nav className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-black">Inicio</a>
            <a href="#" className="text-gray-600 hover:text-black">Departamentos</a>
            <a href="#" className="text-gray-600 hover:text-black">Contacto</a>
          </nav>
          <p className="text-gray-400 text-sm mt-4">&copy; 2025 Vilca-home. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  }