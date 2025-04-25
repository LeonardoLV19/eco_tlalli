import React from "react";

interface PopUpV2Props {
  onConfirm: () => void;
  onCancel: () => void;
}

const PopUpV2: React.FC<PopUpV2Props> = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-md text-center shadow-lg">
        <div className="flex flex-col items-center mb-4">
          <img
            src="/src/assets/Safety.png" // Cambia esta ruta por la ubicación de tu imagen
            alt="Shield Icon"
            className="w-16 h-16 mb-2"
          />
          <h2 className="text-xl font-semibold">Eliminar vendedor</h2>
        </div>
        <p className="text-gray-700">
          Estás a punto de eliminar <strong>[Nombre del Vendedor]</strong> de tu
          catálogo. Esta acción no se puede deshacer y el producto dejará de
          estar disponible para los clientes.
        </p>
        <p className="text-gray-700 mt-2">
          ¿Estás seguro de que deseas continuar?
        </p>
        <div className="flex justify-around mt-6">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            onClick={onConfirm}
          >
            Confirmar
          </button>
          <button
            className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition"
            onClick={onCancel}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpV2;
