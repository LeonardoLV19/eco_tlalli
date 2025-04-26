import React from "react";

interface ProgressBarProps {
  currentStep: number;
  steps: string[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, steps }) => {
  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="relative w-[90%] flex items-center justify-between">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 z-0 transform -translate-y-1/2 rounded-md" />
        <div
          className="absolute top-1/2 left-0 h-1 bg-green-600 z-10 rounded-md transform -translate-y-1/2 transition-all duration-500"
          style={{
            width: `${(currentStep / (steps.length - 1)) * 100}%`,
          }}
        />

        {steps.map((_, index) => (
          <div key={index} className="relative z-20 flex flex-col items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all
              ${index} <= currentStep ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-700'}`}
            >
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 w-[90%] flex justify-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`text-xs text-center transition-all ${
              index <= currentStep
                ? 'text-green-700 font-bold'
                : 'text-gray-600 font-normal'
            }`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
