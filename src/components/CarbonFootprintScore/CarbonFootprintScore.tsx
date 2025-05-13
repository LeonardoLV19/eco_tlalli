"use client"
import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
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
const chartData = [{ month: "january", rojo: 500, rosa: 171, amarillo: 100, verde: 50 }]
const chartConfig = {
    amarillo: {
        label: "Amarillo",
        color: "rgb(255, 235, 58)",
      },
  rojo: {
    label: "Rojo",
    color: "rgb(255, 113, 139)",
  },
  rosa: {
    label: "Rosa",
    color: "rgb(252, 181, 195)",
  },
  
  verde: {
    label: "Verde",
    color: "rgb(127, 228, 126)",
  },
} satisfies ChartConfig
export function CarbonFootprintScore() {
  const totalVisitors = chartData[0].rojo + chartData[0].rosa + chartData[0].amarillo + chartData[0].verde
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
      <CardDescription>Estadisticas</CardDescription>
        <CardTitle>Puntaje Huella de Carbono</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto w-[300px] h-[300px] border"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-foreground font-bold"
                        >
                            Tu puntaje es
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 25}
                          className="fill-muted-foreground"
                        >
                          Actualizacion Nov
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 39}
                          className="fill-muted-foreground"
                        >
                            24, 2022
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="verde"
              fill="var(--color-verde)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="amarillo"
              fill="var(--color-amarillo)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="rosa"
              fill="var(--color-rosa)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="rojo"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-rojo)"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default CarbonFootprintScore