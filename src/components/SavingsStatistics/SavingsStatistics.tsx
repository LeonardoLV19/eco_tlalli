"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Chart } from "chart.js"

const chartData = [
  { month: "January", gas: 3400, agua: 2200, luz: 1000 },
  { month: "February", gas: 3000, agua: 2200, luz: 1500 },
  { month: "March", gas: 2500, agua: 1700, luz: 500 },
  { month: "April", gas: 3200, agua: 2300, luz: 1800 },
  { month: "May", gas: 3400, agua: 3000, luz: 2100 },
  { month: "June", gas: 3050, agua: 1500, luz: 800 },
  { month: "July", gas: 2800, agua: 1500, luz: 700 },
]

const chartConfig = {
  gas: {
    label: "Gas",
    color: "rgb(124,211,160)",
  },
  agua: {
    label: "Agua",
    color: "rgb(162,195,163)",
  },
  luz: {
    label: "Luz",
    color: "rgb(26,118,30)",
  },
} satisfies ChartConfig

export function Component() {
  return (
    <Card className="w-full max-w-5xl mx-auto p-4">
      <CardHeader className="pb-0">
        <div className="flex justify-between items-start w-full">
          {/* Izquierda: título y descripción */}
          <div>
            <CardDescription>Estadísticas</CardDescription>
            <CardTitle>Ahorro</CardTitle>
          </div>

          {/* Derecha: leyenda de colores */}
          <div className="flex gap-4 text-sm mt-1">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgb(26,118,30)' }} />
              <span className="text-gray-600">Luz</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgb(162,195,163)' }} />
              <span className="text-gray-600">Agua</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgb(124,211,160)' }} />
              <span className="text-gray-600">Gas</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-4">
        <div className="w-full" style={{ height: '80px', width: '80%' }}>
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} barSize={18} className='-translate-y-8'>
                  <CartesianGrid vertical={false} stroke="#E5E7EB" />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                    tickFormatter={(value) => `${value / 1000}k`}
                  />
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Bar dataKey="luz" stackId="a" fill="var(--color-luz)" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="agua" stackId="a" fill="var(--color-agua)" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="gas" stackId="a" fill="var(--color-gas)" radius={[12, 12, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        {/* <div className="flex gap-2 font-medium leading-none">
          Su huella de carbono se redujo 5.7% este último mes
          <TrendingUp className="h-4 w-4" />
        </div> */}
      </CardFooter>
    </Card>
  )
}

export default Component
