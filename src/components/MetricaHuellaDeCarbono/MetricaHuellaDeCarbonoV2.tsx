import React from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";

const MetricaHuellaDeCarbonoV2 = () => {
  const data = [
    { name: "Electricidad", value: 1.5, fill: "#000000" },
    { name: "Gas LP o natural", value: 1.2, fill: "#A3C4F3" },
    { name: "Agua", value: 0.8, fill: "#4CAF50" },
    { name: "Transporte", value: 1.5, fill: "#9E9E9E" },
    { name: "Alimentación", value: 0.7, fill: "#8BC34A" },
    { name: "Residuos", value: 0.32, fill: "#388E3C" },
  ];

  const totalEmissions = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="p-6 bg-white rounded-lg max-w-sm mx-auto min-w-sm shadow-sm mt-4 border">
      <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
        ¿Cuántas toneladas de dióxido de carbono generas al año?
      </h2>
      <div className="flex flex-row items-center justify-center gap-x-8">
        {/* Gráfico */}
        <RadialBarChart
          width={300}
          height={300}
          cx="30%"
          cy="45%"
          innerRadius="60%"
          outerRadius="120%"
          barSize={10}
          data={data}
        >
          <RadialBar dataKey="value" />
          <Tooltip />
          <Legend
            iconSize={5}
            layout="vertical"
            verticalAlign="middle"
            align="left"
            wrapperStyle={{
              width: 150,
              top: 40,
              left: 200,
              lineHeight: "24px", // Espaciado entre líneas
              fontSize: "14px",
            }}
          />
        </RadialBarChart>
      </div>

      {/* Total de emisiones */}
      <p className="text-3xl font-bold text-gray-800 mt-6 text-center">
        {totalEmissions.toFixed(2)} tCO₂
      </p>
    </div>
  );
};

export default MetricaHuellaDeCarbonoV2;
