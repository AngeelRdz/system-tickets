'use client';

import { Typography, Box } from '@mui/material';
import { colorPalette } from '@/config/theme';

/**
 * Componente orgánico de encabezado de la página de inicio
 * Principio: Single Responsibility - Solo renderiza el encabezado de la página de inicio
 * Principio: Open/Closed - Extensible mediante BoxProps
 */
export const HomeHeader = () => {
  return (
    <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center' }}>
      <Typography 
        variant="h2" 
        component="h1" 
        gutterBottom
        sx={{ 
          fontWeight: 700,
          background: colorPalette.gradient.primary,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          mb: 2
        }}
      >
        Sistema de Tickets
      </Typography>
      <Typography 
        variant="h6" 
        color="text.secondary" 
        sx={{ 
          mb: 4,
          maxWidth: '600px',
          mx: 'auto',
          fontWeight: 400
        }}
      >
        Gestiona tus tickets de ayuda de manera eficiente y organizada
      </Typography>
    </Box>
  );
};

