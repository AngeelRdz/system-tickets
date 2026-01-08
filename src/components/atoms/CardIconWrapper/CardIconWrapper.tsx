'use client';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colorPalette } from '@/config/theme';

/**
 * Componente atómico de wrapper para el icono de la tarjeta
 * Principio: Single Responsibility - Solo renderiza un wrapper para el icono
 * Principio: Open/Closed - Extensible mediante BoxProps
 */
export const CardIconWrapper = styled(Box)(() => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 24px',
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: '50%',
    padding: '2px',
    background: colorPalette.gradient.primary,
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },
}));

