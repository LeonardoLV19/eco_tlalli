import * as React from 'react';
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from '@mui/x-charts/Gauge';
import { Typography, Box } from '@mui/material';

type Props = {
  value: number;
  value2: string;
};

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };

  return (
    <g>
      <circle cx={cx} cy={cy} r={3} fill="red" />
      <path d={`M ${cx} ${cy} L ${target.x} ${target.y}`} stroke="red" strokeWidth={3} />
    </g>
  );
}

export default function CompositionExample({ value, value2 }: Props) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Box sx={{ ml: 20, textAlign: 'left' }}>
        <Typography
          variant="subtitle2"
          color="#BF190E"
          fontWeight="bold"
          textAlign="end"
          fontSize={14}
        >
          Atención
        </Typography>
        <Typography variant="body2" fontWeight="bold" sx={{ mb: 1 }} fontSize={14}>
          Tu huella de carbono es {value2}
        </Typography>
      </Box>

      <GaugeContainer
        width={300}
        height={300}
        startAngle={-110}
        endAngle={110}
        value={value}
        sx={{ mt: -3 }}
      >
        <GaugeReferenceArc />
        <GaugeValueArc color="red" />
        <GaugePointer />
      </GaugeContainer>

      <Typography variant="h4" fontWeight="bold" sx={{ mt: -4 }}>
        {value}%
      </Typography>

      <Typography variant="caption" sx={{ mt: 1 }}>
        Estás sobre el {value}% de la población mexicana
      </Typography>
    </Box>
  );
}
