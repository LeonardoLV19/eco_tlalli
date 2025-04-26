"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const chartData = [
    {
      servicio: 'Agua',
      antes: 10,
      promedio: 11,
      despues: 6
    },
    {
      servicio: 'Gas',
      antes: 11,
      promedio: 11,
      despues: 5
    },
    {
      servicio: 'Electricidad',
      antes: 9,
      promedio: 10,
      despues: 6
    }
  ]

export function SpendingByCategory() {
    return (
      <Card className="w-fit mx-auto">
        <CardHeader>
          <CardTitle className="font-bold text-2xl">Gasto por Categoría</CardTitle>
        </CardHeader>
  
        <CardContent>
          {/* Contenedor con tamaño controlado */}
          <div className="w-[650px] h-[550px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} barSize={14} barCategoryGap={20}>
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="4 4" vertical={false} />

                <YAxis
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />

                <XAxis
                  dataKey="servicio"
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
  
                <Tooltip />
  
                <Bar dataKey="antes" fill="#1a1a1a" radius={[999, 999, 999, 999]} />
                <Bar dataKey="promedio" fill="#e1c542" radius={[999, 999, 999, 999]} />
                <Bar dataKey="despues" fill="#2d6a4f" radius={[999, 999, 999, 999]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center pt-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#1a1a1a]" />
              <span className="text-sm text-muted-foreground">Antes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#e1c542]" />
              <span className="text-sm text-muted-foreground">Promedio</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#2d6a4f]" />
              <span className="text-sm text-muted-foreground">Después</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    )
  }
  
export default SpendingByCategory