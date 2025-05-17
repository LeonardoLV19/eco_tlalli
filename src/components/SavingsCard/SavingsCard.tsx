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
      className="w-full max-w-[1285px] mx-auto rounded-[20px] shadow-lg relative bg-cover bg-center bg-no-repeat px-4 sm:px-6 md:px-8 py-4"
      style={backgroundStyles}
    >
      <div className="pt-[10px]">
        <div>
          {/* Título */}
          <h1 className="text-2xl md:text-3xl font-medium text-black ml-2">
            Distribución de ahorro
          </h1>
          
          {/* Subtítulo */}
          <p className="text-base md:text-lg font-light text-black mt-1 ml-2">
            Esto el ahorro histórico en relación con los productos comprados
          </p>

          {/* Fila de cartas */}
          <div className="flex flex-wrap gap-4 mt-6 justify-start">
            {/* Carta grande */}
            <div className="flex-shrink-0">
              <Card className="w-[280px] sm:w-[300px] h-[127px] rounded-[20px] shadow-md p-4 flex flex-col justify-center bg-white">
                <div className="text-[32px] sm:text-[40px] font-medium text-black leading-none">
                  $34,343.00
                </div>
                <p className="text-[18px] sm:text-[20px] font-light text-black mt-1">
                  Ahorro total
                </p>
              </Card>
            </div>

            {/* Cartas pequeñas */}
            <div className="flex flex-wrap gap-4">
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
    <Card className="w-[220px] sm:w-[239px] h-[127px] rounded-[20px] shadow-md p-4 flex flex-col justify-center bg-white">
      <div className="text-[32px] sm:text-[40px] font-medium text-black leading-none">
        {amount}
      </div>
      <p className="text-[18px] sm:text-[20px] font-light text-black mt-1">
        Por {label}
      </p>
    </Card>
  );
}
