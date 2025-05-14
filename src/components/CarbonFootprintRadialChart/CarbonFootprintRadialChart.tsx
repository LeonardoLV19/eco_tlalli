"use client"
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Tooltip } from "recharts";
import { useState } from "react";

interface CategoryData {
  name: string;
  value: number;
  fill: string;
}

interface TooltipProps {
  active?: boolean;
  payload?: {
    payload: CategoryData;
    value: number;
  }[];
}

const categoryData: CategoryData[] = [
  { name: "Electricidad", value: 40, fill: "#1C1B1F" },
  { name: "Gas", value: 60, fill: "#C6D2FD" },
  { name: "Agua", value: 80, fill: "#1B691E" },
  { name: "Transporte", value: 100, fill: "#6B7280" },
  { name: "Alimentación", value: 120, fill: "#87C489" },
  { name: "Residuos", value: 150, fill: "#258429" },
];

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 shadow-md rounded-md border border-gray-200">
        <p className="font-semibold">{data.name}</p>
        <p className="text-sm">{payload[0].value}% del total</p>
        <p className="text-xs text-gray-500">Equivale a {(payload[0].value * 0.0602).toFixed(2)} tCO₂</p>
      </div>
    );
  }
  return null;
};

export const CarbonFootprintRadialChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm w-full">
      <h2 className="text-lg font-semibold mb-3"></h2>
      
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="w-full h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="15%"
              outerRadius="90%"
              data={categoryData}
              startAngle={180}
              endAngle={-180}
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            >
              <Tooltip content={<CustomTooltip />} />
              <RadialBar 
                dataKey="value" 
                cornerRadius={4}
                background={{ fill: '#f3f4f6' }}
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                
              />
              <Legend 
                layout="vertical" 
                verticalAlign="middle" 
                align="right"
                wrapperStyle={{ 
                  right: -10,
                  fontSize: '12px',
                  fontWeight: 500 
                }}
                iconSize={10}
                iconType="circle"
                formatter={(value, entry, index) => (
                  <span 
                    className="text-gray-700 text-xs"
                    style={{ 
                      opacity: activeIndex !== null ? (index === activeIndex ? 1 : 0.5) : 1 
                    }}
                  >
                    {value}
                  </span>
                )}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="text-center md:text-left">
          <p className="text-2xl font-bold text-gray-800">6.02 <span className="text-gray-500">tCO₂</span></p>
          <p className="text-xs text-gray-500 mt-1">Huella anual total</p>
          <div className="mt-2 text-xs text-gray-600">
            <p>Mayor impacto: <span className="font-semibold">Transporte</span></p>
            <p>Menor impacto: <span className="font-semibold">Agua</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};