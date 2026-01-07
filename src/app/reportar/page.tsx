import { Container, Typography, Box } from '@mui/material';
import { ReportTicketForm } from '@/components/organisms/ReportTicketForm/ReportTicketForm';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';

export default function ReportarPage() {
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
        maxWidth="sm"
        sx={{
          py: { xs: 4, md: 6 },
          width: '100%',
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Link href="/">
            <Button startIcon={<ArrowBackIcon />} variant="outlined" sx={{ mb: 2 }}>
              Volver
            </Button>
          </Link>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
            Reportar un Problema
          </Typography>
        </Box>
        <ReportTicketForm />
      </Container>
    </Box>
  );
}

