import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const MetricaHuellaDeCarbonoV1 = () => {
  const data = [
    { name: "Progreso", value: 72 },
    { name: "Restante", value: 28 },
  ];

  const COLORS = ["#4CAF50", "#E0E0E0"];

  return (
    <div className="flex flex-col items-center bg-white rounded-xl p-4 w-full border border-gray-200 shadow-sm">
      {/* Título más compacto */}
      <div className="text-center mb-2"> {/* Reduje el margin-bottom */}
        <p className="text-red-600 font-semibold text-lg flex items-center justify-center gap-1"> {/* Texto ligeramente más pequeño */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          ¡Alerta de Huella de Carbono!
        </p>
        <p className="text-gray-600 text-xs">Tu huella de carbono es alta, considera reducirla.</p>
      </div>

      {/* Gráfica con contenedor responsive y menos altura */}
      <div className="w-full h-[180px]"> {/* Reduje la altura */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              startAngle={180}
              endAngle={0}
              cx="50%"
              cy="100%"
              innerRadius={80}  /* Ajusté radios para la nueva altura */
              outerRadius={110}
              paddingAngle={2}  /* Reduje el espacio entre segmentos */
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Porcentaje y descripción más compactos */}
      <div className="mt-1 text-center"> {/* Reduje el margin-top */}
        <p className="text-3xl font-bold text-green-600">{data[0].value}%</p>
        <p className="text-xs text-gray-500 mt-1"> {/* Texto más pequeño */}
          Estás por encima del {data[0].value}% de la población mexicana
        </p>
      </div>
    </div>
  );
};

export default MetricaHuellaDeCarbonoV1;