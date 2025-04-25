const MetricaHuellaDeCarbonoV4 = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto text-center border">
      {/* Título */}
      <p className="text-green-600 font-bold text-sm">
        tCO₂ al año per cápita en el mundo
      </p>
      <p className="text-gray-700 text-xs">
        4.83 toneladas al año por habitante
      </p>

      {/* Imagen del globo */}
      <div className="flex justify-center mt-4">
        <img
          src="src/assets/m2.png" // Cambia esta ruta por la ubicación de tu imagen
          alt="Globo terráqueo"
          className="w-32 h-32"
        />
      </div>
    </div>
  );
};

export default MetricaHuellaDeCarbonoV4;
