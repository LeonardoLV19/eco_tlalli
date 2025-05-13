import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"

type ProductCardProps = {
  checked: boolean
  onCheckedChange: (value: boolean) => void
  count: number
  onCountChange: (newCount: number) => void
}

export function ProductCard({ count, onCountChange }: ProductCardProps) {
  return (
    <div className="flex items-start gap-2 w-full max-w-[1280px]">

      {/* Tarjeta como grid de 2 columnas */}
      <Card className="grid grid-cols-[311px_1fr] w-full h-[144px] shadow-lg rounded-lg overflow-hidden p-0">
        {/* Imagen */}
        <div className="relative w-full h-full">
          <Image
            src="/solarPanel.png"
            alt="Solar panels"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Contenido */}
        <CardContent className="flex flex-col justify-between bg-white p-4">
          {/* Arriba: título + estrellas */}
          <div>
            <h2 className="text-[24px] font-bold font-sans text-black">
              Elios Terra G8 | Ground Mount System For 8 Solar Panel
            </h2>
            <div className="flex items-center gap-1 mt-2">
              <Star fill="black" className="w-5 h-5" />
              <Star className="w-5 h-5" />
              <Star className="w-5 h-5" />
            </div>
          </div>

          {/* Centro: precio */}
          <span className="text-[#258429] text-[16px] font-bold">
            $52,272 MXN
          </span>

          {/* Abajo‑derecha: contador controlado */}
          <div className="flex items-center gap-4 self-end">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => onCountChange(Math.max(1, count - 1))}
            >
              −
            </Button>
            <span className="text-lg">{count}</span>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => onCountChange(count + 1)}
            >
              +
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}