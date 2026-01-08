import { Chip } from '@mui/material';
import { TicketPriority } from '@/types/ticket';

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

