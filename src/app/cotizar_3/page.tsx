"use client";

import React from 'react'
import { SavingsDistribution } from '@/components/SavingsCard/SavingsCard';
import SpendingResume from '@/components/SpendingResume/SpendingResume';
import SavingsStatistics from '@/components/SavingsStatistics/SavingsStatistics';
import ActionAreaCard from '@/components/region/Region';
import SpendingByCategory from '@/components/SpendingByCategoryChart/SpendingByCat';
import EnergyLineChartCard from '@/components/gasto/Gasto';
import CarbonFootprintScore from '@/components/CarbonFootprintScore/CarbonFootprintScore';
import EnergyChartCard from '@/components/consumo/Consumo';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import TablaCotizacionV2 from '@/components/TablaCotizacion/TablaCotizacionV2';

const cotizar_3 = () => {
  return (
    <div className="px-4 md:px-12 py-6 space-y-8">
      <div className="w-full max-w-[1380px] mx-auto">
        <SavingsDistribution />
      </div>

      <div className="w-full max-w-[1380px] mx-auto flex flex-wrap justify-center gap-4 translate-y-5">
        <div className="h-[250px] min-w-[320px] w-[360px]">
          <SpendingResume />
        </div>
        <div className="h-[260px] min-w-[360px] w-[420px]">
          <SavingsStatistics />
        </div>
        <div className="h-[250px] min-w-[320px] w-[360px]">
          <ActionAreaCard />
        </div>
      </div>

      <div className="w-full max-w-[1500px] mx-auto flex flex-wrap justify-center gap-6">
        <div className="min-w-[600px] w-[760px] h-[500px] max-w-full flex justify-center items-center">
          <div className="w-full h-full">
            <EnergyLineChartCard />
          </div>
        </div>
        <div className="min-w-[350px] w-[300px] max-w-full h-[300px]">
          <SpendingByCategory />
        </div>
      </div>

      <div className="w-full max-w-[1500px] mx-auto flex flex-wrap justify-center gap-3 md:gap-6">
        <div className="min-w-[350px] w-[350px] h-[500px] max-w-full translate-x-20">
          <CarbonFootprintScore />
        </div>
        <div className="min-w-[900px] w-[1000px] h-[500px] max-w-full translate-x-20">
          <EnergyChartCard />
        </div>
      </div>

      <h2 className="text-xl md:text-3xl font-semibold text-[#141131] text-center md:text-left px-4 md:px-12 -translate-y-30">
        Consumo energético por producto
      </h2>

      <div className="w-full max-w-[1500px] mx-auto -translate-y-30 px-4">
        <ProductDetails />
      </div>

      <div className="w-full px-4 -translate-y-30">
        <TablaCotizacionV2 />
      </div>

      <div className="w-full px-4 -translate-y-20 justify-center flex">
        <button className="px-6 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
          Descargar informe en PDF
        </button>
      </div>
    </div>
  );
};

export default cotizar_3;
