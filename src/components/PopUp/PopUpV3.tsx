import React from "react";

const PopUpV3 = () => {
  return (
    <div className=" flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-md text-center shadow-lg">
        <div className="flex flex-col items-center mb-4">
          <img
            src="/src/assets/Safety.png" // Cambia esta ruta por la ubicación de tu imagen
            alt="Shield Icon"
            className="w-16 h-16 mb-2"
          />
          <h2 className="text-xl font-semibold">Rechazar Solicitud</h2>
        </div>
        <p className="text-gray-700">
          Estás a punto de rechazar la solicitud de{" "}
          <strong>[Nombre del Vendedor]</strong> para convertirse en vendedor.
          Esta acción no se puede deshacer y el vendedor no podrá acceder a la
          plataforma.
        </p>
        <p className="text-gray-700 mt-2">
          ¿Estás seguro de que deseas continuar?
        </p>
        <div className="flex justify-around mt-6">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
            Confirmar
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpV3;
