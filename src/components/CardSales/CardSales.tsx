import { Card, CardContent } from "@/components/ui/card";

export function CardSales() {
  return (
    <Card className="w-[258px] h-[96px] rounded-[7px] shadow-md">
      <CardContent className="p-4 flex flex-col justify-center h-full">
        <span className="text-[13px] font-medium text-[#258429] font-sans">
          Ventas totales
        </span>
        <span className="text-[21px] font-medium text-black font-sans">
          $52,000 MXN
        </span>
      </CardContent>
    </Card>
  );
}
