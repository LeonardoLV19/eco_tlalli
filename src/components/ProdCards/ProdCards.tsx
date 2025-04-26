// ProductCard.tsx
import React from "react";
import Image from "next/image";

interface ProductCardProps {
  variant: "buyer" | "add" | "seller";
  imageSrc?: string;
  price?: string;
  title?: string;
  rating?: number;
}

const renderStars = (rating: number = 0) => {
  return "★☆☆☆☆".split('').map((star, i) => i < rating ? "★" : "☆").join('');
};

const ProdCards: React.FC<ProductCardProps> = ({
  variant,
  imageSrc = "/solar_panel.jpg",
  price = "",
  title = "",
  rating = 0,
}) => {
  if (variant === "add") {
    return (
      <div className="w-[300px] bg-white rounded-2xl shadow-md p-4 flex flex-col items-center justify-center text-center gap-3">
        <button className="w-[100px] h-[100px] bg-green-500 hover:bg-green-700 active:scale-95 text-white text-5xl rounded-full flex items-center justify-center shadow-md transition-all">
          ＋
        </button>
        <p className="font-bold text-sm mt-2">Agregar un nuevo producto</p>
      </div>
    );
  }

  return (
    <div className="w-[300px] bg-white rounded-2xl shadow-md p-4 flex flex-col text-center gap-2">
      <Image
        src={imageSrc}
        alt={title}
        width={300}
        height={180}
        className="rounded-xl object-cover"
      />

      {variant === "buyer" && (
        <button className="mt-2 bg-green-500 hover:bg-green-700 active:scale-95 text-white font-bold py-2 px-4 rounded-full transition-all">
          Agregar +
        </button>
      )}

      {variant === "seller" && (
        <button className="mt-2 bg-green-500 hover:bg-green-700 active:scale-95 text-white font-bold py-2 px-4 rounded-full transition-all">
          Editar
        </button>
      )}

      <p className="text-green-700 font-bold text-lg">{price}</p>
      <p className="text-gray-700 text-sm">{title}</p>
      <div className="text-lg">{renderStars(rating)}</div>

      {variant === "seller" && (
        <button className="mt-2 bg-red-500 hover:bg-red-700 active:scale-95 text-white font-bold py-2 px-4 rounded-full transition-all">
          Eliminar
        </button>
      )}
    </div>
  );
};

export default ProdCards;
