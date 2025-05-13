'use client'
import React, { useState } from 'react'
import QuoteHistoryCard from '@/components/QuoteHistoryCard/QuoteHistoryCard'
import DoubleButtons from '@/components/DoubleButtons/DoubleButtons'
import ShoppingHistory from '@/components/ShoppingHistory/ShoppingHistory'

export default function PurchasesQuotes() {
  const [selectedTab, setSelectedTab] = useState<'compras' | 'cotizaciones'>('compras')

  return (
    <div className="p-6 space-y-6">
      <DoubleButtons selectedTab={selectedTab} onChange={setSelectedTab} />

      {selectedTab === 'compras' && (
        <>
        <p className="text-sm font-bold ml-6">Marzo 2025</p>

          <ShoppingHistory 
            price="$52,272" 
            title="Elios Tierra G8 | Ground Mount System For 8 Solar Panel" 
            date="30 de Marzo de 2025" 
            imageUrl="/paneles.png"
          />
          <ShoppingHistory 
            price="$52,272" 
            title="Elios Tierra G8 | Ground Mount System For 8 Solar Panel" 
            date="20 de Febrero de 2025" 
            imageUrl="/paneles.png"
          />

          <p className="text-sm font-bold ml-6">Febrero 2025</p>

          <ShoppingHistory 
            price="$52,272" 
            title="Elios Tierra G8 | Ground Mount System For 8 Solar Panel" 
            date="30 de Marzo de 2025" 
            imageUrl="/paneles.png"
          />
          <ShoppingHistory 
            price="$52,272" 
            title="Elios Tierra G8 | Ground Mount System For 8 Solar Panel" 
            date="20 de Febrero de 2025" 
            imageUrl="/paneles.png"
          />
        </>
      )}

      {selectedTab === 'cotizaciones' && (
        <>
            <p className="text-sm font-bold ml-6">Febrero 2025</p>
            <div className="space-y-15">
          <QuoteHistoryCard
            price="82,272 MXN"
            date="30 de Marzo de 2025"
            energyCurrent={100} 
            energyWithProduct={400} 
            moneyCurrent={2000} 
            moneyWithProduct={10000}
          />
          <QuoteHistoryCard
            price="52,272 MXN"
            date="10 de Marzo de 2025"
            energyCurrent={200} 
            energyWithProduct={400} 
            moneyCurrent={4000} 
            moneyWithProduct={10000}
          />
          </div>
        </>
      )}
    </div>
  )
}
