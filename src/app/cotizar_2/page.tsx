"use client";


import EnergyChartCard2 from '@/components/consumo2/consumo2';
import { ProductCardVariant } from '@/components/MarketplaceComponents/ProductCard/ProductCard';
import TablaCotizacionV1 from '@/components/TablaCotizacion/TablaCotizacionV1';
import Pill from '@/components/Pill/Pill';
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { ProductCardVariant2 } from '@/components/productCard2/productCard2';

const Page = () => {
  return (
    <div className="pt-10 flex flex-col items-center gap-12 bg-gray-200 min-h-screen">
      {/* Main content container */}
      <div className="w-full max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header section */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Optimiza tu consumo energético</h1>
          <p className="text-gray-600">Descubre cómo maximizar tu ahorro con nuestra análisis inteligente</p>
        </div>

        {/* Data visualization section */}
        <div className="w-full flex flex-col lg:flex-row gap-8 mb-12">
          {/* Chart section - now without extra container */}
          <div className="flex-1">
            <EnergyChartCard2 />
          </div>

          {/* Recommended products section */}
          <div className="flex-1 bg-white rounded-2xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)] border border-gray-200/80 overflow-hidden">
<div className="w-full py-4 px-6 bg-[linear-gradient(to_right,_#258429,_#4CAF4F)]"
>
              <h3 className="text-white text-lg font-semibold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Soluciones recomendadas
              </h3>
            </div>
            
            <div className="w-full max-h-[272px] overflow-y-auto pr-3 custom-scrollbar">
              <div className="flex flex-col gap-4">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div 
                    className="flex items-start gap-4 p-3 bg-white/60 rounded-xl hover:bg-green-50 transition-colors border border-gray-100 shadow-sm"
                    key={i}
                  >
                    <Checkbox className="mt-2 border-green-600 data-[state=checked]:bg-green-600" />
                    <ProductCardVariant2 />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="flex justify-center mb-12">
          <Pill 
            text="Ver más detalles" 
            color="personalizada" 
          />
        </div>

        {/* Data table section */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Cotización</h2>
            <div className="text-sm text-gray-400 md:text-right">Última actualización: <span className="font-semibold text-green-600">Hoy</span></div>
          </div>
          <TablaCotizacionV1 />
        </div>
      </div>

    </div>
  );
};


export default Page;

