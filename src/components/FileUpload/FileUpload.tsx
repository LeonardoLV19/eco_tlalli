import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    nuevo: Palette['primary'];
  }
  interface PaletteOptions {
    nuevo?: PaletteOptions['primary'];
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    nuevo: true;
  }
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

interface InputFileUploadProps {
  buttonText?: string;
  color?: ButtonProps['color'] | 'nuevo';
  onChange?: (files: FileList | null) => void;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#5DAF5D',
      contrastText: '#FFFFFF',
    },
    nuevo: {
      main: '#21602f',
      contrastText: '#FFFFFF',
    },
  },
});

export default function InputFileUpload({
  buttonText = 'Upload files',
  color = 'primary',
  onChange,
}: InputFileUploadProps) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        component="label"
        variant="contained"
        color={color as any}
        startIcon={<CloudUploadIcon />}
      >
        {buttonText}
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => onChange?.(event.target.files)}
          multiple
        />
      </Button>
    </ThemeProvider>
  );
}