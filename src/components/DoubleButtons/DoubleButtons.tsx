'use client'

import React from 'react'

type TabType = 'compras' | 'cotizaciones' | 'cliente' | 'vendedor'

interface DoubleButtonsProps {
  selectedTab: TabType
  onChange: (tab: TabType) => void
}

export function DoubleButtons({ selectedTab, onChange }: DoubleButtonsProps) {
  const isCompraTabs = selectedTab === 'compras' || selectedTab === 'cotizaciones'
  const isRegistroTabs = selectedTab === 'cliente' || selectedTab === 'vendedor'

  return (
    <div className="flex items-center justify-center">
      {isCompraTabs && (
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
      )}

      {isRegistroTabs && (
        <div className="inline-flex rounded-full overflow-hidden bg-[#b9cc80] shadow-md">
          <button
            onClick={() => onChange('cliente')}
            className={`px-6 py-2 text-sm font-semibold transition-colors duration-200 rounded-full ${
              selectedTab === 'cliente'
                ? 'bg-[#cb8e42] text-[#faf4df]'
                : 'text-[#2c5b30]'
            }`}
          >
            Cliente
          </button>
          <button
            onClick={() => onChange('vendedor')}
            className={`px-6 py-2 text-sm font-semibold transition-colors duration-200 rounded-full ${
              selectedTab === 'vendedor'
                ? 'bg-[#cb8e42] text-[#faf4df]'
                : 'text-[#2c5b30]'
            }`}
          >
            Vendedor
          </button>
        </div>
      )}
    </div>
  )
}

export default DoubleButtons