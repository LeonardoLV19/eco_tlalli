import React from "react";

const RegistrationOptions = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 w-11/12 max-w-md text-center shadow-sm border">
      <h2 className="text-xl font-semibold mb-6">¿Cómo quieres registrarte?</h2>
      <button className="bg-green-700 text-white font-medium px-6 py-3 rounded-lg mb-4 hover:bg-green-800 transition w-full">
        Cliente — Haz tu hogar más sustentable.
      </button>
      <button className="bg-green-700 text-white font-medium px-6 py-3 rounded-lg mb-4 hover:bg-green-800 transition w-full">
        Vendedor — Ofrece productos ecológicos.
      </button>
      <button className="bg-green-700 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-800 transition w-full">
        Iniciar Sesión
      </button>
    </div>
  );
};

export default RegistrationOptions;
