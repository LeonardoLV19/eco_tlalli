'use client'

import React from 'react'

interface DoubleButtonsProps {
  selectedTab: 'compras' | 'cotizaciones'
  onChange: (tab: 'compras' | 'cotizaciones') => void
}

export function DoubleButtons({ selectedTab, onChange }: DoubleButtonsProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="inline-flex rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <button
          onClick={() => onChange('compras')}
          className={`px-6 py-3 font-bold text-base transition-colors duration-200 ${
            selectedTab === 'compras'
              ? 'bg-[#4CAF4F] text-black'
              : 'bg-white text-black'
          }`}
        >
          Compras
        </button>
        <button
          onClick={() => onChange('cotizaciones')}
          className={`px-6 py-3 font-bold text-base transition-colors duration-200 ${
            selectedTab === 'cotizaciones'
              ? 'bg-[#4CAF4F] text-black'
              : 'bg-white text-black'
          }`}
        >
          Cotizaciones
        </button>
      </div>
    </div>
  )
}

export default DoubleButtons
