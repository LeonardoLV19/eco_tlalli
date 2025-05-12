import React from "react";
// import notificationIcon from "@/components/assets/notification-icon.png"; // Ruta de la imagen
// Ruta del ícono de check
import NotificationsIcon from '@mui/icons-material/Notifications';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Notifications = () => {
  const notifications = [
    {
      title: "Venta completada",
      product: "Sistema fotovoltaico 2 paneles solares 270 w",
      amount: "$21,699 MXN – En camino",
      buyer: "Juana Sánchez",
    },
    {
      title: "Venta completada",
      product: "Syscom Módulo Solar ETSOLAR 550w, 50 Vcc",
      amount: "$39,934 MXN – En camino",
      buyer: "Mariano Cruz",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-11/12 max-w-lg border">
      <h2 className="text-lg font-semibold mb-4 flex items-center">
        <NotificationsIcon
          sx={{ color: '#5DAF5D', fontSize: 24 }}
          className="mr-2"
        />
        Notificaciones
      </h2>
      <div className="divide-y divide-gray-200">
        {notifications.map((notification, index) => (
          <div key={index} className="py-4">
            <div className="flex items-center mb-2">
              <CheckCircleIcon
                sx={{ color: '#5DAF5D', fontSize: 20 }}
                className="mr-2"
              />
              <h3 className="font-medium">{notification.title}</h3>
            </div>
            <p className="text-sm text-gray-700">
              <strong>Producto:</strong> {notification.product}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Monto:</strong> {notification.amount}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Comprador:</strong> {notification.buyer}
            </p>
            <button className="mt-3 bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-800 transition">
              Ver detalles
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
