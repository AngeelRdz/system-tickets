'use client';

import { TableRow, TableCell } from '@mui/material';
import { Ticket } from '@/types/ticket';
import { PriorityBadge } from '@/components/atoms/PriorityBadge/PriorityBadge';
import { StatusBadge } from '@/components/atoms/StatusBadge/StatusBadge';
import { TicketActions } from '@/components/molecules/TicketList/TicketActions/TicketActions';
import { formatDate } from '@/utils/dateFormatter';

interface TicketTableRowProps {
	ticket: Ticket;
	onDelete: (id: string, asunto: string) => void;
}

/**
 * Componente para renderizar una fila de la tabla de tickets
 * Principio: Single Responsibility - Solo renderiza una fila de ticket
 */
export const TicketTableRow = ({ ticket, onDelete }: TicketTableRowProps) => {
	return (
		<TableRow key={ticket.id} hover>
			<TableCell>{ticket.asunto}</TableCell>
			<TableCell>
				<PriorityBadge priority={ticket.prioridad} />
			</TableCell>
			<TableCell>{formatDate(ticket.fecha)}</TableCell>
			<TableCell>
				<StatusBadge status={ticket.estatus} />
			</TableCell>
			<TableCell align="right">
				<TicketActions ticketId={ticket.id} ticketAsunto={ticket.asunto} onDelete={onDelete} />
			</TableCell>
		</TableRow>
	);
};

