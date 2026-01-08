import { Chip } from '@mui/material';
import { TicketPriority } from '@/types/ticket';

/**
 * Componente atómico de badge para la prioridad del ticket
 * Principio: Single Responsibility - Solo renderiza un badge para la prioridad
 * Principio: Open/Closed - Extensible mediante ChipProps
 */
interface PriorityBadgeProps {
  priority: TicketPriority;
}

const priorityColors: Record<TicketPriority, 'default' | 'primary' | 'warning' | 'error'> = {
  baja: 'default',
  media: 'primary',
  alta: 'warning',
  urgente: 'error',
};

const priorityLabels: Record<TicketPriority, string> = {
  baja: 'Baja',
  media: 'Media',
  alta: 'Alta',
  urgente: 'Urgente',
};

export const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
  return (
    <Chip
      label={priorityLabels[priority]}
      color={priorityColors[priority]}
      size="small"
    />
  );
};

