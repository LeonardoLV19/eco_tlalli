"use client";
import CarbonFootprintRadialChart from '@/components/CarbonFootprintRadialChart/CarbonFootprintRadialChart'
import CarbonFootprintScore from '@/components/CarbonFootprintScore/CarbonFootprintScore'
import CardPerCapita from '@/components/CardPerCapita/CardPerCapita'
import ResumenCard from '@/components/resumen/Resumen'
import Pill from '@/components/Pill/Pill'

import React from 'react'

const Page = () => {

     // Función para manejar el envío del presupuesto y redirigir
  const handleContinue = () => {
    // Redirigir a otra página (puedes usar next/router para hacerlo de manera programática)
    window.location.href = "/cotizar"; // Cambia esto por la ruta que desees
  };

  return (
    <div className="flex flex-col gap-6 p-6 ">

      {/* Fila de resumen cards */}
      <div className="grid grid-cols-4 gap-4">
        <ResumenCard />
        <ResumenCard />
        <ResumenCard />
        <ResumenCard />
      </div>

      {/* Fila con el score a la izquierda y el radial chart a la derecha */}
      <div className="grid grid-cols-2 gap-4">
        <CarbonFootprintScore />
        <CarbonFootprintRadialChart />
      </div>

      {/* Fila con las cards per cápita */}
      <div className="grid grid-cols-2 gap-4">
        <CardPerCapita
          title="Promedio por persona"
          subtitle="En México, el promedio es de 3.87 tCO₂ por año"
          image="/mexico.png"
        />
        <CardPerCapita
          title="Promedio por persona"
          subtitle="En el mundo, el promedio es de 4.83 tCO₂ por año"
          image="/mundo.png"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <CardPerCapita
            title="Promedio por persona"
            subtitle="En México, el promedio es de 3.87 tCO₂ por año"
            image="/carro.png"
        />
        <CardPerCapita
            title="Promedio por persona"
            subtitle="En el mundo, el promedio es de 4.83 tCO₂ por año"
            image="/avion.png"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <CardPerCapita
            title="Promedio por persona"
            subtitle="En México, el promedio es de 3.87 tCO₂ por año"
            image="/gasolina.png"
        />
        <CardPerCapita
            title="Promedio por persona"
            subtitle="En el mundo, el promedio es de 4.83 tCO₂ por año"
            image="/foco.png"
        />
      </div>
      <div className="justify-center flex gap-4 pt-5">
        <Pill text="Mejorar mi huella de carbono" color="personalizada" onClick={handleContinue} />
      </div>

    </div>
  )
}

export default Page
