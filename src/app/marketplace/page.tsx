"use client";

import React from "react";
import Image from "next/image";
import CategoryGallery from "@/components/MarketplaceComponents/CategoryGallery/CategoryGallery";

export default function Header() {
  const title = "Nuevo artículo Limpia Culos Max de 200ml";
  const description =
    "Satisface tus necesidades con este increíble producto. ¡Prueba lo mejor para tu hogar!";

  return (
    <div>
      <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 bg-green-700 overflow-hidden mb-10 flex items-center">
        {/* Imagen a la izquierda */}
        <div className="w-1/2 h-full relative flex items-end">
          <Image
            src="/marketplace/solar-panel.png"
            alt="Panel Solar"
            fill
            className="object-contain translate-y-10 scale-180 rotate-20"
          />
        </div>
        {/* Contenido a la derecha */}
        <div className="w-1/2 h-full flex flex-col justify-center items-start px-10 text-white ml-[15%]">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">{title}</h1>
          <p className="text-sm md:text-base mb-4">{description}</p>
          <button className="bg-white text-black py-2 px-4 hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </div>
      {/* Galería */}
      <CategoryGallery />
    </div>
  );
}
