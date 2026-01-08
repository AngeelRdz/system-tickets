'use client';

import { Typography, Box, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTicketDetail } from '@/hooks/useTicketDetail';
import { TicketDetailContent } from '@/components/organisms/TicketDetailContent/TicketDetailContent';
import { DeleteConfirmDialog } from '@/components/molecules/shared/DeleteConfirmDialog/DeleteConfirmDialog';

interface TicketDetailProps {
	ticketId: string;
}

/**
 * Componente principal del detalle de ticket
 * Principio: Single Responsibility - Solo orquesta la presentación
 * Principio: Dependency Inversion - Depende de abstracciones (hooks, componentes)
 */
export const TicketDetail = ({ ticketId }: TicketDetailProps) => {
	const theme = useTheme();
	const {
		ticket,
		isLoading,
		isError,
		deleteDialogOpen,
		isDeleting,
		handleDeleteClick,
		handleDeleteConfirm,
		handleDeleteCancel,
		handleStatusChange,
	} = useTicketDetail(ticketId);

	if (isLoading) {
		return (
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: '400px',
				}}
			>
				<CircularProgress sx={{ color: theme.palette.primary.main }} />
			</Box>
		);
	}

	if (isError || !ticket) {
		return <Typography color="error">Ticket no encontrado</Typography>;
	}

	return (
		<>
			<TicketDetailContent
				ticket={ticket}
				onDelete={handleDeleteClick}
				onStatusChange={handleStatusChange}
			/>

			<DeleteConfirmDialog
				open={deleteDialogOpen}
				onClose={handleDeleteCancel}
				onConfirm={handleDeleteConfirm}
				isLoading={isDeleting}
				message="¿Estás seguro de que deseas eliminar este ticket? Esta acción no se puede deshacer."
			/>
		</>
	);
};

