import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  UsersRound,
  Store,
  ClockArrowDown,
  Layers,
} from "lucide-react";

type InfoBoxVariant = "sellers" | "store" | "requests" | "logs";

interface InfoBoxProps {
  variant?: InfoBoxVariant;
}

const variantConfig: Record<InfoBoxVariant, {
  icon: React.ComponentType<any>;
  iconColor: string;
  title: string;
  value: string;
}> = {
  sellers: {
    icon: UsersRound,
    iconColor: "#258429",
    title: "Vendedores totales",
    value: "25",
  },
  store: {
    icon: Store,
    iconColor: "#258429",
    title: "Ventas totales",
    value: "$54,000 MXN",
  },
  requests: {
    icon: ClockArrowDown,
    iconColor: "#258429",
    title: "Solicitudes",
    value: "30",
  },
  logs: {
    icon: Layers,
    iconColor: "#258429",
    title: "Órdenes totales",
    value: "120",
  },
};

export function InfoBox({ variant = "store" }: InfoBoxProps) {
  const { icon: Icon, iconColor, title, value } = variantConfig[variant];

  return (
    <Card
      className={cn(
        "w-[249.7px] h-[115.46px] rounded-[7px] shadow-md p-4 grid grid-cols-[auto_1fr] items-center gap-4"
      )}
    >
      <div className="w-[45px] h-[45px] flex items-center justify-center">
        <Icon className="w-full h-full" color={iconColor} />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-[12px] font-light text-[#262626] font-sans">
          {title}
        </span>
        <span className="text-[22px] font-semibold text-[#262626] font-sans leading-none">
          {value}
        </span>
      </div>
    </Card>
  );
}
