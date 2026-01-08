import { Chip } from '@mui/material';
import { TicketStatus } from '@/types/ticket';

/**
 * Componente atómico de badge para el estado del ticket
 * Principio: Single Responsibility - Solo renderiza un badge para el estado
 * Principio: Open/Closed - Extensible mediante ChipProps
 */
interface StatusBadgeProps {
  status: TicketStatus;
}

const statusColors: Record<TicketStatus, 'default' | 'primary' | 'warning' | 'success' | 'error'> = {
  pendiente: 'warning',
  en_proceso: 'primary',
  resuelto: 'success',
  cerrado: 'default',
};

const statusLabels: Record<TicketStatus, string> = {
  pendiente: 'Pendiente',
  en_proceso: 'En Proceso',
  resuelto: 'Resuelto',
  cerrado: 'Cerrado',
};

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <Chip
      label={statusLabels[status]}
      color={statusColors[status]}
      size="small"
    />
  );
};

