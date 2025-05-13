import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { green } from '@mui/material/colors';

type CheckboxLabelsProps = {
  label?: string;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  defaultChecked?: boolean;
  fontSize?: string | number;
};

export default function CheckboxLabels({
  label = "He leído y acepto los términos y condiciones de uso.",
  color = 'primary',
  defaultChecked = false,
  fontSize = '16px'
}: CheckboxLabelsProps) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox defaultChecked={defaultChecked} color={color} />}
        label={label}
        sx={{ '& .MuiFormControlLabel-label': { fontSize } }}
      />
    </FormGroup>
  );
}
