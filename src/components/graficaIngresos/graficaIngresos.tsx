"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"
import { cn } from "@/lib/utils"

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { name: "Paneles", ingresos: 16 },
  { name: "Focos", ingresos: 19 },
  { name: "Captación de agua", ingresos: 31 },
]

const chartConfig = {
  ingresos: {
    label: "Ingresos",
    color: "#15803d", // verde oscuro
  },
} satisfies ChartConfig

export function GraficaIngresos() {
  return (
    <Card className="w-full max-w-md sm:max-w-lg lg:max-w-xl shadow-lg rounded-xl">
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle className="text-base font-semibold text-black">Ingresos por producto</CardTitle>
          <CardDescription className="text-green-700 font-medium mt-1">+3,4% que el periodo pasado</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData} barCategoryGap={40} height={200}>
            <CartesianGrid vertical={false} stroke="#e5e7eb" />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              style={{ fontSize: "12px", fill: "#6b7280" }}
            />
            <YAxis
              tickFormatter={(value) => `${value}`} // Aquí puedes personalizar cómo se muestran los valores del eje Y
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "12px", fill: "#6b7280" }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="ingresos"
              fill="#15803d"
              radius={[4, 4, 0, 0]}
              barSize={32}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
