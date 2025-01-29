export function DepartamentoCard({ titulo, descripcion }) {
    return (
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center">
        <div className="w-full h-48 bg-gray-300 flex items-center justify-center rounded-lg">
          <span className="text-gray-500">Imagen</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold">{titulo}</h3>
        <p className="text-gray-600">{descripcion}</p>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded">Ver detalles</button>
      </div>
    );
  }