'use client';

import { Box } from '@mui/material';
import { ThemedButton } from '@/components/atoms/ThemedButton/ThemedButton';

interface TicketActionsBarProps {
	onDelete: () => void;
	deleteLabel?: string;
}

/**
 * Componente para la barra de acciones del ticket
 * Principio: Single Responsibility - Solo renderiza las acciones
 * Principio: Open/Closed - Extensible mediante props
 */
export const TicketActionsBar = ({
	onDelete,
	deleteLabel = 'Eliminar Ticket',
}: TicketActionsBarProps) => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
			<ThemedButton
				variant="outlined"
				iconColor="primary"
				onClick={onDelete}
				customSx={{
					borderColor: 'error.main',
					color: 'error.main',
					'&:hover': {
						borderColor: 'error.dark',
						bgcolor: 'error.light',
						color: 'error.contrastText',
					},
				}}
			>
				{deleteLabel}
			</ThemedButton>
		</Box>
	);
};

