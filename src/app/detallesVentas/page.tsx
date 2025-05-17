'use client'
import { DetallesCard } from "@/components/detallesCard/detallesCard"
import OrderCard from "@/components/OrderCard/OrderCard"
import React from "react"

export default function Home() {
  const orderId = "12345"  // Aquí puedes cambiar el ID del pedido según corresponda.

  return (
    <div className="p-6">
      {/* Título de la página con el ID del pedido */}
      <h1 className="text-2xl mb-6">
        Pedido <span className="font-bold">{orderId}</span>
      </h1>

      {/* Contenedor con fondo gris clarito */}
      <div className="bg-gray-100 p-6 rounded-xl">
        {/* Dos OrderCards una encima de la otra con espaciado */}
        <div className="space-y-6">
          <OrderCard />
          <OrderCard />
        </div>
      </div>

      {/* DetallesCard colocado abajo */}
      <div className="mt-6">
        <DetallesCard />
      </div>
    </div>
  )
}
