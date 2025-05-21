'use client'

import React, { useState, useEffect, useRef } from 'react'
import Switch from '@mui/material/Switch'
import { styled } from '@mui/material/styles'
import { Card, CardContent } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from 'recharts'

// Datos
const energeticData = [
  { name: 'Agua', Futuro: 957, Actual: 1249, Label: '120 litros' },
  { name: 'Gas', Futuro: 1832, Actual: 2832, Label: '13200 kWh' },
  { name: 'Electricidad', Futuro: 5500, Actual: 3682, Label: '9182 kWh' },
]

const economicData = [
  { name: 'Agua', Futuro: 55, Actual: 78, Label: '$78' },
  { name: 'Gas', Futuro: 150, Actual: 190, Label: '$190' },
  { name: 'Electricidad', Futuro: 300, Actual: 370, Label: '$370' },
]

// Switch personalizado verde
const CustomSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#258429',
    '&:hover': {
      backgroundColor: 'rgba(37, 132, 41, 0.08)',
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#258429',
  },
}))

export default function EnergyChartCard2() {
  const [showEconomic, setShowEconomic] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [labelX, setLabelX] = useState(0)

  const data = showEconomic ? economicData : energeticData
  const maxValue = Math.max(...data.map(d => d.Futuro + d.Actual)) * 1.05

  useEffect(() => {
    const updateLabelX = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth
        setLabelX(width - 75)
      }
    }

    updateLabelX()
    window.addEventListener('resize', updateLabelX)
    return () => window.removeEventListener('resize', updateLabelX)
  }, [])

  const CustomLabel = (props: any) => {
    const { y, value } = props
    return (
      <text
        x={labelX - 8}
        y={y + 12}
        fill="#4B5563"
        fontSize={11}
        textAnchor="end"
        className="font-medium"
      >
        {value}
      </text>
    )
  }

  return (
    <Card
      ref={containerRef}
      className="bg-white p-4 shadow-sm rounded-xl max-w-[580px] w-full border border-gray-100"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-xs text-gray-500 font-medium">Estadísticas</p>
            <h2 className="text-lg font-semibold text-gray-800">
              {showEconomic ? 'Ahorro económico' : 'Consumo energético'}
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-2 py-1 rounded-md border border-gray-200 w-fit">
            <span className={`text-xs ${!showEconomic ? 'font-semibold text-gray-800' : 'text-gray-500'}`}>
              Energético
            </span>
            <CustomSwitch
              checked={showEconomic}
              onChange={() => setShowEconomic(prev => !prev)}
              size="small"
            />
            <span className={`text-xs ${showEconomic ? 'font-semibold text-gray-800' : 'text-gray-500'}`}>
              Económico
            </span>
          </div>
        </div>

        <div className="flex gap-3 text-xs items-center">
          <div className="flex items-center gap-1">
            <div className="h-2.5 w-2.5 rounded-full bg-[#258429]" />
            <span className="text-gray-600">Futuro</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-2.5 w-2.5 rounded-full bg-[#CEE9BF]" />
            <span className="text-gray-600">Actual</span>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gray-200 my-3" />

      <CardContent className="h-48 pt-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 5, right: 75, left: 15, bottom: 5 }}
            barCategoryGap={15}
          >
            <XAxis type="number" domain={[0, maxValue]} hide />
            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fontWeight: 500, fill: '#4B5563' }}
            />
            <Tooltip
              formatter={(val: number, name: string) => [`${val}`, name]}
              cursor={{ fill: "transparent" }}
              contentStyle={{
                borderRadius: '6px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                border: 'none',
                background: '#fff',
              }}
            />
            <Bar
              dataKey="Futuro"
              stackId="a"
              fill="#258429"
              radius={[6, 0, 0, 6]}
              background={{ fill: "#F8F8F8", radius: 6 }}
            />
            <Bar
              dataKey="Actual"
              stackId="a"
              fill="#CEE9BF"
              radius={[0, 6, 6, 0]}
            >
              <LabelList dataKey="Label" content={<CustomLabel />} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
