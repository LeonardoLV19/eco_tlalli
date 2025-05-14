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
      {/* Fila 1: Tarjeta de ahorro */}
      <div className="w-full max-w-[1380px] mx-auto">
        <SavingsDistribution />
      </div>

      <div className="w-full max-w-[1380px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="h-[250px] ml-[60px]">
          <SpendingResume />
        </div>
        <div className="h-[260px] w-full md:max-w-[420px] ml-[30px]">
          <SavingsStatistics />
        </div>
        <div className="h-[250px] ml-[30px]">
          <ActionAreaCard />
        </div>
      </div>

      <div className='w-full -translate-y-10 flex'>
        <div className="w-[100%] h-full translate-x-60 shrink-0">
          <EnergyLineChartCard />
        </div>
        <div className="h-[30%] -translate-x-145">
          <SpendingByCategory />
        </div>
      </div>
      <div className='max-w-[1500px] mx-auto -translate-y-10 flex'>
        <div className='w-[350px] h-[500px] translate-x-25'>
            <CarbonFootprintScore />
        </div>
        <div className='w-full translate-x-55'>
            <EnergyChartCard />
        </div>
      </div>
      <h2 className="text-xl md:text-3xl font-semibold text-[#141131] translate-x-60 -translate-y-20">
        Consumo energético por producto
      </h2>
      <div className='w-full max-w-[1500px] mx-auto -translate-y-20'>
        <ProductDetails />
      </div>
      <div className='w-full -translate-y-20'>
        <TablaCotizacionV2 />
      </div>
    </div>
  );
};

export default cotizar_3;
