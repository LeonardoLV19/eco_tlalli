import React from "react";

const TablaCotizacionV2 = () => {
  return (
    <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-sm border bg-white">
      {/* Encabezado */}
      <div className="bg-gray-900 text-white p-5">
        <h2 className="text-base font-semibold flex items-center">
          <span className="mr-2">💡</span> Cotización
        </h2>
        <p className="text-xs font-light mt-1">
          ¿Cuánto ahorrarás ahora con EcoTlalli?
        </p>
      </div>

      {/* Contenido en 4 columnas */}
      <div className="grid grid-cols-4 gap-x-6 px-6 py-5 text-sm text-gray-900">
        {/* Columna 1 */}
        <div>
          <p className="font-medium">Inversión total aproximada:</p>
          <p className="font-bold text-green-600 mb-4">52,913 MXN</p>
        </div>

        {/* Columna 2: Luz */}
        <div>
          <p className="font-medium">Tu recibo actual de luz:</p>
          <p className="font-bold text-green-600 mb-4">1,238 MXN</p>

          <p className="font-medium">Tu nuevo recibo:</p>
          <p className="font-bold text-green-600">57 MXN</p>
        </div>

        {/* Columna 3: Agua */}
        <div>
          <p className="font-medium">Tu recibo actual de agua:</p>
          <p className="font-bold text-green-600 mb-4">723 MXN</p>

          <p className="font-medium">Tu nuevo recibo:</p>
          <p className="font-bold text-green-600">42 MXN</p>
        </div>

        {/* Columna 4: Gas */}
        <div>
          <p className="font-medium">Tu recibo actual de gas:</p>
          <p className="font-bold text-green-600 mb-4">723 MXN</p>

          <p className="font-medium">Tu nuevo recibo:</p>
          <p className="font-bold text-green-600">42 MXN</p>
        </div>
      </div>
    </div>
  );
};

export default TablaCotizacionV2;
