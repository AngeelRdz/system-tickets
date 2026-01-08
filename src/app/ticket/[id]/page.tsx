'use client';

import { use } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { TicketDetail } from '@/components/organisms/TicketDetail/TicketDetail';
import { ThemedButton } from '@/components/atoms/ThemedButton/ThemedButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function TicketDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  
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
        maxWidth="md"
        sx={{
          py: { xs: 4, md: 6 },
          width: '100%',
        }}
      >
        <Box sx={{ mb: 4 }}>
          <ThemedButton
            href="/mis-reportes"
            variant="outlined"
            iconColor="primary"
            startIcon={<ArrowBackIcon />}
            customSx={{ mb: 2 }}
          >
            Volver
          </ThemedButton>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
            Detalle del Ticket
          </Typography>
        </Box>
        <TicketDetail ticketId={id} />
      </Container>
    </Box>
  );
}

