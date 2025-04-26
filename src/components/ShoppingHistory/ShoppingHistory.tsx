import { Card, CardContent, Typography, Box } from '@mui/material'
import Image from 'next/image'

interface PurchaseCardProps {
  price: string
  title: string
  date: string
  imageUrl: string
  width?: number | string
}

export function ShoppingHistory({
  price,
  title,
  date,
  imageUrl,
  width = '100%',
}: PurchaseCardProps) {
  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: 4,
        boxShadow: 3,
        padding: 1.5,
        width,
      }}
    >
      <Box
        sx={{
          minWidth: 100,
          minHeight: 100,
          width: 150,
          height: 100,
          borderRadius: 2,
          backgroundColor: '#f3f4f6',
          overflow: 'hidden',
          marginRight: 2,
          flexShrink: 0,
        }}
      >
        <Image
          src={imageUrl}
          alt="Producto"
          width={100}
          height={100}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </Box>
      <CardContent sx={{ padding: 0 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#388e3c' }}>
          {price} MXN
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 4 }}>
          Producto comprado el {date}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ShoppingHistory