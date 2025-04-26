"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { useEffect, useState } from "react"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart"

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl border bg-white p-4 shadow-md ${className}`}>{children}</div>
)
const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4 border-b pb-2">{children}</div>
)
const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-base font-semibold leading-none tracking-tight">{children}</h3>
)
const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`px-2 ${className}`}>{children}</div>
)
const CardFooter = ({ children }: { children: React.ReactNode }) => (
  <div className="pt-4">{children}</div>
)

const energyData = [
  { month: "Ene", Futuro: 50, Actual: 150, Promedio: 250 },
  { month: "Feb", Futuro: 100, Actual: 170, Promedio: 220 },
  { month: "Mar", Futuro: 50, Actual: 150, Promedio: 260 },
  { month: "Abr", Futuro: 150, Actual: 170, Promedio: 310 },
  { month: "May", Futuro: 120, Actual: 140, Promedio: 230 },
  { month: "Jun", Futuro: 153, Actual: 170, Promedio: 310 },
  { month: "Jul", Futuro: 122, Actual: 140, Promedio: 260 },
  { month: "Ago", Futuro: 157, Actual: 180, Promedio: 260 },
  { month: "Sep", Futuro: 80, Actual: 130, Promedio: 330 },
  { month: "Oct", Futuro: 154, Actual: 188, Promedio: 290 },
  { month: "Nov", Futuro: 100, Actual: 135, Promedio: 200 },
  { month: "Dic", Futuro: 250, Actual: 170, Promedio: 340 },
]

const chartConfig = {
  Futuro: {
    label: "Después",
    color: "#258429",
  },
  Actual: {
    label: "Antes",
    color: "#292D30",
  },
  Promedio: {
    label: "Promedio",
    color: "#DDC512",
  },
} satisfies ChartConfig

export default function EnergyLineChartCard() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <Card className="w-[45%] h-[5%]">
      <CardHeader>
        <CardTitle>Gasto</CardTitle>
        <div className="flex gap-4 mt-2">
          <div className="flex items-center gap-2 text-xs">
            <div className="h-3 w-3 rounded-full bg-[#292D30]" /> Antes
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="h-3 w-3 rounded-full bg-[#258429]" /> Después
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="h-3 w-3 rounded-full bg-[#DDC512]" /> Promedio
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0 flex justify-center items-center h-[70%]">
        <div style={{ width: "100%", height: "100%" }}>
          <ChartContainer config={chartConfig}>
            <LineChart data={energyData} width={700} height={300}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                domain={[0, 350]}
                interval={0}
                ticks={[...Array(8).keys()].map(i => i * 50)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line dataKey="Futuro" type="monotone" stroke="#258429" strokeWidth={2} dot={false} />
              <Line dataKey="Actual" type="monotone" stroke="#292D30" strokeWidth={2} dot={false} />
              <Line dataKey="Promedio" type="monotone" stroke="#DDC512" strokeWidth={2} dot={false} />
            </LineChart>
          </ChartContainer>
        </div>
      </CardContent>

    </Card>
  )
}
