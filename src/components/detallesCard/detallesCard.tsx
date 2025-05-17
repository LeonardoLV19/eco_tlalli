'use client'

import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"

export function DetallesCard() {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-gray-50 border border-gray-200 rounded-lg shadow-sm text-sm text-gray-700">
      {/* Cabecera con contacto y notas */}
      <div className="flex flex-col md:flex-row justify-between border-b border-gray-200 p-6 gap-8 text-center md:text-left">
        {/* Contacto del cliente */}
        <div className="flex-1">
          <h3 className="font-semibold text-base mb-2">Contacto del cliente</h3>
          <p><span className="font-medium">Nombre:</span> Juana Sánchez</p>
          <p><span className="font-medium">No. de teléfono:</span> 555555555555</p>
          <p><span className="font-medium">Correo:</span> juana@gmail.com</p>
        </div>

        {/* Notas y observaciones */}
        <div className="flex-1">
          <h3 className="font-semibold text-base mb-2">Notas y observaciones</h3>
          <div className="mb-2">
            <p className="font-medium">Comentarios del cliente:</p>
            <p className="text-gray-600">llegar antes de las 14:00 hrs el día de entrega</p>
          </div>
          <div>
            <p className="font-medium">Notas internas:</p>
            <p className="text-gray-600">Revisar comentarios</p>
          </div>
        </div>
      </div>

      {/* Totales */}
      <CardFooter className="p-6">
        <div className="w-full space-y-3">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$54,000 MXN</span>
          </div>
          <div className="flex justify-between">
            <span>Envío</span>
            <span>$100 MXN</span>
          </div>
          <div className="flex justify-between">
            <span>Instalación</span>
            <span>$3,000 MXN</span>
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-3 mt-3">
            <span className="font-semibold">Total</span>
            <span className="font-semibold text-green-600">$57,100 MXN</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
