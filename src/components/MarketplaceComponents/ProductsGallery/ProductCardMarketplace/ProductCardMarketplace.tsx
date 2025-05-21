import React from "react";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  oldPrice?: number;
  discount?: number;
};

type ProductCardProps = {
  product: Product;
};

const ProductCardMarketplace = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl flex flex-col justify-between items-center p-0 transition hover:shadow-lg min-h-[420px] max-h-[520px] min-w-[220px] max-w-[520px] border border-gray-200">
      <div className="flex-1 flex items-center justify-center bg-white pt-6 px-4 rounded-t-xl w-full">
        <Image
          src={product.image}
          alt={product.name}
          width={120}
          height={120}
          className="object-contain"
        />
      </div>
      <div className="w-full bg-white rounded-b-xl px-4 py-4 text-left mt-auto">
        <h3 className="text-sm font-bold text-gray-900 mb-2 truncate">
          {product.name}
        </h3>
        <div className="flex text-left gap-2 mb-1">
          <span className="text-2xl font-medium text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.discount && product.discount > 0 && (
            <span className="text-xs text-blue-600 font-semibold">
              -{product.discount}%
            </span>
          )}
          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCardMarketplace;
