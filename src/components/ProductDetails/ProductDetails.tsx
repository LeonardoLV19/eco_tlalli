import React from "react";
import Image from "next/image";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";
import type { TooltipItem } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const ProductDetails: React.FC = () => {
  const labels = Array.from({ length: 8 }, (_, i) =>
    i % 2 === 0 ? `Semana ${i + 1}` : ""
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Nuevo gasto",
        data: [5600, 1000, 6700, 1300, 5800, 2600, 7200, 1800],
        borderColor: "#2E7D32",
        backgroundColor: "#2E7D32",
        tension: 0.08,
        pointRadius: 3,
      },
      {
        label: "Antiguo gasto",
        data: [5700, 4900, 7200, 6800, 5200, 10000, 6900, 7500],
        borderColor: "#F8BBD0",
        backgroundColor: "#F8BBD0",
        tension: 0.08,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<'line'>) =>
            `$${context.parsed.y.toLocaleString()} MXN`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: string | number) =>
            typeof value === "number" ? (value >= 1000 ? `${value / 1000}k` : value) : value,
          font: { size: 10 },
        },
      },
      x: {
        ticks: { 
            font: { 
                size: 10 
            } 
        },
      },
    },
  };

  return (
    <div className="flex bg-white rounded-2xl shadow-md p-6 gap-8 max-w-full">
      <div className="flex flex-col w-[280px] shrink-0">
        <Image
          src="/solar_panel.jpg"
          alt="Elios Terra G8"
          width={280}
          height={180}
          className="rounded-xl object-cover"
        />
        <div className="flex flex-col mt-4">
          <h3 className="text-lg font-bold">Elios Terra G8</h3>
          <p className="text-gray-600 text-sm">Ground Mount System For 8 Solar Panels</p>
          <span className="text-green-700 font-bold text-right mt-2 text-lg">52,272 MXN</span>
        </div>
      </div>

      <div className="flex flex-col flex-grow min-w-0">
        <div className="mb-4">
          <p className="text-sm text-gray-400">Por semana</p>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            9,845 kWh <span className="text-sm text-gray-400 font-normal">últimos 30 días</span>
          </h2>
        </div>
        <div className="h-[260px] w-full">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
