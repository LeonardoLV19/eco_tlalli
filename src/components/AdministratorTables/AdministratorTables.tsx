import React from "react";
import { FiDownload } from 'react-icons/fi';

const AdministratorTables: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 p-6 bg-white rounded-xl shadow-md text-xs max-w-full overflow-x-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200 text-left">
          <thead className="bg-gray-100 text-gray-700 font-semibold text-sm">
            <tr>
              <th className="px-3 py-2">ID</th>
              <th className="px-3 py-2">Nombre de la empresa</th>
              <th className="px-3 py-2">RFC</th>
              <th className="px-3 py-2">Dirección fiscal</th>
              <th className="px-3 py-2">Correo electrónico</th>
              <th className="px-3 py-2">Fecha de solicitud</th>
              <th className="px-3 py-2">INE</th>
              <th className="px-3 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["01", "Saving Energy", "VECJ880326", "Dirección fiscal", "savingenergy@gmail.com", "04/06/2023"],
              ["02", "Sí sí luz", "VECJ880326", "Dirección fiscal", "sisliluz@gmail.com", "06/12/2022"],
              ["03", "Grupo Industrionic", "VECJ880326", "Dirección fiscal", "grupoindustrionic@gmail.com", "09/11/2021"],
              ["04", "Luz Energy", "VECJ880326", "Dirección fiscal", "luzenergy@gmail.com", "08/09/2022"],
              ["05", "Sun Energy", "VECJ880326", "Dirección fiscal", "sunenergy@gmail.com", "04/10/2020"],
              ["06", "Lee", "VECJ880326", "Dirección fiscal", "lee@gmail.com", "07/08/2019"],
              ["07", "ENF Solar", "VECJ880326", "Dirección fiscal", "enfsolar@gmail.com", "09/02/2022"],
              ["08", "Solarama", "VECJ880326", "Dirección fiscal", "solarama@gmail.com", "08/07/2023"],
            ].map(([id, name, rfc, address, email, date]) => (
              <tr key={id} className="border-t">
                <td className="px-3 py-2">{id}</td>
                <td className="px-3 py-2">{name}</td>
                <td className="px-3 py-2">{rfc}</td>
                <td className="px-3 py-2">{address}</td>
                <td className="px-3 py-2">{email}</td>
                <td className="px-3 py-2">{date}</td>
                <td className="px-3 py-2 text-center">
                  <button
                    className="text-gray-600 hover:text-gray-800 active:scale-90 transition-transform"
                    onClick={() => console.log("Descargar INE")}
                    aria-label="Descargar INE"
                  >
                    <FiDownload size={18} />
                  </button>
                </td>
                <td className="px-3 py-2 flex gap-2">
                  <button 
                    className="bg-teal-500 hover:bg-teal-600 active:scale-95 transition-transform text-white px-3 py-1 rounded-full text-xs"
                    onClick={() => console.log("Aceptar")}
                  >
                    Aceptar
                  </button>
                  <button 
                    className="bg-red-500 hover:bg-red-600 active:scale-95 transition-transform text-white px-3 py-1 rounded-full text-xs"
                    onClick={() => console.log("Rechazar")}
                  >
                    Rechazar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200 text-left">
          <thead className="bg-gray-100 text-gray-700 font-semibold text-sm">
            <tr>
              <th className="px-3 py-2">ID</th>
              <th className="px-3 py-2">Nombre del producto</th>
              <th className="px-3 py-2">Precio</th>
              <th className="px-3 py-2">Fecha de publicación</th>
              <th className="px-3 py-2">Ventas realizadas</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["01", "Paneles solares fotovoltaicos", "938 MXN", "05/07/2020", "12"],
              ["02", "Focos LED solares", "233 MXN", "06/01/2020", "92"],
              ["03", "Baterías solares", "82 MXN", "07/08/2020", "129"],
              ["04", "Inversores solares", "934 MXN", "08/12/2020", "31"],
              ["05", "Controlador de carga solar", "9344 MXN", "01/02/2021", "89"],
              ["06", "Lámpara solar", "924 MXN", "04/02/2021", "833"],
              ["07", "Calentador solar de agua", "832 MXN", "09/04/2022", "99"],
              ["08", "Kit de energía solar", "8291 MXN", "10/09/2022", "44"],
              ["09", "Sistema de alumbrado solar", "924 MXN", "11/12/2023", "37"],
            ].map(([id, name, price, date, sales]) => (
              <tr key={id} className="border-t">
                <td className="px-3 py-2">{id}</td>
                <td className="px-3 py-2">{name}</td>
                <td className="px-3 py-2">{price}</td>
                <td className="px-3 py-2">{date}</td>
                <td className="px-3 py-2">{sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200 text-left">
          <thead className="bg-gray-100 text-gray-700 font-semibold text-sm">
            <tr>
              <th className="px-3 py-2">ID</th>
              <th className="px-3 py-2">Nombre del producto</th>
              <th className="px-3 py-2">Vendedor</th>
              <th className="px-3 py-2">Precio</th>
              <th className="px-3 py-2">Fecha de solicitud</th>
              <th className="px-3 py-2">Validación</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["01", "Paneles solares fotovoltaicos", "Saving Energy", "9428 MXN", "04/06/2023"],
              ["02", "Focos LED solares", "Sí sí luz", "9239 MXN", "06/12/2022"],
              ["03", "Baterías solares", "Grupo Industrionic", "932 MXN", "09/11/2021"],
              ["04", "Controlador de carga solar", "Luz Energy", "834 MXN", "08/09/2022"],
              ["05", "Lámpara solar", "Sun Energy", "134 MXN", "04/10/2020"],
              ["06", "Calentador de carga solar", "Lee", "234 MXN", "07/08/2019"],
              ["07", "Kit de energía solar", "ENF Solar", "2443 MXN", "09/02/2022"],
              ["08", "Sistema de alumbrado solar", "Solarama", "9348 MXN", "08/07/2023"],
            ].map(([id, name, vendor, price, date]) => (
              <tr key={id} className="border-t">
                <td className="px-3 py-2">{id}</td>
                <td className="px-3 py-2">{name}</td>
                <td className="px-3 py-2">{vendor}</td>
                <td className="px-3 py-2">{price}</td>
                <td className="px-3 py-2">{date}</td>
                <td className="px-3 py-2 flex gap-2">
                <button 
                  className="bg-teal-500 hover:bg-teal-600 active:scale-95 transition-transform text-white px-3 py-1 rounded-full text-xs"
                  onClick={() => console.log("Aceptar")}
                >
                  Aceptar
                </button>
                <button 
                  className="bg-red-500 hover:bg-red-600 active:scale-95 transition-transform text-white px-3 py-1 rounded-full text-xs"
                  onClick={() => console.log("Rechazar")}
                >
                  Rechazar
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdministratorTables;
