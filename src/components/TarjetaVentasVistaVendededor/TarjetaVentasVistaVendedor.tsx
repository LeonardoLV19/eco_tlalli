import React, { useState } from "react";

const TarjetaVentasVistaVendedor = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="max-w-sm p-4 bg-white rounded-lg shadow-md border">
      {/* Encabezado */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-green-600 font-medium mt-4 ml-4">
          Ventas totales
        </p>
        <div className="relative">
          {/* Botón de los tres puntos */}
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-700 focus:outline-none mr-4"
          >
            •••
          </button>

          {/* Menú desplegable */}
          {menuVisible && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg">
              <ul className="text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Opción 1
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Opción 2
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Opción 3
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Contenido */}
      <p className="text-2xl text-left font-semibold mt-1 mb-4 ml-4">
        $52,000 MXN
      </p>
    </div>
  );
};

export default TarjetaVentasVistaVendedor;
