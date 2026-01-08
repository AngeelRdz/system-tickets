'use client';

import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { store } from '@/store/store';
import { theme } from '@/config/theme';

/**
 * Componente providers para la aplicación
 * Principio: Single Responsibility - Solo provee los providers para la aplicación
 * Principio: Open/Closed - Extensible mediante ProvidersProps
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  );
}

