import React, { useState } from "react";

const MetodoPagoDesplegable = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("Selecciona un método");

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleSelect = (method: string) => {
    setSelectedMethod(method);
    setMenuVisible(false); // Cierra el menú después de seleccionar
  };

  return (
    <div className="relative max-w-xs mx-auto">
      {/* Botón principal */}
      <button
        onClick={toggleMenu}
        className="w-full flex justify-between items-center p-2 bg-gray-200 border rounded-md shadow-sm text-gray-700 text-sm focus:outline-none"
      >
        <span>{selectedMethod}</span>
        <span className="text-gray-500">▼</span>
      </button>

      {/* Menú desplegable */}
      {menuVisible && (
        <div className="absolute left-0 mt-1 w-full bg-white border rounded-md shadow-md z-10">
          <ul className="text-sm text-gray-700">
            <li
              onClick={() => handleSelect("Mastercard")}
              className="px-3 py-1 hover:bg-green-100 cursor-pointer"
            >
              Mastercard
            </li>
            <li
              onClick={() => handleSelect("Visa")}
              className="px-3 py-1 hover:bg-green-100 cursor-pointer"
            >
              Visa
            </li>
            <li
              onClick={() => handleSelect("Stripe")}
              className="px-3 py-1 hover:bg-green-100 cursor-pointer"
            >
              Stripe
            </li>
            <li
              onClick={() => handleSelect("PayPal")}
              className="px-3 py-1 hover:bg-green-100 cursor-pointer"
            >
              PayPal
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MetodoPagoDesplegable;
