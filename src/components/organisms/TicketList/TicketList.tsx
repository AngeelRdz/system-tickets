'use client';

import { Typography, Paper, Box, CircularProgress } from '@mui/material';
import { useTicketList } from '@/hooks/useTicketList';
import { TicketTable } from '@/components/organisms/TicketTable/TicketTable';
import { DeleteConfirmDialog } from '@/components/molecules/shared/DeleteConfirmDialog/DeleteConfirmDialog';
import { EnhancedPagination } from '@/components/molecules/TicketList/EnhancedPagination/EnhancedPagination';
import { useTheme } from '@mui/material/styles';
import { MIN_TABLE_HEIGHT } from '@/constants/paginationConstants';

/**
 * Componente principal de la lista de tickets
 * Principio: Single Responsibility - Solo orquesta la presentación
 * Principio: Dependency Inversion - Depende de abstracciones (hooks, componentes)
 */
export const TicketList = () => {
	const theme = useTheme();
	const {
		tickets,
		isLoading,
		page,
		setPage,
		totalPages,
		itemsPerPage,
		handleItemsPerPageChange,
		totalTickets,
		handleDelete,
		confirmDelete,
		deleteDialogOpen,
		closeDeleteDialog,
		ticketAsunto,
		isDeleting,
	} = useTicketList();

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

	if (tickets.length === 0 && totalTickets === 0) {
		return (
			<Paper
				sx={{
					minHeight: MIN_TABLE_HEIGHT,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
				}}
			>
				<Typography variant="h6" color="text.secondary">
					No hay tickets registrados
				</Typography>
			</Paper>
		);
	}

	return (
		<>
			<TicketTable tickets={tickets} onDelete={handleDelete} />

			<EnhancedPagination
				page={page}
				totalPages={totalPages}
				itemsPerPage={itemsPerPage}
				totalItems={totalTickets}
				onPageChange={setPage}
				onItemsPerPageChange={handleItemsPerPageChange}
			/>

			<DeleteConfirmDialog
				open={deleteDialogOpen}
				onClose={closeDeleteDialog}
				onConfirm={confirmDelete}
				isLoading={isDeleting}
				message={
					ticketAsunto
						? `¿Estás seguro de que deseas eliminar el ticket "${ticketAsunto}"? Esta acción no se puede deshacer.`
						: "¿Estás seguro de que deseas eliminar este ticket? Esta acción no se puede deshacer."
				}
			/>
		</>
	);
};
