import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const MetricaHuellaDeCarbonoV1 = () => {
  const data = [
    { name: "Progreso", value: 72 }, // Porcentaje completado
    { name: "Restante", value: 28 }, // Porcentaje restante
  ];

  const COLORS = ["#FF0000", "#E0E0E0"]; // Rojo para el progreso, gris para el restante

  return (
    <div className="flex flex-col items-center shadow-sm bg-white rounded-lg p-4 w-64 mx-auto mt-4 border">
      {/* Título */}
      <div className="text-center mb-4">
        <p className="text-red-600 font-bold">Atención</p>
        <p className="text-sm">Tu huella de carbono es alta</p>
      </div>

      {/* Gráfica semicircular */}
      <PieChart width={200} height={100}>
        <Pie
          data={data}
          startAngle={180}
          endAngle={0}
          cx="50%"
          cy="100%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      {/* Porcentaje */}
      <p className="text-3xl font-bold mt-2">72%</p>

      {/* Descripción */}
      <p className="text-sm text-gray-600">
        Estás sobre el 72% de la población mexicana
      </p>
    </div>
  );
};

export default MetricaHuellaDeCarbonoV1;
