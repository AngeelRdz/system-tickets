'use client';

import { Box, Typography, Divider } from '@mui/material';
import { PriorityBadge } from '@/components/atoms/PriorityBadge/PriorityBadge';
import { StatusBadge } from '@/components/atoms/StatusBadge/StatusBadge';
import { TicketPriority, TicketStatus } from '@/types/ticket';

interface TicketHeaderProps {
	title: string;
	priority: TicketPriority;
	status: TicketStatus;
}

/**
 * Componente para el encabezado del ticket
 * Principio: Single Responsibility - Solo renderiza el encabezado
 */
export const TicketHeader = ({ title, priority, status }: TicketHeaderProps) => {
	return (
		<Box sx={{ mb: 3 }}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'start',
					mb: 2,
				}}
			>
				<Typography variant="h5" component="h2">
					{title}
				</Typography>
				<Box sx={{ display: 'flex', gap: 1 }}>
					<PriorityBadge priority={priority} />
					<StatusBadge status={status} />
				</Box>
			</Box>
			<Divider />
		</Box>
	);
};

