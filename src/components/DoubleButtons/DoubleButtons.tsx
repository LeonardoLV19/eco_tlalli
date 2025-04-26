'use client'

import React, { useState } from 'react'

export function DoubleButtons() {
  const [selectedTab, setSelectedTab] = useState<'compras' | 'cotizaciones'>('compras')

  return (
    <div className="flex items-center justify-center">
        <div className="inline-flex rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <button
            onClick={() => setSelectedTab('compras')}
            className={`px-6 py-3 font-bold text-base transition-colors duration-200 ${
            selectedTab === 'compras'
                ? 'bg-[#60A57D] text-black'
                : 'bg-white text-black'
            }`}
        >
            Compras
        </button>
        <button
            onClick={() => setSelectedTab('cotizaciones')}
            className={`px-6 py-3 font-bold text-base transition-colors duration-200 ${
            selectedTab === 'cotizaciones'
                ? 'bg-[#60A57D] text-black'
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
