'use client';

import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colorPalette } from '@/config/theme';

export const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[12],
    '& .card-icon': {
      transform: 'scale(1.1) rotate(5deg)',
    },
    '& .card-gradient': {
      opacity: 1,
    },
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: colorPalette.gradient.primary,
    zIndex: 1,
  },
}));

