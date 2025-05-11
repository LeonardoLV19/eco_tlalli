import React from 'react';
import { FiDownload } from 'react-icons/fi';

/**
 * Tipos de variantes disponibles para la tabla.
 */
type Variant = 'companyApplications' | 'productSales' | 'vendorValidation';

interface AdministratorTablesProps {
  variant: Variant;
}

export const AdministratorTables: React.FC<AdministratorTablesProps> = ({ variant }) => {
  // Clases comunes a todas las tablas
  const wrapperClass = 'overflow-x-auto bg-white rounded-xl shadow-md p-6 text-xs';
  const tableClass = 'min-w-full table-auto border border-gray-200 text-left';
  const theadClass = 'bg-gray-100 text-gray-700 font-semibold text-sm';

  switch (variant) {
    case 'companyApplications': {
      const data = [
        ['01','Saving Energy','VECJ880326','Dirección fiscal','savingenergy@gmail.com','04/06/2023'],
        ['02','Sí sí luz','VECJ880326','Dirección fiscal','sisliluz@gmail.com','06/12/2022'],
        ['03','Grupo Industrionic','VECJ880326','Dirección fiscal','grupoindustrionic@gmail.com','09/11/2021'],
        ['04','Luz Energy','VECJ880326','Dirección fiscal','luzenergy@gmail.com','08/09/2022'],
        ['05','Sun Energy','VECJ880326','Dirección fiscal','sunenergy@gmail.com','04/10/2020'],
        ['06','Lee','VECJ880326','Dirección fiscal','lee@gmail.com','07/08/2019'],
        ['07','ENF Solar','VECJ880326','Dirección fiscal','enfsolar@gmail.com','09/02/2022'],
        ['08','Solarama','VECJ880326','Dirección fiscal','solarama@gmail.com','08/07/2023'],
      ];

      return (
        <div className={wrapperClass}>
          <table className={tableClass}>
            <thead className={theadClass}>
              <tr>
                <th className="px-3 py-2">ID</th>
                <th className="px-3 py-2">Empresa</th>
                <th className="px-3 py-2">RFC</th>
                <th className="px-3 py-2">Dirección</th>
                <th className="px-3 py-2">Correo</th>
                <th className="px-3 py-2">Fecha</th>
                <th className="px-3 py-2">INE</th>
                <th className="px-3 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map(([id, name, rfc, address, email, date]) => (
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
                      aria-label="Descargar INE"
                    >
                      <FiDownload size={18} />
                    </button>
                  </td>
                  <td className="px-3 py-2 flex gap-2">
                    <button className="bg-teal-500 hover:bg-teal-600 active:scale-95 transition-transform text-white px-3 py-1 rounded-full text-xs">
                      Aceptar
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 active:scale-95 transition-transform text-white px-3 py-1 rounded-full text-xs">
                      Rechazar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    case 'productSales': {
      const data = [
        ['01','Paneles fotovoltaicos','938 MXN','05/07/2020','12'],
        ['02','Focos LED solares','233 MXN','06/01/2020','92'],
        ['03','Baterías solares','82 MXN','07/08/2020','129'],
        ['04','Inversores solares','934 MXN','08/12/2020','31'],
        ['05','Controlador carga','9344 MXN','01/02/2021','89'],
        ['06','Lámpara solar','924 MXN','04/02/2021','833'],
        ['07','Calentador agua','832 MXN','09/04/2022','99'],
        ['08','Kit energía solar','8291 MXN','10/09/2022','44'],
        ['09','Alumbrado solar','924 MXN','11/12/2023','37'],
      ];

      return (
        <div className={wrapperClass}>
          <table className={tableClass}>
            <thead className={theadClass}>
              <tr>
                <th className="px-3 py-2">ID</th>
                <th className="px-3 py-2">Producto</th>
                <th className="px-3 py-2">Precio</th>
                <th className="px-3 py-2">Publicado</th>
                <th className="px-3 py-2">Ventas</th>
              </tr>
            </thead>
            <tbody>
              {data.map(([id, name, price, date, sales]) => (
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
      );
    }

    case 'vendorValidation': {
      const data = [
        ['01','Paneles fotovoltaicos','Saving Energy','9428 MXN','04/06/2023'],
        ['02','Focos LED','Sí sí luz','9239 MXN','06/12/2022'],
        ['03','Baterías solares','Grupo Industrionic','932 MXN','09/11/2021'],
        ['04','Controlador carga','Luz Energy','834 MXN','08/09/2022'],
        ['05','Lámpara solar','Sun Energy','134 MXN','04/10/2020'],
        ['06','Calentador carga','Lee','234 MXN','07/08/2019'],
        ['07','Kit energía','ENF Solar','2443 MXN','09/02/2022'],
        ['08','Alumbrado solar','Solarama','9348 MXN','08/07/2023'],
      ];

      return (
        <div className={wrapperClass}>
          <table className={tableClass}>
            <thead className={theadClass}>
              <tr>
                <th className="px-3 py-2">ID</th>
                <th className="px-3 py-2">Producto</th>
                <th className="px-3 py-2">Vendedor</th>
                <th className="px-3 py-2">Precio</th>
                <th className="px-3 py-2">Fecha solicitud</th>
                <th className="px-3 py-2">Validación</th>
              </tr>
            </thead>
            <tbody>
              {data.map(([id, name, vendor, price, date]) => (
                <tr key={id} className="border-t">
                  <td className="px-3 py-2">{id}</td>
                  <td className="px-3 py-2">{name}</td>
                  <td className="px-3 py-2">{vendor}</td>
                  <td className="px-3 py-2">{price}</td>
                  <td className="px-3 py-2">{date}</td>
                  <td className="px-3 py-2 flex gap-2">
                    <button className="bg-teal-500 hover:bg-teal-600 active:scale-95 transition-transform text-white px-3 py-1 rounded-full text-xs">
                      Aceptar
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 active:scale-95 transition-transform text-white px-3 py-1 rounded-full text-xs">
                      Rechazar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    default:
      return null;
  }
};