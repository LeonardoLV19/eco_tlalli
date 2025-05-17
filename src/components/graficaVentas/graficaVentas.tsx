"use client"

import { useState } from "react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

type KeyPoints = {
  [key: number]: number
}

// Días con puntos visibles
const visiblePoints = [1, 4, 8, 12, 18, 24, 30].map((day) => `sept, ${day}`)

const generateData = () => {
  const daysInMonth = 30
  const data: { date: string; value: number }[] = []

  const keyPoints: KeyPoints = {
    1: 0,
    4: 50000,
    8: 20000,
    12: 100000,
    18: 116420,
    24: 70000,
    30: 50000,
  }

  for (let day = 1; day <= daysInMonth; day++) {
    if (keyPoints[day] !== undefined) {
      data.push({ date: `sept, ${day}`, value: keyPoints[day] })
    } else {
      let prevDay = day - 1
      while (prevDay > 0 && keyPoints[prevDay] === undefined) prevDay--

      let nextDay = day + 1
      while (nextDay <= daysInMonth && keyPoints[nextDay] === undefined) nextDay++

      if (prevDay > 0 && nextDay <= daysInMonth) {
        const prevValue = keyPoints[prevDay] || 0
        const nextValue = keyPoints[nextDay] || 0
        const ratio = (day - prevDay) / (nextDay - prevDay)
        const interpolatedValue = prevValue + (nextValue - prevValue) * ratio
        data.push({ date: `sept, ${day}`, value: Math.round(interpolatedValue) })
      } else {
        data.push({ date: `sept, ${day}`, value: 0 })
      }
    }
  }

  return data
}

const data = generateData()

// Componente para el punto personalizado
const CustomDot = (props: any) => {
  const { cx, cy, payload, index } = props
  if (!visiblePoints.includes(payload.date)) return null
  return (
    <circle
      key={`dot-${index}`}
      cx={cx}
      cy={cy}
      r={4}
      fill="#4CAF50"
      stroke="#fff"
      strokeWidth={2}
    />
  )
}

export function GraficaVentas() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <Card className="bg-white shadow-md rounded-xl w-full sm:max-w-lg lg:max-w-xl">
      <CardHeader className="p-4 pb-0">
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-semibold text-green-600">Ingresos</h2>
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-bold">$11.642</p>
            <p className="text-sm text-green-600 font-medium">+3.4% que el mes pasado</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="h-[300px] sm:h-65 p-4 pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            onMouseMove={(state) => {
              if (state?.activeTooltipIndex !== undefined) {
                setActiveIndex(state.activeTooltipIndex)
              }
            }}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#4CAF50" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={true}
              horizontal={false}
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="date"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              ticks={visiblePoints}
            />

            <YAxis
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              axisLine={false}
              tickLine={false}
              domain={[0, 120000]}
              ticks={[0, 20000, 50000, 70000, 100000, 120000]}
              tick={{ fill: "#4CAF50", fontSize: 12 }}
              interval={0}
            />

            <Tooltip
              content={({ active, payload }) => {
                if (active && payload?.length) {
                  return (
                    <div className="bg-white border rounded-md p-2 shadow-sm text-sm">
                      <p className="font-medium">Ingreso</p>
                      <p className="text-xs text-muted-foreground">
                        {payload[0]?.payload.date}
                      </p>
                      <p className="font-semibold" style={{ color: '#258429' }}>
                        ${payload[0]?.payload.value.toLocaleString()}
                      </p>
                    </div>
                  )
                }
                return null
              }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#4CAF50"
              fill="url(#colorGreen)"
              strokeWidth={2}
              dot={<CustomDot />}
              activeDot={{
                r: 6,
                fill: "#4CAF50",
                stroke: "#fff",
                strokeWidth: 1,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
