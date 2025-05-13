"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RegisterProduct() {
  const router = useRouter();
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files).slice(0, 6); // Máximo 6 imágenes
      setImages(files);
    }
  };

  const handleCancelRegisterProduct = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault(); // Previene el envío del formulario
    router.push("/vendors"); // Redirige a la página de vendors
  };

  return (
    <div className="relative px-6 md:px-20 pt-1 pb-35 bg-white overflow-hidden">
      {/* Plantas decorativas flotantes */}
      <Image
        src="/Background.png"
        alt="Decoración plantas"
        width={1000}
        height={1}
        className="absolute bottom-0 left-0"
      />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center gap-y-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Registrar Producto
        </h1>
        <form className="w-full max-w-2xl bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Nombre del Producto
            </label>
            <input
              type="text"
              placeholder="Ej. Maceta ecológica"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Descripción
            </label>
            <textarea
              placeholder="Describe tu producto"
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows={4}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Cantidad Disponible
            </label>
            <input
              type="number"
              placeholder="Ej. 10"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Precio</label>
            <input
              type="number"
              placeholder="Ej. 150.00"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Imágenes del Producto (Máximo 6)
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <div className="flex flex-wrap gap-4 mt-4">
              {images.map((image, index) => (
                <div key={index} className="w-24 h-24 relative">
                  <Image
                    src={URL.createObjectURL(image)}
                    alt={`Imagen ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <button
              onClick={handleCancelRegisterProduct}
              className="w-full bg-red-800 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
            >
              Registrar Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
