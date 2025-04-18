"use client"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
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
const chartData = [
  { month: "January", gas: 340, agua: 220, luz: 100 },
  { month: "February", gas: 300, agua: 220, luz: 150 },
  { month: "March", gas: 250, agua: 170, luz: 50 },
  { month: "April", gas: 320, agua: 230, luz: 180 },
  { month: "May", gas: 340, agua: 300, luz: 210 },
  { month: "June", gas: 305, agua: 150, luz: 80 },
  { month: "July", gas: 280, agua: 150, luz: 70 },
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
    <Card>
      <CardHeader>
      <CardDescription>Estadisticas</CardDescription>
        <CardTitle>Ahorro</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="luz"
              stackId="a"
              fill="var(--color-luz)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="agua"
              stackId="a"
              fill="var(--color-agua)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="gas"
              stackId="a"
              fill="var(--color-gas)"
              radius={[20, 20, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Su huella de carbono se redujo 5.7% este ultimo mes <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}

export default Component