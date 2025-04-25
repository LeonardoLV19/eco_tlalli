import React, { useState } from "react";

const CategorySelect = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Seleccionar");

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
    setMenuVisible(false); // Cierra el menú después de seleccionar
  };

  return (
    <div className="relative max-w-xs mx-auto">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Categoría
      </label>
      {/* Botón principal */}
      <button
        onClick={toggleMenu}
        className="w-full flex justify-between items-center p-2 bg-white border rounded-md shadow-sm text-gray-700 text-sm focus:outline-none"
      >
        <span>{selectedCategory}</span>
        <span className="text-gray-500">▼</span>
      </button>

      {/* Menú desplegable */}
      {menuVisible && (
        <div className="absolute left-0 mt-1 w-full bg-white border rounded-md shadow-md z-10">
          <ul className="text-sm text-gray-700">
            <li
              onClick={() => handleSelect("Paneles Solares")}
              className="px-3 py-2 hover:bg-green-100 cursor-pointer"
            >
              Paneles Solares
            </li>
            <li
              onClick={() => handleSelect("Focos")}
              className="px-3 py-2 hover:bg-green-100 cursor-pointer"
            >
              Focos
            </li>
            <li
              onClick={() => handleSelect("Captación de agua")}
              className="px-3 py-2 hover:bg-green-100 cursor-pointer"
            >
              Captación de agua
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategorySelect;
