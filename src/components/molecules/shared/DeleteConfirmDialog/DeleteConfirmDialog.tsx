'use client';

import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Typography,
	CircularProgress,
} from '@mui/material';
import { ThemedButton } from '@/components/atoms/ThemedButton/ThemedButton';

interface DeleteConfirmDialogProps {
	open: boolean;
	onClose: () => void;
	onConfirm: () => void;
	isLoading?: boolean;
	title?: string;
	message?: string;
}

/**
 * Componente reutilizable para diálogo de confirmación de eliminación
 * Principio: Single Responsibility - Solo maneja el diálogo de confirmación
 * Principio: Open/Closed - Extensible mediante props
 */
export const DeleteConfirmDialog = ({
	open,
	onClose,
	onConfirm,
	isLoading = false,
	title = 'Confirmar eliminación',
	message = '¿Estás seguro de que deseas eliminar este elemento? Esta acción no se puede deshacer.',
}: DeleteConfirmDialogProps) => {
	return (
		<Dialog open={open} onClose={isLoading ? undefined : onClose}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<Typography>{message}</Typography>
			</DialogContent>
			<DialogActions>
				<ThemedButton
					variant="outlined"
					iconColor="primary"
					onClick={onClose}
					disabled={isLoading}
				>
					Cancelar
				</ThemedButton>
				<ThemedButton
					variant="contained"
					iconColor="primary"
					onClick={onConfirm}
					disabled={isLoading}
					customSx={{
						bgcolor: 'error.main',
						'&:hover': {
							bgcolor: 'error.dark',
						},
					}}
					startIcon={
						isLoading ? (
							<CircularProgress size={20} sx={{ color: 'common.white' }} />
						) : null
					}
				>
					{isLoading ? 'Eliminando...' : 'Eliminar'}
				</ThemedButton>
			</DialogActions>
		</Dialog>
	);
};

