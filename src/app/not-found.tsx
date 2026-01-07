import Link from 'next/link';
import { Button, Container, Typography, Box } from '@mui/material';

export default function NotFound() {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" gutterBottom>
          Página no encontrada
        </Typography>
        <Link href="/">
          <Button variant="contained" sx={{ mt: 3 }}>
            Volver al inicio
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

