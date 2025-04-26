'use client'

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts"

// Datos
const data = [
  { name: "Agua", Futuro: 957, Actual: 1249, Label: "120 litros" },
  { name: "Gas", Futuro: 1832, Actual: 2832, Label: "13200 kWh" },
  { name: "Electricidad", Futuro: 5500, Actual: 3682, Label: "9182 kWh" },
]

// Valor máximo para calcular el dominio del eje X
const maxValue = Math.max(...data.map(d => d.Futuro + d.Actual)) * 1.05

export default function EnergyChartCard() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [labelX, setLabelX] = useState(0)

  // Detectar el ancho del contenedor y calcular la posición del label
  useEffect(() => {
    const updateLabelX = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth
        setLabelX(width - 90) // Ajuste desde el borde derecho
      }
    }

    updateLabelX()
    window.addEventListener("resize", updateLabelX)
    return () => window.removeEventListener("resize", updateLabelX)
  }, [])

  // Etiqueta personalizada con x fija
  const CustomLabel = (props: any) => {
    const { y, value } = props

    return (
      <text
        x={labelX}
        y={y + 15}
        fill="#4B5563"
        fontSize={13}
        textAnchor="end"
      >
        {value}
      </text>
    )
  }

  return (
    <Card
      ref={containerRef}
      className="bg-white p-4 shadow-md rounded-xl max-w-[800px] w-full"
    >
<div className="flex justify-between items-center mb-0">
  <div>
    <p className="text-sm text-muted-foreground">Estadísticas</p>
    <h2 className="text-lg font-semibold">Consumo energético</h2>
  </div>
  {/* Modificar esta parte */}
  <div className="flex gap-4 text-sm items-center mt-6">
    <div className="flex items-center gap-1">
      <div className="h-3 w-3 rounded-full bg-[#258429]" /> 
      Futuro
    </div>
    <div className="flex items-center gap-1">
      <div className="h-3 w-3 rounded-full bg-[#CEE9BF]" /> 
      Actual
    </div>
  </div>
</div>

      {/* Línea gris responsiva que abarca todo el ancho de la card */}
      <div className="w-full h-px bg-gray-200 mb-2" />

      <CardContent className="h-56 pt-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 10, right: 95, left: 25, bottom: 10 }}
            barCategoryGap={20}
          >
            <XAxis type="number" domain={[0, maxValue]} hide />
            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fontWeight: 500 }}
            />
            <Tooltip
              formatter={(val: number, name: string) => [`${val}`, name]}
              cursor={{ fill: "transparent" }}
            />
            <Bar
              dataKey="Futuro"
              stackId="a"
              fill="#258429"
              radius={[8, 0, 0, 8]}
              background={{ fill: "#F8F8F8", radius: 8 }}
            />
            <Bar
              dataKey="Actual"
              stackId="a"
              fill="#CEE9BF"
              radius={[0, 8, 8, 0]}
            >
              <LabelList dataKey="Label" content={<CustomLabel />} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
