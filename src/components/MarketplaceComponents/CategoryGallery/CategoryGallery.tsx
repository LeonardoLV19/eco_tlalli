"use client";

import React from "react";
import Image from "next/image";

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
];

export default function Gallery() {
  return (
    <div className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-left text-lg sm:text-xl md:text-2xl font-medium mb-6">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center justify-between bg-gray-50 rounded-2xl p-6 h-40 shadow-sm"
            >
              <div className="flex flex-col justify-between h-full">
                <span className="text-lg font-semibold text-gray-800 mb-2">
                  {category.name}
                </span>
                <button className="text-sm font-semibold text-black flex items-center gap-1 hover:underline">
                  SHOP NOW <span className="ml-1">&#8594;</span>
                </button>
              </div>
              <div className="flex-shrink-0 ml-4">
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
