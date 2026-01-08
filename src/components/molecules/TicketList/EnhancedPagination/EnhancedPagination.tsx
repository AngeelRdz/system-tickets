'use client';

import {
	Box,
	Pagination,
	Button,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	Typography,
} from '@mui/material';
import {
	FirstPage,
	LastPage,
	ChevronLeft,
	ChevronRight,
} from '@mui/icons-material';
import { ITEMS_PER_PAGE_OPTIONS } from '@/constants/paginationConstants';

interface EnhancedPaginationProps {
	page: number;
	totalPages: number;
	itemsPerPage: number;
	totalItems: number;
	onPageChange: (page: number) => void;
	onItemsPerPageChange: (itemsPerPage: number) => void;
}

/**
 * Componente de paginación mejorado con navegación y selector de items
 * Principio: Single Responsibility - Solo maneja la paginación
 * Principio: Open/Closed - Extensible mediante props
 */
export const EnhancedPagination = ({
	page,
	totalPages,
	itemsPerPage,
	totalItems,
	onPageChange,
	onItemsPerPageChange,
}: EnhancedPaginationProps) => {
	const handleFirstPage = () => onPageChange(1);
	const handleLastPage = () => onPageChange(totalPages);
	const handlePreviousPage = () => onPageChange(Math.max(1, page - 1));
	const handleNextPage = () => onPageChange(Math.min(totalPages, page + 1));

	const startItem = totalItems === 0 ? 0 : (page - 1) * itemsPerPage + 1;
	const endItem = Math.min(page * itemsPerPage, totalItems);
	
	// Calcular si los botones deben estar disabled
	// Solo deshabilitar si realmente no hay páginas o estamos en los extremos
	const hasNoPages = totalPages === 0 || totalItems === 0;
	const isFirstPage = page <= 1;
	const isLastPage = page >= totalPages;

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: { xs: 'column', sm: 'row' },
				alignItems: { xs: 'stretch', sm: 'center' },
				justifyContent: 'space-between',
				gap: 2,
				mt: 3,
				p: 2,
				borderRadius: 1,
				bgcolor: 'background.paper',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: 0,
					flexWrap: 'wrap',
				}}
			>
				<Button
					onClick={handleFirstPage}
					disabled={hasNoPages || isFirstPage}
					size="small"
					aria-label="Primera página"
					sx={{ minWidth: 'auto', px: 0.5 }}
				>
					<FirstPage />
				</Button>
				<Button
					onClick={handlePreviousPage}
					disabled={hasNoPages || isFirstPage}
					size="small"
					aria-label="Página anterior"
					sx={{ minWidth: 'auto', px: 0.5 }}
				>
					<ChevronLeft />
				</Button>
				<Pagination
					count={totalPages || 1}
					page={page}
					onChange={(_, value) => onPageChange(value)}
					color="primary"
					size="small"
					sx={{ mx: 0.5 }}
					hidePrevButton
					hideNextButton
				/>
				<Button
					onClick={handleNextPage}
					disabled={hasNoPages || isLastPage}
					size="small"
					aria-label="Página siguiente"
					sx={{ minWidth: 'auto', px: 0.5 }}
				>
					<ChevronRight />
				</Button>
				<Button
					onClick={handleLastPage}
					disabled={hasNoPages || isLastPage}
					size="small"
					aria-label="Última página"
					sx={{ minWidth: 'auto', px: 0.5 }}
				>
					<LastPage />
				</Button>
			</Box>

			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: 2,
					flexWrap: 'wrap',
				}}
			>
				<Typography variant="body2" color="text.secondary">
					{startItem}-{endItem} de {totalItems} elementos
				</Typography>
				<Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
					Página {page}/{totalPages > 0 ? totalPages : 1}
				</Typography>
				<FormControl size="small" sx={{ minWidth: 120 }}>
					<InputLabel>Por página</InputLabel>
					<Select
						value={itemsPerPage}
						label="Por página"
						onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
					>
						{ITEMS_PER_PAGE_OPTIONS.map((option) => (
							<MenuItem key={option} value={option}>
								{option}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		</Box>
	);
};

