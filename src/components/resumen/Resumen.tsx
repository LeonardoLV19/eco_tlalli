import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ResumenCard() {
  return (
    <Card
      className="albert-card"
      sx={{
        maxWidth: 345,
        backgroundColor: '#E6E6E6',
        border: '1px solid #e5e7eb',
        borderRadius: 3,
        overflow: 'hidden', // importante para que no sobresalga el efecto
        boxShadow: '0px 8px 0px rgba(0, 0, 0, 0.15)',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0px 12px 0px rgba(0, 0, 0, 0.25)', // sombra solo abajo
        },
      }}
    >
      <CardActionArea
        sx={{
          height: '100%',
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            textAlign: 'center',
            color: '#4CAF4F',
            fontWeight: 'bold',
            marginBottom: 1,
          }}
        >
          Huella de carbono total
        </Typography>

        <Typography
          variant="body1"
          component="div"
          sx={{
            textAlign: 'center',
            color: '#000000',
          }}
        >
          6.02 tCo al año
        </Typography>
      </CardActionArea>
    </Card>
  );
}
