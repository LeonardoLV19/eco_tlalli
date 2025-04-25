const Consecuencias = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto text-center border">
      <p className="text-green-600 font-bold mb-4">
        Tu huella equivale a conducir 25,000 Km en auto, lo que equivale a darle
        la vuelta a México 3 veces
      </p>
      <div className="flex justify-center">
        <img
          src="/path/to/car-icon.png" // Cambia esta ruta por la ubicación de tu ícono de auto
          alt="Car Icon"
          className="w-16 h-16"
        />
      </div>
    </div>
  );
};

export default Consecuencias;
