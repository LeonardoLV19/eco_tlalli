'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function PaginationCard({ onChange }: { onChange?: (index: number) => void }) {
  const [active, setActive] = React.useState(0)
  const pages = ["Vendedores", "Solicitudes de productos", "Solicitudes de vendedores"]

  const handlePrev = () => {
    const newIndex = active === 0 ? 0 : active - 1
    setActive(newIndex)
    onChange?.(newIndex)
  }

  const handleNext = () => {
    const newIndex = active === pages.length - 1 ? active : active + 1
    setActive(newIndex)
    onChange?.(newIndex)
  }

  return (
    <Card
      sx={{
        width: 'fit-content',
        margin: '0 auto',
        backgroundColor: '#f5f6fa',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 999,
        padding: '4px 12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        fontFamily: "'Albert Sans', sans-serif",
      }}
    >
      <IconButton onClick={handlePrev} disabled={active === 0}>
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      {pages.map((label, index) => (
        <Typography
          key={index}
          onClick={() => {
            setActive(index)
            onChange?.(index)
          }}
          sx={{
            mx: 1,
            px: 2,
            py: 0.5,
            borderRadius: 999,
            cursor: 'pointer',
            backgroundColor: active === index ? '#4CAF4F' : 'transparent',
            color: active === index ? 'white' : '#656565',
            fontWeight: active === index ? 700 : 400,
            fontSize: '0.9rem',
            transition: 'background-color 0.2s ease',
            '&:hover': {
              backgroundColor: active === index ? '#45a045' : '#e0e0e0',
            },
          }}
        >
          {label}
        </Typography>
      ))}

      <IconButton onClick={handleNext} disabled={active === pages.length - 1}>
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </Card>
  )
}
