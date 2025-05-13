"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function VendorDashboard() {
  const router = useRouter();

  // Datos simulados para productos y ganancias
  const [products, setProducts] = useState([
    { id: 1, name: "Maceta ecológica", price: 150, quantity: 10 },
    { id: 2, name: "Bolsa reutilizable", price: 50, quantity: 25 },
    { id: 3, name: "Panel solar portátil", price: 1200, quantity: 5 },
  ]);

  const totalEarnings = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const handleRegisterProduct = () => {
    router.push("/vendors/new-product"); // Redirige al formulario de registro de productos
  };

  return (
    <div className="relative px-6 md:px-20 pt-1 pb-35 bg-white overflow-hidden">
      {/* Plantas decorativas flotantes */}
      <div className="absolute bottom-0 left-0">
        <img
          src="/Background.png"
          alt="Decoración plantas"
          className="w-full max-w-screen-lg"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center gap-y-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Dashboard de Vendedor
        </h1>

        {/* Resumen de ganancias */}
        <div className="w-full max-w-4xl bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Resumen de Ganancias
          </h2>
          <p className="text-lg text-gray-600">
            Ganancias Totales:{" "}
            <span className="font-bold text-green-500">${totalEarnings}</span>
          </p>
        </div>

        {/* Lista de productos */}
        <div className="w-full max-w-4xl bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Tus Productos
          </h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-300 py-2">Nombre</th>
                <th className="border-b-2 border-gray-300 py-2">Precio</th>
                <th className="border-b-2 border-gray-300 py-2">Cantidad</th>
                <th className="border-b-2 border-gray-300 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="border-b border-gray-300 py-2">
                    {product.name}
                  </td>
                  <td className="border-b border-gray-300 py-2">
                    ${product.price}
                  </td>
                  <td className="border-b border-gray-300 py-2">
                    {product.quantity}
                  </td>
                  <td className="border-b border-gray-300 py-2">
                    ${product.price * product.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Botón para registrar producto */}
        <button
          onClick={handleRegisterProduct}
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
        >
          Registrar Producto
        </button>
      </div>
    </div>
  );
}
