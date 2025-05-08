import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  TooltipItem,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SpendingResume: React.FC = () => {
  const data = {
    labels: ["Gas", "Agua", "Electricidad"],
    datasets: [
      {
        data: [1000, 7250, 1000],
        backgroundColor: ["#C8E1C8", "#66BB6A", "#2E7D32"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<"doughnut">) => {
            const value = tooltipItem.raw as number;
            const total = tooltipItem.dataset.data.reduce(
              (a: number, b: number) => a + b,
              0
            );
            const percentage = ((value / total) * 100).toFixed(0);
            return `${percentage}%`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-md mx-auto flex flex-col gap-6 items-center">
      <h3 className="text-md font-bold">Resumen de gastos</h3>
      <div className="flex items-center gap-8">
        <div className="relative w-[120px] h-[120px]">
          <Doughnut data={data} options={options} />
        </div>
        <div className="flex flex-col text-sm text-gray-700 gap-3">
          <div className="flex justify-between items-center gap-2">
            <span className="w-3 h-3 bg-green-200 rounded-full" />
            Gas
            <span className="font-bold ml-2">$1,000</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full" />
            Agua
            <span className="font-bold ml-2">$7,250</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="w-3 h-3 bg-green-900 rounded-full" />
            Electricidad
            <span className="font-bold ml-2">$1,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendingResume;
