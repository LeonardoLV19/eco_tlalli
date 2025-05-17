import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { TrendingUp, LocalFireDepartment, Nature } from '@mui/icons-material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  background: 'linear-gradient(145deg, #f5f5f5, #ffffff)',
  border: '1px solid #e0e0e0',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.12)'
  },
}));

const StatBadge = styled('div')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 8px',
  borderRadius: '12px',
  backgroundColor: 'rgba(76, 175, 80, 0.1)',
  color: '#2e7d32',
  fontSize: '0.75rem',
  fontWeight: 600,
  marginBottom: '8px'
}));

export default function ResumenCard() {
  return (
    <StyledCard>
      <CardContent sx={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
          <Nature sx={{ color: '#4caf50', fontSize: '28px', marginRight: '8px' }} />
          <Typography variant="h6" component="div" sx={{ 
            color: '#333',
            fontWeight: 600,
            letterSpacing: '0.5px'
          }}>
            Huella de Carbono
          </Typography>
        </div>

        <Typography variant="body2" sx={{ 
          color: '#666',
          marginBottom: '16px',
          fontSize: '0.875rem'
        }}>
          Tu impacto ambiental anual calculado
        </Typography>

        <Typography variant="h4" component="div" sx={{ 
          color: '#222',
          fontWeight: 700,
          marginBottom: '8px',
          display: 'flex',
          alignItems: 'flex-end'
        }}>
          6.02
          <Typography variant="body2" sx={{ 
            color: '#666',
            marginLeft: '4px',
            marginBottom: '4px'
          }}>
            tCO₂
          </Typography>
        </Typography>

        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
          <StatBadge>
            <TrendingUp sx={{ fontSize: '16px', marginRight: '4px' }} />
            +12% vs 2023
          </StatBadge>
          
          <StatBadge sx={{ 
            backgroundColor: 'rgba(244, 67, 54, 0.1)',
            color: '#d32f2f'
          }}>
            <LocalFireDepartment sx={{ fontSize: '16px', marginRight: '4px' }} />
            Alto impacto
          </StatBadge>
        </div>
      </CardContent>
    </StyledCard>
  );
}