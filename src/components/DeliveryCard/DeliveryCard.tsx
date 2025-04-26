'use client'

import { Card, CardContent, Typography, Button } from '@mui/material'

export function DeliveryCard() {
  return (
    <Card className="w-full max-w-3xl mx-auto shadow-sm rounded-xl overflow-hidden border">
      <CardContent className="flex justify-between items-start p-4">
        <div>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Dana Mendoza
          </Typography>
          <Typography variant="body2" className="text-gray-600 text-sm mt-1">
            Prol. Canal de Miramontes 158, Coapa, Tlalpan, 14380 Ciudad de México, CDMX
          </Typography>
        </div>

        <Button
          variant="text"
          sx={{
            color: '#15803d',        
            fontWeight: 'bold',
            fontSize: '0.875rem',       
            textTransform: 'none',      
          }}
        >Cambiar
        </Button>
      </CardContent>
    </Card>
  )
}

export default DeliveryCard