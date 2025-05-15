import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Star } from "lucide-react"
import Image from "next/image"

export function ProductCard() {
  const [checked, setChecked] = useState(true)
  const [count, setCount] = useState(1)

  return (
    <div className="flex items-start gap-2 w-full max-w-[1280px]">
      {/* Checkbox fuera, controla estado visual */}
      <Checkbox
        className="self-start mt-2 border-green-600 text-green-600"
        checked={checked}
        onCheckedChange={(value) => setChecked(!!value)}
      />

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
            52,272 MXN
          </span>

          {/* Abajo‑derecha: contador visual */}
          <div className="flex items-center gap-4 self-end">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setCount((c) => Math.max(1, c - 1))}
            >
              −
            </Button>
            <span className="text-lg">{count}</span>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setCount((c) => c + 1)}
            >
              +
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function ProductCardVariant() {
    return (
      <div className="flex items-start gap-0 w-full max-w-[476px]">
        <Card className="grid grid-cols-[116px_1fr] w-full h-[103px] shadow-lg rounded-lg overflow-hidden p-0">
          {/* Imagen */}
          <div className="relative w-[116px] h-[103px]">
            <Image
              src="/solarPanel.png"
              alt="Solar panels"
              fill
              sizes="116px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
  
          {/* Contenido con fondo gris */}
          <CardContent className="flex flex-col justify-between bg-white w-full p-0">
            {/* Título y precio */}
            <div className="flex flex-col justify-between h-full p-2">
              <h2 className="text-[16px] font-bold font-sans text-black">
                Elios Terra G8 | Ground Mount System For 8 Solar Panel
              </h2>
              <span className="text-[#258429] text-[16px] font-bold">
                52,272 MXN
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  