"use client"; // Asegúrate de tener esta directiva si usas hooks

import { useState } from "react";
import { ReceiptButton } from "@/components/ReceiptButton/receiptButton";
import Pill from "@/components/Pill/Pill";
import React from "react";

const Page = () => {
  // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [presupuesto, setPresupuesto] = useState("");

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Función para manejar el cambio en el input del presupuesto
  const handlePresupuestoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPresupuesto(event.target.value);
  };

  // Función para manejar el envío del presupuesto y redirigir
  const handleContinue = () => {
    // Redirigir a otra página (puedes usar next/router para hacerlo de manera programática)
    window.location.href = "/cotizar_2"; // Cambia esto por la ruta que desees
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-40">
      <ReceiptButton />
      <Pill text="Calcular" color="personalizada" onClick={openModal} />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
          <div className="bg-white p-8 rounded-lg w-96 shadow-lg relative z-10">
            <h2 className="text-2xl font-bold mb-4">Ingresa tu presupuesto</h2>
            <input
              type="number"
              value={presupuesto}
              onChange={handlePresupuestoChange}
              placeholder="Tu presupuesto"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <div className="flex justify-between">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-md"
                onClick={closeModal}
              >
                Cancelar
              </button>
              <button
                className="bg-[#4CAF4F] text-white py-2 px-4 rounded-md"
                onClick={handleContinue}
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
