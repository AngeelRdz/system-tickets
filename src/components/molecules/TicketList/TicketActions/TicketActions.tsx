'use client';

import { IconButton, Tooltip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';

interface TicketActionsProps {
  ticketId: string;
  ticketAsunto: string;
  onDelete: (id: string, asunto: string) => void;
}

/**
 * Componente para las acciones del ticket
 * Principio: Single Responsibility - Solo maneja las acciones del ticket
 * Principio: Open/Closed - Extensible mediante props
 */
export const TicketActions = ({ ticketId, ticketAsunto, onDelete }: TicketActionsProps) => {
  return (
    <>
      <Link href={`/ticket/${ticketId}`}>
        <Tooltip title="Ver detalle">
          <IconButton color="primary" size="small">
            <VisibilityIcon />
          </IconButton>
        </Tooltip>
      </Link>
      <Tooltip title="Eliminar">
        <IconButton
          color="error"
          size="small"
          onClick={(e) => {
            e.currentTarget.blur();
            onDelete(ticketId, ticketAsunto);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};

