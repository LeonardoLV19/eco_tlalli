"use client"; // Asegúrate de tener esta directiva si usas hooks

import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Question from "@/components/Question/Question";
import Pill from "@/components/Pill/Pill";
import { useState, useEffect } from "react";

const page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Asegurarse de que el código solo se ejecute en el cliente
    if (typeof window !== 'undefined') {
      setIsClient(true); // Ahora sabemos que estamos en el cliente
    }
  }, []);

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1); // Avanzar al siguiente paso
    } else {
      // Redirigir a la nueva página cuando el último paso es completado
      window.location.href = "/CarbonResults"; // Cambia '/resultado' por la ruta que desees
    }
  };

  if (!isClient) return null; // Evitar que se renderice antes de que estemos en el cliente

  return (
    <div>
      <div className="w-full pt-5">
        <ProgressBar
          currentStep={currentStep}
          steps={[
            "Consumo del hogar",
            "Transporte",
            "Alimentación",
            "Hábitos de consumo y residuos",
            "Medidas actuales",
          ]}
        />
      </div>

      <div className="w-full pt-10 pl-10">
        {/* Mostrar preguntas por paso */}
        {currentStep === 0 && (
          <>
            <div className="pt-6 pl-4">
              <Question
                question="¿Qué tipo de energía usas más en casa?"
                type="single"
                options={[
                  { label: "Eléctrica", carbonValue: 10 },
                  { label: "Gas", carbonValue: 20 },
                  { label: "Solar", carbonValue: 5 },
                ]}
              />
            </div>
            <div className="pt-6 pl-4">
              <Question
                question="¿Cuántas personas viven en tu hogar?"
                type="single"
                options={[
                  { label: "1-2 personas", carbonValue: 10 },
                  { label: "3-4 personas", carbonValue: 15 },
                  { label: "5+ personas", carbonValue: 20 },
                ]}
              />
            </div>
          </>
        )}

        {currentStep === 1 && (
          <div className="pt-6 pl-4">
            <Question
              question="¿Qué tipo de transporte usas con mayor frecuencia?"
              type="single"
              options={[
                { label: "Coche", carbonValue: 30 },
                { label: "Transporte público", carbonValue: 15 },
                { label: "Bicicleta", carbonValue: 5 },
              ]}
            />
          </div>
        )}

        {currentStep === 2 && (
          <div className="pt-6 pl-4">
            <Question
              question="¿Comes carne con frecuencia?"
              type="single"
              options={[
                { label: "Sí", carbonValue: 20 },
                { label: "No", carbonValue: 5 },
              ]}
            />
          </div>
        )}

        {currentStep === 3 && (
          <>
            <div className="pt-6 pl-4">
              <Question
                question="¿Reciclas los residuos?"
                type="single"
                options={[
                  { label: "Sí", carbonValue: 5 },
                  { label: "No", carbonValue: 20 },
                ]}
              />
            </div>
            <div className="pt-6 pl-4">
              <Question
                question="¿Apagas las luces cuando no las necesitas?"
                type="single"
                options={[
                  { label: "Sí", carbonValue: 5 },
                  { label: "No", carbonValue: 15 },
                ]}
              />
            </div>
          </>
        )}

        {currentStep === 4 && (
          <div className="pt-6 pl-4">
            <Question
              question="¿Tienes alguna medida en mente para reducir tu huella de carbono?"
              type="single"
              options={[
                { label: "Sí", carbonValue: 5 },
                { label: "No", carbonValue: 0 },
              ]}
            />
          </div>
        )}
      </div>

      <div className="w-full flex justify-end pr-10 pt-8">
        <Pill
          text={currentStep === 4 ? "Calcular tu huella de carbono" : "Continuar"}
          color="continue"
          onClick={handleNextStep}
        />
      </div>
    </div>
  );
};

export default page;
