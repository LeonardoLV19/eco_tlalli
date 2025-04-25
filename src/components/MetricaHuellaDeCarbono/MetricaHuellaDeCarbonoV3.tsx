const MetricaHuellaDeCarbonoV3 = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto text-center border">
      {/* Título */}
      <p className="text-green-600 font-bold text-sm">
        tCO₂ al año per cápita en México
      </p>
      <p className="text-gray-700 text-xs">
        3.52 toneladas al año por habitante
      </p>

      {/* Imagen del mapa */}
      <div className="flex justify-center mt-4">
        <img
          src="/src/assets/m.png" // Cambia esta ruta por la ubicación de tu imagen
          alt="Mapa de México"
          className="w-40 h-auto"
        />
      </div>
    </div>
  );
};

export default MetricaHuellaDeCarbonoV3;
