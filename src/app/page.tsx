import { Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Gestiona tus tickets de ayuda de manera eficiente
        </Typography>
    </Container>
  );
}

