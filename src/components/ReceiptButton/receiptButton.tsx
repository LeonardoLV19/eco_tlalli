"use client";
import { Button } from "../ui/button";
import { useRef, useState } from "react";

type TipoRecibo = "agua" | "luz" | "gas";

export function ReceiptButton() {
  const inputRefs = {
    agua: useRef<HTMLInputElement>(null),
    luz: useRef<HTMLInputElement>(null),
    gas: useRef<HTMLInputElement>(null),
  };

  const [archivos, setArchivos] = useState<{
    [key in TipoRecibo]?: {
      file: File;
      previewUrl: string;
    };
  }>({});

  const triggerFileInput = (tipo: TipoRecibo) => {
    inputRefs[tipo].current?.click();
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    tipo: TipoRecibo
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setArchivos((prev) => ({
        ...prev,
        [tipo]: { file, previewUrl },
      }));
    }
  };

  const handleVerArchivo = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4">
      {(["agua", "luz", "gas"] as TipoRecibo[]).map((tipo) => {
        const archivo = archivos[tipo];
        const imagenSrc = archivo
          ? "/check.png"
          : `/recibo_${tipo}.png`;

        const colorClase =
          tipo === "agua"
            ? "text-teal-600"
            : tipo === "luz"
            ? "text-yellow-600"
            : "text-red-600";

        const sombraHover =
          tipo === "agua"
            ? "hover:drop-shadow-[10px_5px_10px_rgba(17,174,167,255)]"
            : tipo === "luz"
            ? "hover:drop-shadow-[10px_5px_10px_rgba(255,236,0,255)]"
            : "hover:drop-shadow-[10px_5px_10px_rgba(215,45,45,255)]";

        return (
          <div key={tipo} className="flex flex-col items-center gap-2">
            <Button
              className="w-[350px] h-[350px] p-0 bg-transparent hover:bg-transparent"
              onClick={() => triggerFileInput(tipo)}
            >
              <img
                src={imagenSrc}
                alt={`Recibo ${tipo}`}
                className={`w-full h-full transition-all ${sombraHover}`}
              />
            </Button>

            <input
              ref={inputRefs[tipo]}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileChange(e, tipo)}
            />

            <p className={`text-lg font-medium ${colorClase}`}>
              {archivo ? `Recibo de ${tipo} subido` : `Subir recibo de ${tipo}`}
            </p>

            {archivo && (
              <button
                className="text-sm text-blue-600 underline hover:text-blue-800"
                onClick={() => handleVerArchivo(archivo.previewUrl)}
              >
                Ver archivo subido
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
