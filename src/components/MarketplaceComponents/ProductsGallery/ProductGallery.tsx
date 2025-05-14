import React from "react";
// Ajusta la ruta según la ubicación real del archivo ProductCard.tsx
import ProductCard from "./ProductCard/ProductCard";

// Ejemplo de lista de productos
const products = [
  {
    id: 1,
    name: "Panel Solar 300W",
    price: 3500,
    image: "/products/panel-solar.jpg",
    description: "Panel solar de alta eficiencia.",
  },
  {
    id: 2,
    name: "Purificador de Agua",
    price: 1200,
    image: "/products/purificador-agua.jpg",
    description: "Purificador para el hogar.",
  },
  // ...más productos
];

const ProductGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGallery;
