'use client';

import { CardContent, CardActions, Typography, alpha, SxProps, Theme } from '@mui/material';
import { StyledCard } from '@/components/atoms/StyledCard/StyledCard';
import { CardIconWrapper } from '@/components/atoms/CardIconWrapper/CardIconWrapper';
import { GradientOverlay } from '@/components/atoms/GradientOverlay/GradientOverlay';
import { ThemedButton } from '@/components/atoms/ThemedButton/ThemedButton';
import React, { ReactElement } from 'react';
import { colorPalette } from '@/config/theme';

/**
 * Componente molecular de tarjeta de inicio
 * Principio: Single Responsibility - Solo renderiza una tarjeta de inicio
 * Principio: Open/Closed - Extensible mediante HomeCardProps
 */
interface HomeCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonVariant: 'contained' | 'outlined';
  icon: ReactElement;
  iconColor: 'primary' | 'secondary';
  href: string;
}

export const HomeCard = ({
  title,
  description,
  buttonText,
  buttonVariant,
  icon,
  iconColor,
  href,
}: HomeCardProps) => {
  const color = iconColor === 'primary' ? colorPalette.primary : colorPalette.secondary;

  const iconWithColor = React.isValidElement(icon)
    ? React.cloneElement(icon as React.ReactElement<{ sx?: SxProps<Theme> }>, {
        sx: {
          fontSize: 40,
          color: color.main,
        },
      })
    : icon;

  return (
    <StyledCard elevation={4}>
      <GradientOverlay className="card-gradient" />
      <CardContent sx={{ flexGrow: 1, textAlign: 'center', pt: 4, pb: 2, position: 'relative' }}>
        <CardIconWrapper 
          className="card-icon" 
          sx={{ bgcolor: alpha(color.main, 0.1) }}
        >
          {iconWithColor}
        </CardIconWrapper>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom
          sx={{ 
            fontWeight: 600,
            mb: 2,
            color: colorPalette.primary.main,
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ 
            mb: 3,
            lineHeight: 1.7,
            px: 2
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 3, pt: 0, justifyContent: 'center' }}>
        <ThemedButton 
          href={href}
          variant={buttonVariant}
          iconColor={iconColor}
          size="large"
        >
          {buttonText}
        </ThemedButton>
      </CardActions>
    </StyledCard>
  );
};

