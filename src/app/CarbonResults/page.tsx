"use client"
import { AlertTriangle, Car } from "lucide-react"
import ResumenCard from "@/components/resumen/Resumen"
import { CarbonFootprintRadialChart } from "@/components/CarbonFootprintRadialChart/CarbonFootprintRadialChart"
import { CardPerCapita } from "@/components/CardPerCapita/CardPerCapita"
import MetricaHuellaDeCarbonoV1 from "@/components/MetricaHuellaDeCarbono/MetricaHuellaDeCarbono"
import Pill from "@/components/Pill/Pill";


export default function CarbonFootprintPage() {

   // Función para manejar el envío del presupuesto y redirigir
   const handleContinue = () => {
    // Redirigir a otra página (puedes usar next/router para hacerlo de manera programática)
    window.location.href = "/cotizar"; // Cambia esto por la ruta que desees
  };

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 space-y-6"> {/* Aumenté el ancho máximo y ajusté padding */}
      {/* Header */}
      <header className="text-center mb-6 mt-6"> {/* Reduje el margen inferior */}
        <h1 className="text-gray-600 text-xl md:text-base">Calcula y reduce tu impacto ambiental</h1>
      </header>

      {/* Alerta principal - ahora más compacta */}
      <div className="bg-red-50 border-l-4 border-red-500 p-3 flex items-start gap-2">
        <AlertTriangle className="text-red-500 mt-0.5 flex-shrink-0 h-5 w-5" /> {/* Icono más pequeño */}
        <div>
          <h2 className="font-bold text-red-700 text-sm md:text-base">¡Alerta de Huella de Carbono!</h2>
          <p className="text-red-600 text-xs md:text-sm">Tu huella de carbono es alta, considera reducirla.</p>
        </div>
      </div>

      {/* Primera fila - Métricas principales con menos espacio entre columnas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Reduje el gap */}
        <MetricaHuellaDeCarbonoV1 />
        <CardPerCapita />
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"> {/* Reduje padding */}
          <h2 className="text-lg font-semibold mb-3">Resumen anual</h2> {/* Tamaño más pequeño */}
          <p className="text-3xl font-bold mb-1">6.02 <span className="text-base">tCO₂</span></p> {/* Texto más compacto */}
          <p className="text-gray-600 text-sm mb-3"> {/* Texto más pequeño */}
            Mayor fuente: <span className="font-semibold">Transporte</span>
          </p>
          <ResumenCard />
        </div>
      </div>

      {/* Gráfico radial - ajustado para usar más espacio */}
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
        <h2 className="text-lg font-semibold mb-3">Distribución por categorías</h2>
        <div className="h-80"> {/* Altura fija para consistencia */}
          <CarbonFootprintRadialChart />
        </div>
      </div>

      {/* Equivalencias - ahora en 2 columnas en pantallas grandes */}
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
        <h2 className="text-lg font-semibold mb-3">Tus equivalencias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex items-start gap-2">
            <span className="bg-green-100 text-green-800 rounded-full p-1 text-xs">•</span>
            <p className="text-sm">Conducir <span className="font-semibold">25,000 km</span> (3 vueltas a México)</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-green-100 text-green-800 rounded-full p-1 text-xs">•</span>
            <p className="text-sm">Quemar <span className="font-semibold">15 barriles</span> de petróleo</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-green-100 text-green-800 rounded-full p-1 text-xs">•</span>
            <p className="text-sm"><span className="font-semibold">10 vuelos</span> CDMX-Cancún ida y vuelta</p>
          </div>
        </div>
      </div>

      {/* Recomendaciones - más compacta */}
      <div className="bg-green-50 rounded-xl p-4 border border-green-200">
        <h2 className="text-lg font-semibold mb-2 text-green-800">Mejora tu huella</h2>
        <div className="flex items-start gap-3">
          <Car className="text-green-600 mt-0.5 flex-shrink-0 h-5 w-5" /> {/* Icono más pequeño */}
          <div>
            <h3 className="font-medium text-sm md:text-base">Transporte sostenible</h3>
            <p className="text-gray-600 text-xs md:text-sm">Usa bicicleta o transporte público 2 días por semana</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center pb-10 gap-6 mt-8">
        <Pill
          text="Mejora tu huella de carbono"
          color="personalizada"
          onClick={handleContinue}
        />
      </div>
    </div>
  )
}