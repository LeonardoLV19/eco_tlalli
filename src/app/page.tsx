"use client";
import React, { useState } from 'react';
import { ProductCard as RawProductCard } from '@/components/ProductCard/ProductCard';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { MoreVertical } from 'lucide-react';

type ControlledProductCardProps = React.ComponentProps<typeof RawProductCard> & {
  checked: boolean
  onCheckedChange: (value: boolean) => void
  count: number
  onCountChange: (newCount: number) => void
}
const ProductCard = RawProductCard as React.FC<ControlledProductCardProps>

const items = [1, 2, 3]
const UNIT_PRICE = 52272
const installationOptions = [
  { id: 'install', label: '¡Quiero que me instalen mi pedido!', cost: 18230 },
  { id: 'self', label: '¡Tengo quien instale mi pedido!', cost: 0 }
]

export default function CartPage() {
  const [selectedIds, setSelectedIds] = useState<number[]>([...items])
  const [quantities, setQuantities] = useState<Record<number, number>>(items.reduce((acc, id) => ({ ...acc, [id]: 1 }), {}))
  const [selectAll, setSelectAll] = useState(true)
  const [installOption, setInstallOption] = useState(installationOptions[0].id)

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked)
    setSelectedIds(checked ? [...items] : [])
  }

  const handleItemSelect = (id: number, checked: boolean) => {
    setSelectedIds(prev => (checked ? [...prev, id] : prev.filter(item => item !== id)))
    if (!checked) setSelectAll(false)
    else if (selectedIds.length + 1 === items.length) setSelectAll(true)
  }

  const handleQuantityChange = (id: number, newCount: number) => {
    setQuantities(prev => ({ ...prev, [id]: Math.max(1, newCount) }))
  }

  const totalProductsCost = selectedIds.reduce((sum, id) => sum + (quantities[id] || 1) * UNIT_PRICE, 0)
  const installCost = installationOptions.find(o => o.id === installOption)?.cost || 0
  const total = totalProductsCost + installCost

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-[1280px] mx-auto p-8">
        <h1 className="text-2xl text-center font-bold mb-4">Tu carrito</h1>

        {/* Select All */}
        <div className="flex items-center mb-4">
          <Checkbox
            checked={selectAll}
            onCheckedChange={(checked: boolean) => handleSelectAll(checked)}
            className="border-green-600 text-green-600"
          />
          <span className="ml-2 text-green-600 font-semibold">Seleccionar todo</span>
        </div>

        {/* Items del Carrito */}
        <div className="space-y-4">
          {items.map(id => (
            <div key={id} className="relative flex items-start gap-2">
              <Checkbox
                checked={selectedIds.includes(id)}
                onCheckedChange={(checked: boolean) => handleItemSelect(id, checked)}
                className="self-start mt-2 border-green-600 text-green-600"
              />
              <div className="flex-1 relative">
                <ProductCard
                  checked={selectedIds.includes(id)}
                  onCheckedChange={(checked: boolean) => handleItemSelect(id, checked)}
                  count={quantities[id]}
                  onCountChange={(newCount: number) => handleQuantityChange(id, newCount)}
                />
                <div className="absolute top-1/2 right-4 -translate-y-1/2">
                  <MoreVertical className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Opciones de Instalación */}
        <div className="mt-8 space-y-4">
          {installationOptions.map(opt => (
            <label key={opt.id} className="flex items-center gap-2 text-green-600 font-semibold">
              <input
                type="radio"
                name="install"
                value={opt.id}
                checked={installOption === opt.id}
                onChange={() => setInstallOption(opt.id)}
                className="accent-green-600"
              />
              <span>
                {opt.label} (${opt.cost.toLocaleString()} MXN)
              </span>
            </label>
          ))}
        </div>

        {/* Total & Botón */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-lg font-bold">Total: ${total.toLocaleString()} MXN</span>
          <Button 
            className="bg-green-600 text-white shadow-accent-foreground hover:shadow-xl active:shadow-inner active:scale-95 transition-all duration-150 py-2 px-6 rounded-lg"
            onClick={() => {
              alert('¡Pedido realizado exitosamente!')
            }}
          >
            ¡Hacer mi pedido!
          </Button>
        </div>
      </main>
    </div>
  )
}