import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Uso doméstico", value: 40 },
  { name: "Uso industrial", value: 30 },
  { name: "Uso agrícola", value: 30 },
];

const COLORS = ["#4CAF50", "#26A69A", "#80CBC4"];

const ConsumoPorEstado = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-4">Consumo por Estado</h2>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default ConsumoPorEstado;
