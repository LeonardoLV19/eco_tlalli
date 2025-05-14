"use client"
import { Users, AlertTriangle, TrendingUp } from "lucide-react"

export const CardPerCapita = () => {
  const userFootprint = 6.02;
  const worldAverage = 4.83;
  const difference = Number(((userFootprint - worldAverage) / worldAverage * 100).toFixed(0));
  const isCritical = difference > 50;

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-blue-100 p-2 rounded-full">
          <Users className="text-blue-600" size={18} />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Huella per cápita</h3>
          <p className="text-sm text-gray-500">Comparación con promedios</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
          <p className="text-xs text-gray-600 mb-1 flex items-center gap-1">
            <span>Mundial</span>
          </p>
          <p className="text-xl font-bold text-gray-800">4.83 <span className="text-gray-500 text-sm">tCO₂</span></p>
        </div>
        
        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
          <p className="text-xs text-gray-600 mb-1 flex items-center gap-1">
            <span>México</span>
          </p>
          <p className="text-xl font-bold text-gray-800">3.52 <span className="text-gray-500 text-sm">tCO₂</span></p>
        </div>
      </div>
      
      {/* Indicador de impacto mejorado */}
      <div className={`mt-4 p-3 rounded-lg border ${
        isCritical 
          ? 'bg-red-50 border-red-200' 
          : 'bg-amber-50 border-amber-200'
      }`}>
        <div className="flex items-start gap-2">
          {isCritical ? (
            <AlertTriangle className="text-red-500 mt-0.5 flex-shrink-0" size={16} />
          ) : (
            <TrendingUp className="text-amber-500 mt-0.5 flex-shrink-0" size={16} />
          )}
          <div>
            <p className="text-sm font-medium">
              Tu huella: <span className="font-bold">6.02 tCO₂</span>
            </p>
            <p className={`text-xs ${
              isCritical ? 'text-red-600' : 'text-amber-600'
            }`}>
              <span className="font-semibold">
                {difference}% {isCritical ? 'mayor' : 'por encima'} 
              </span> 
              del promedio mundial
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {isCritical 
                ? 'Impacto ambiental crítico' 
                : 'Impacto superior al recomendado'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}