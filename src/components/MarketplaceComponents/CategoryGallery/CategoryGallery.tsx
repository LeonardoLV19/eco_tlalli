"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const categories = [
    {
      id: 1,
      name: "Paneles Solares",
      icon: "/Marketplace/CategoryIcons/PanelSolar.png",
    },
    {
      id: 2,
      name: "Calentadores de Agua",
      icon: "/Marketplace/CategoryIcons/CalentadorDeAgua.png",
    },
    {
      id: 3,
      name: "Purificadores de Aire",
      icon: "/Marketplace/CategoryIcons/PurificadorAire.png",
    },
    {
      id: 4,
      name: "Recolección de Agua",
      icon: "/Marketplace/CategoryIcons/RecoleccionDeAgua.png",
    },
    {
      id: 5,
      name: "Purificadores de Agua",
      icon: "/Marketplace/CategoryIcons/PurificadorDeAgua.png",
    },
    {
      id: 6,
      name: "Compostadores",
      icon: "/Marketplace/CategoryIcons/Compostador.png",
    },
    {
      id: 7,
      name: "Generadores Eólicos",
      icon: "/Marketplace/CategoryIcons/Compostador.png",
    },
    {
      id: 8,
      name: "Generadores Eólicos",
      icon: "/Marketplace/CategoryIcons/Compostador.png",
    },
  ];

  // Número de categorías visibles según el tamaño de pantalla
  const [visible, setVisible] = useState(3);
  const [start, setStart] = useState(0);

  // Cambia el número de visibles según el ancho de pantalla
  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1500) setVisible(5);
      else setVisible(8);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const end = start + visible;
  const canPrev = start > 0;
  const canNext = end < categories.length;

  return (
    <div className="relative px-1 sm:px-2 md:px-20 pt-1 pb-10 bg-white mx-[10%]">
      <div className="bg-white py-6 sm:py-8 md:py-10">
        <h2 className="text-left text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6">
          Browse by Category
        </h2>
        <div className="flex items-center justify-center">
          <button
            onClick={() => setStart((s) => Math.max(0, s - 1))}
            className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition mr-2'
            }`}
            aria-label="Anterior"
          >
            &#8592;
          </button>
          <div className="flex flex-row gap-2 sm:gap-4 md:gap-6 items-center">
            {categories.slice(start, end).map((category) => (
              <div
                key={category.id}
                className="flex-shrink-0 w-16 h-20 sm:w-20 sm:h-24 md:w-28 md:h-32 bg-gray-100 rounded-lg shadow-md flex flex-col justify-center items-center hover:shadow-lg transition"
              >
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={40}
                  height={40}
                  className="mb-1 sm:mb-2 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 object-contain"
                />
                <p className="text-center text-[10px] sm:text-xs md:text-sm font-medium">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={() =>
              setStart((s) => Math.min(categories.length - visible, s + 1))
            }
            className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition ml-2'
            }`}
            aria-label="Siguiente"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}
