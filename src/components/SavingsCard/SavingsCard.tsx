import { Card } from "@/components/ui/card";

export function SavingsDistribution() {
  const backgroundStyles = {
    backgroundImage: "url('/SavingCardImage.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div 
      className="w-[1285px] h-[264px] rounded-[20px] shadow-lg relative"
      style={backgroundStyles}
    >
      {/* Div para el margen interno */}
      <div className="pt-[10px]">
        {/* Contenido con los paddings originales */}
        <div className="px-[24px]">
          {/* Título */}
          <h1 className="text-[32px] font-medium text-black ml-[10px]">
            Distribución de ahorro
          </h1>
          
          {/* Subtítulo */}
          <p className="text-[16px] font-light text-black mt-[5px] ml-[10px]"> 
            Esto el ahorro histórico en relación con los productos comprados
          </p>

          {/* Fila de cartas */}
          <div className="flex mt-[21px]">
            {/* Carta grande */}
            <div className="ml-[10px]">
              <Card className="w-[306px] h-[127px] rounded-[20px] shadow-md p-[16px] flex flex-col justify-center bg-white">
                <div className="text-[40px] font-medium text-black leading-none">
                  $34,343.00
                </div>
                <p className="text-[20px] font-light text-black mt-[4px]">
                  Ahorro total
                </p>
              </Card>
            </div>

            {/* Cartas pequeñas */}
            <div className="flex gap-[24px] ml-[24px]">
              <SavingsItem amount="$4.5k" label="gas" />
              <SavingsItem amount="$2.2k" label="agua" />
              <SavingsItem amount="$1.7k" label="electricidad" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SavingsItemProps {
  amount: string;
  label: string;
}

function SavingsItem({ amount, label }: SavingsItemProps) {
  return (
    <Card className="w-[239px] h-[127px] rounded-[20px] shadow-md p-[16px] flex flex-col justify-center bg-white">
      <div className="text-[40px] font-medium text-black leading-none">
        {amount}
      </div>
      <p className="text-[20px] font-light text-black mt-[4px]">
        Por {label}
      </p>
    </Card>
  );
}