'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard() {
  return (
    <Card
      className="albert-card"
      sx={{
        maxWidth: 345,
        fontFamily: "'Albert Sans', sans-serif",
        fontWeight: 500,
        border: '1px solid #e5e7eb',
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // sombra más grande e intensa
        transition: 'box-shadow 0.2s ease-in-out',
      }}
    >
      <CardActionArea>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ textAlign: 'center', mt: 1 }}
        >
          Consumo por región
        </Typography>

        <CardMedia
          component="img"
          image="/mapa.png"
          alt="mapa"
          sx={{
            width: '60%',
            height: 'auto',
            margin: '0 auto',
            border: '1px solid #ccc',
            borderRadius: 2,
            mb: 2,
          }}
        />
      </CardActionArea>
    </Card>
  );
}
