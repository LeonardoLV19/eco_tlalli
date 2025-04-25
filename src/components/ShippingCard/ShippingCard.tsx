import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function ShippingCard() {
  return (
    <Card className="w-[118.4px] h-[95.38px] rounded-[7px] flex items-center justify-center shadow-sm">
      <CardContent className="flex flex-col items-center justify-center p-2 text-center">
        {/* Imagen arriba */}
        <div className="relative w-[72px] h-[40px] mb-2">
          <Image
            src="/shipping-icon.png" // asegúrate de tener esta imagen en public/
            alt="Shipping"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        {/* Texto abajo */}
        <span className="text-[11px] font-normal text-[#9B9B9B] font-sans">
          2 - 3 días
        </span>
      </CardContent>
    </Card>
  );
}
