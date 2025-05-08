"use client";

import React from "react";
import Image from "next/image";

export default function Header() {
  const title = "Nuevo artículo Limpia Culos Max de 200ml";
  const description =
    "Satisface tus necesidades con este increíble producto. ¡Prueba lo mejor para tu hogar!";

  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden mb-10">
      {/* Imagen de fondo */}
      <Image
        src="/marketplaceimage.png" // Cambia esta ruta por la imagen que desees
        alt="Encabezado del Marketplace"
        fill
        objectFit="cover"
        className="rounded-lg"
        priority={true}
      />
      {/* Contenido del encabezado */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-white text-sm md:text-base mb-4">{description}</p>
        <button className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-100 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
}
