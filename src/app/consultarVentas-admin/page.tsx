"use client"
import React from "react"
import { GraficaVentas } from "@/components/graficaVentas/graficaVentas"
import TarjetaVentasVistaVendedor from "@/components/TarjetaVentasVistaVendededor/TarjetaVentasVistaVendedor"
import { GraficaIngresos } from "@/components/graficaIngresos/graficaIngresos"
import SalesTable from "@/components/SalesTable/SalesTable"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import Link from "next/link"

export default function Home() {
  return (
    <div className="p-6">
      {/* Título de la página */}
      <div className="flex items-center gap-3">
        <Link href="/validationSystem-admin">
          <div className="flex items-center group cursor-pointer">
            <ArrowBackIcon
              sx={{ fontSize: "2rem" }}
              className="text-black align-middle relative top-[-9px] group-hover:text-gray-700 group-active:scale-90 transition-all"
            />
          </div>
        </Link>
        <h1 className="text-2xl mb-6">Estadísticas usuario Saving Energy</h1>
      </div>

      {/* Grid de 5 tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <TarjetaVentasVistaVendedor />
        <TarjetaVentasVistaVendedor />
        <TarjetaVentasVistaVendedor />
        <TarjetaVentasVistaVendedor />
        <TarjetaVentasVistaVendedor />
      </div>

      {/* Contenedor de gráficas lado a lado */}
      <div className="mt-8 bg-[#EDEEEF] p-6 rounded-xl">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <GraficaVentas />
          </div>
          <div className="flex-1">
            <GraficaIngresos />
          </div>
        </div>
      </div>

      {/* Texto de "Pedidos recientes" */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Pedidos recientes</h2>

      {/* Contenedor para la tabla de ventas */}
      <div className="p-7 bg-white rounded-xl shadow-md">
        <SalesTable />
      </div>
    </div>
  )
}
