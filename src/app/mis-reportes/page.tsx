import { Container, Typography, Box } from '@mui/material';
import { TicketList } from '@/components/organisms/TicketList/TicketList';
import { ThemedButton } from '@/components/atoms/ThemedButton/ThemedButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function MisReportesPage() {
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
        <Box sx={{ mb: 4 }}>
          <ThemedButton
            href="/"
            variant="outlined"
            iconColor="primary"
            startIcon={<ArrowBackIcon />}
            customSx={{ mb: 2 }}
          >
            Volver
          </ThemedButton>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
            Mis Reportes
          </Typography>
        </Box>
        <TicketList />
      </Container>
    </Box>
  );
}

