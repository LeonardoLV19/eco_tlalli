import React from "react";
// Ajusta la ruta según la ubicación real del archivo ProductCard.tsx
import ProductCardMarketplace from "./ProductCardMarketplace/ProductCardMarketplace";

// Ejemplo de lista de productos
const products = [
  {
    id: 1,
    name: "Panel Solar 300W con mucho texto para probar el truncado, y para ver si funciona",
    price: 28.72,
    oldPrice: 35.9,
    discount: 20,
    image: "/products/logo.png",
    description: "Panel solar de alta eficiencia.",
  },
  {
    id: 2,
    name: "Panel Solar 300W",
    price: 28.72,

    image: "/products/logo.png",
    description: "Panel solar de alta eficiencia.",
  },
  {
    id: 3,
    name: "Panel Solar 300W",
    price: 28.72,
    oldPrice: 35.9,
    discount: 20,
    image: "/products/logo.png",
    description: "Panel solar de alta eficiencia.",
  },
  {
    id: 4,
    name: "Panel Solar 300W",
    price: 28.72,
    oldPrice: 35.9,
    discount: 20,
    image: "/products/logo.png",
    description: "Panel solar de alta eficiencia.",
  },
  {
    id: 5,
    name: "Panel Solar 300W",
    price: 28.72,
    oldPrice: 35.9,
    discount: 20,
    image: "/products/logo.png",
    description: "Panel solar de alta eficiencia.",
  },
  {
    id: 6,
    name: "Panel Solar 300W",
    price: 28.72,
    oldPrice: 35.9,
    discount: 20,
    image: "/products/logo.png",
    description: "Panel solar de alta eficiencia.",
  },
  {
    id: 7,
    name: "Panel Solar 300W",
    price: 28.72,
    image: "/products/logo.png",
    description: "Panel solar de alta eficiencia.",
  },
  {
    id: 8,
    name: "Panel Solar 300W",
    price: 28.72,
    oldPrice: 35.9,
    discount: 20,
    image: "/products/logo.png",
    description: "Panel solar de alta eficiencia.",
  },
  // ...más productos
];

const ProductGallery = () => {
  return (
    <div className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-left text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6">
          Productos destacados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCardMarketplace key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
