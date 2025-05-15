"use client";

import React from "react";
import CategoryGallery from "@/components/MarketplaceComponents/CategoryGallery/CategoryGallery";
import MainBanner from "@/components/MarketplaceComponents/MainBanner/MainBanner";
import ProductGallery from "@/components/MarketplaceComponents/ProductsGallery/ProductGallery";
import CategoryFilterSelection from "@/components/MarketplaceComponents/CategoryFilterSelection/CategoryFilterSelectio";

export default function Header() {
  const title = "Nuevo artículo Limpia Culos Max de 200ml";
  const description =
    "Satisface tus necesidades con este increíble producto. ¡Prueba lo mejor para tu hogar!";

  return (
    <div>
      <CategoryFilterSelection />
      {/* Banner principal */}
      <MainBanner title={title} description={description} />
      {/* Galería */}
      <CategoryGallery />
      {/* Galería de productos */}
      <ProductGallery />
      <footer className="bg-gray-800 text-white py-4 mt-10">
        {/* Aquí puedes poner contenido del footer */}
        Eco Tlalli © 2025
      </footer>
    </div>
  );
}
