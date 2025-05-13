// filepath: d:\Bibliotecas\Documentos\Formación_academica\TEC\Semestre 6\P2\Front\Componentes Teams\eco_tlalli\src\components\Gallery.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function Gallery() {
  const categories = [
    { id: 1, name: "Fruits & Vegetables", icon: "/icons/fruits.png" },
    { id: 2, name: "Breads & Sweets", icon: "/icons/breads.png" },
    { id: 3, name: "Frozen Seafoods", icon: "/icons/seafoods.png" },
    { id: 4, name: "Raw Meats", icon: "/icons/meats.png" },
    { id: 5, name: "Wines & Alcohol Drinks", icon: "/icons/wines.png" },
    { id: 6, name: "Coffees and Teas", icon: "/icons/coffees.png" },
    { id: 7, name: "Milks and Dairies", icon: "/icons/milks.png" },
    { id: 8, name: "Pet Foods", icon: "/icons/pet-foods.png" },
  ];

  return (
    <div className="relative px-6 md:px-20 pt-1 pb-35 bg-white overflow-hidden mx-[10%]">
      <div className="bg-white py-10">
        <h2 className=" text-left text-2xl font-medium mb-6">
          Browse by Category
        </h2>
        <div className="flex justify-center items-center gap-6 flex-wrap">
          {categories.map((category) => (
            <div
              key={category.id}
              className="w-32 h-32 bg-gray-100 rounded-lg shadow-md flex flex-col justify-center items-center hover:shadow-lg transition"
            >
              <Image
                src={category.icon} // Cambia esta ruta por las imágenes que desees
                alt={category.name}
                width={50}
                height={50}
                className="mb-2"
              />
              <p className="text-center text-sm font-medium">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
