'use client';

import { Box, alpha } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colorPalette } from '@/config/theme';

export const GradientOverlay = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(135deg, ${alpha(colorPalette.primary.main, 0.05)}, ${alpha(colorPalette.secondary.main, 0.05)})`,
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  pointerEvents: 'none',
}));

