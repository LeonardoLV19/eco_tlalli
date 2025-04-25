import React from "react";

const TablaCotizacionV2 = () => {
  return (
    <div className="max-w-4xl min-w-[800px] mx-auto bg-white rounded-lg shadow-md p-8">
      {/* Encabezado */}
      <div className="bg-gray-900 text-white rounded-t-lg p-4">
        <h2 className="text-md font-semibold flex items-center">
          <span className="mr-2">💡</span> Cotización
        </h2>
        <p className="text-xs font-thin text-left my-2">
          ¿Cuánto ahorrarás ahora con EcoTlalli?
        </p>
      </div>

      {/* Contenido */}
      <div className="p-4 grid grid-cols-4 gap-4 text-gray-800">
        <div>
          <p className="text-sm">Inversión total aproximada:</p>
          <p className="text-sm font-bold text-green-600">52,913 MXN</p>
        </div>
        <div>
          <p className="text-sm">Paneles solares:</p>
          <p className="text-sm font-bold">5</p>
        </div>
        <div>
          <p className="text-sm">Tu recibo actual de luz:</p>
          <p className="text-sm font-bold text-green-600">1,238 MXN</p>
        </div>
        <div>
          <p className="text-sm">Tu nuevo recibo:</p>
          <p className="text-sm font-bold text-green-600">57 MXN</p>
        </div>
        <div>
          <p className="text-sm">Tu recibo actual de agua:</p>
          <p className="text-sm font-bold text-green-600">723 MXN</p>
        </div>
        <div>
          <p className="text-sm">Tu nuevo recibo:</p>
          <p className="text-sm font-bold text-green-600">42 MXN</p>
        </div>
      </div>

      {/* Botón */}
      <div className="text-center mt-4">
        <button className="px-6 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
          Contacta con EcoTlalli
        </button>
      </div>
    </div>
  );
};

export default TablaCotizacionV2;
