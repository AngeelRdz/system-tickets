'use client';

import { Container, Grid, Box } from '@mui/material';
import { HomeHeader } from '@/components/organisms/HomeHeader/HomeHeader';
import { HomeCard } from '@/components/molecules/HomeCard/HomeCard';
import { HOME_CARDS_CONFIG } from '@/config/homeCards';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 4, md: 6 },
          width: '100%',
        }}
      >
        <HomeHeader />
        
        <Grid container spacing={4}>
          {HOME_CARDS_CONFIG.map((card) => (
            <Grid item xs={12} md={6} key={card.href}>
              <HomeCard {...card} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
