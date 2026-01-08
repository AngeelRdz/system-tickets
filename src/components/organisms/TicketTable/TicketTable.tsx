'use client';

import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	Paper,
} from '@mui/material';
import { Ticket } from '@/types/ticket';
import { TicketTableRow } from '@/components/molecules/TicketList/TicketTableRow/TicketTableRow';
import { useTheme, alpha } from '@mui/material/styles';
import { MIN_TABLE_HEIGHT, ROW_HEIGHT, DEFAULT_ITEMS_PER_PAGE } from '@/constants/paginationConstants';

interface TicketTableProps {
	tickets: Ticket[];
	onDelete: (id: string, asunto: string) => void;
}

/**
 * Componente para la tabla de tickets
 * Principio: Single Responsibility - Solo renderiza la tabla
 */
export const TicketTable = ({ tickets, onDelete }: TicketTableProps) => {
	const theme = useTheme();
	const currentRows = tickets.length;
	const emptyRows = Math.max(0, DEFAULT_ITEMS_PER_PAGE - currentRows);

	return (
		<TableContainer component={Paper} sx={{ minHeight: MIN_TABLE_HEIGHT }}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell
							sx={{
								backgroundColor: alpha(theme.palette.primary.main, 0.08),
								fontWeight: 600,
							}}
						>
							Asunto
						</TableCell>
						<TableCell
							sx={{
								backgroundColor: alpha(theme.palette.primary.main, 0.08),
								fontWeight: 600,
							}}
						>
							Prioridad
						</TableCell>
						<TableCell
							sx={{
								backgroundColor: alpha(theme.palette.primary.main, 0.08),
								fontWeight: 600,
							}}
						>
							Fecha
						</TableCell>
						<TableCell
							sx={{
								backgroundColor: alpha(theme.palette.primary.main, 0.08),
								fontWeight: 600,
							}}
						>
							Estatus
						</TableCell>
						<TableCell
							align="right"
							sx={{
								backgroundColor: alpha(theme.palette.primary.main, 0.08),
								fontWeight: 600,
							}}
						>
							Acciones
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{tickets.map((ticket) => (
						<TicketTableRow 
							key={ticket.id} 
							ticket={ticket} 
							onDelete={(id, asunto) => onDelete(id, asunto)} 
						/>
					))}
					{emptyRows > 0 &&
						Array.from({ length: emptyRows }).map((_, index) => (
							<TableRow key={`empty-${index}`} sx={{ height: ROW_HEIGHT }}>
								<TableCell colSpan={5} />
							</TableRow>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

