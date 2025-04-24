'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

type Props = {
  title: string;
  subtitle: string;
  image: string;
};

export default function CardPerCapita({ title, subtitle, image }: Props) {
  return (
    <Card
      className="albert-card"
      sx={{
        maxWidth: 360,
        fontFamily: "'Albert Sans', sans-serif",
        fontWeight: 500,
        border: '1px solid #e5e7eb',
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.2s ease-in-out',
        textAlign: 'center',
        paddingTop: 2,
      }}
    >
      <CardContent>
        <Typography
          variant="subtitle1"
          sx={{ color: 'green', fontWeight: 600 }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: '#333', marginBottom: 2 }}
        >
          {subtitle}
        </Typography>

        <CardMedia
          component="img"
          image={image}
          alt="Ícono"
          sx={{
            width: '60%',
            height: 'auto',
            margin: '0 auto',
            paddingBottom: 2,
          }}
        />
      </CardContent>
    </Card>
  );
}
