"use client"

import { TrendingUp } from "lucide-react"
import { LabelList, Legend, RadialBar, RadialBarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
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
    { browser: "electricidad", visitors: 40, fill: "var(--color-electricidad)", name: "Electricidad" },
    { browser: "gas", visitors: 60, fill: "var(--color-gas)", name: "Gas" },
    { browser: "agua", visitors: 80, fill: "var(--color-agua)", name: "Agua" },
    { browser: "transporte", visitors: 100, fill: "var(--color-transporte)", name: "Transporte" },
    { browser: "alimentacion", visitors: 120, fill: "var(--color-alimentacion)", name: "Alimentación" },
    { browser: "residuos", visitors: 150, fill: "var(--color-residuos)", name: "Residuos" },
  ]
  

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  electricidad: {
    label: "Electricidad",
    color: "#1C1B1F",
  },
  gas: {
    label: "Gas",
    color: "#C6D2FD",
  },
  agua: {
    label: "Agua",
    color: "#1B691E",
  },
  transporte: {
    label: "Transporte",
    color: "#6B7280",
  },
  alimentacion: {
    label: "Alimentacion",
    color: "#87C489",
  },
  residuos: {
    label: "Residuos",
    color: "#258429",
  },
} satisfies ChartConfig

export function CarbonFootprintRadialChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardDescription>¿Cuántas toneladas de dióxido de carbono generas al año?</CardDescription>
        <CardTitle>Huella de Carbono</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="w-[900px] h-[400px] border"
        >
          <RadialBarChart
            data={chartData}
            startAngle={-90}
            endAngle={380}
            innerRadius={30}
            outerRadius={110}
            width={900}
            height={300}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />
            <RadialBar dataKey="visitors" background>
            </RadialBar>
            <Legend
              layout="vertical"
              verticalAlign="middle"
              iconType="circle"
              wrapperStyle={{ marginLeft: 180 }}
            />
          </RadialBarChart>
        </ChartContainer>
        <div className="flex pt-7 font-medium text-2xl ml-[-120px]">
          <span>6.02 tCo</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default CarbonFootprintRadialChart
