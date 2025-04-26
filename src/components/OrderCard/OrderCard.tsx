'use client'

import Image from 'next/image'
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
  LinearProgress,
} from '@mui/material'

export function OrderCard() {
  const fakeCardNumber = '1234 5678 9012 3456'

  const maskedNumber = fakeCardNumber
    .split(' ')
    .map((segment, i) => (i < 3 ? '••••' : segment))
    .join(' ')

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-sm rounded-xl overflow-hidden border">
      <CardContent className="flex flex-col gap-4">
        {/* Imagen + Info */}
        <div className="flex gap-4">
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: 2,
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <Image
              src="/panelesv2.png"
              alt="Producto"
              width={100}
              height={100}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </Box>

          <div className="flex-1 flex flex-col justify-center">
            <Typography className="font-semibold text-sm">
              Sistema fotovoltaico 2 paneles solares 270 w
            </Typography>
            <Typography className="text-green-700 font-bold text-sm mt-1">
              $21,699 MXN
            </Typography>
            <Typography className="text-gray-500 text-sm mt-1">
              Paquete de 2 paneles solares fotovoltaicos policristalinos de 60
              celdas 5bb (bus bar), para interconexión a la red eléctrica
            </Typography>
          </div>
        </div>

        <Divider className="my-2" />

        <div className="flex justify-between text-sm text-gray-700">
          <div>
            <Typography variant="subtitle2" className="text-black font-semibold">
              Dirección de envío
            </Typography>
            <p>Calle del puente</p>
            <p>Col. Ejidos de Huipilco</p>
            <p>Tlalpan, 14380</p>
          </div>

          <div>
            <Typography variant="subtitle2" className="text-black font-semibold">
              Método de pago
            </Typography>
            <p>Tarjeta</p>
            <p>{maskedNumber}</p>
          </div>
        </div>

        <Divider className="my-2" />

        {/* Estado del pedido */}
        <Typography className="text-sm text-gray-600 mb-2">
          Preparando el pedido para su llegada el <strong>22/09/2025</strong>
        </Typography>

        <div>
          <LinearProgress
            variant="determinate"
            value={75}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: '#e5e7eb',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#4CAF50',
              },
            }}
          />
          <div className="flex justify-between mt-2 text-xs text-gray-500 font-medium">
            <span className="text-green-600">Pedido realizado</span>
            <span className="text-green-600">Procesando</span>
            <span>Enviado</span>
            <span>Entregado/instalado</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default OrderCard