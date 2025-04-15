import { Button } from "../ui/button";

export function ReceiptButton() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4">
        <div className="flex flex-col items-center gap-2">
          <Button className="w-[350px] h-[350px] p-0 bg-transparent hover:bg-transparent">
            <img 
              src="/recibo_agua.png" 
              alt="Recibo Agua" 
              className="w-full h-full transition-all hover:drop-shadow-[10px_5px_10px_rgba(17,174,167,255)]"
            />
          </Button>
          <p className="text-teal-600 text-lg font-medium">Subir recibo de agua</p>
        </div>
  
        <div className="flex flex-col items-center gap-2">
          <Button className="w-[350px] h-[350px] p-0 bg-transparent hover:bg-transparent">
            <img 
              src="/recibo_luz.png" 
              alt="Recibo Luz" 
              className="w-full h-full transition-all hover:drop-shadow-[10px_5px_10px_rgba(255,236,0,255)]"
            />
          </Button>
          <p className="text-yellow-600 text-lg font-medium">Subir recibo de luz</p>
        </div>
  
        <div className="flex flex-col items-center gap-2">
          <Button className="w-[350px] h-[350px] p-0 bg-transparent hover:bg-transparent">
            <img 
              src="/recibo_gas.png" 
              alt="Recibo Gas" 
              className="w-full h-full transition-all hover:drop-shadow-[10px_5px_10px_rgba(215,45,45,255)]"
            />
          </Button>
          <p className="text-red-600 text-lg font-medium">Subir recibo de gas</p>
        </div>
  
      </div>
    );
  }
  