'use client';

import { Paper, Box, Typography } from '@mui/material';
import { Ticket, TicketStatus } from '@/types/ticket';
import { TicketHeader } from '@/components/molecules/TicketDetail/TicketHeader/TicketHeader';
import { DetailField } from '@/components/molecules/TicketDetail/DetailField/DetailField';
import { TicketActionsBar } from '@/components/molecules/TicketDetail/TicketActionsBar/TicketActionsBar';
import { StatusSelect } from '@/components/molecules/TicketDetail/StatusSelect/StatusSelect';
import { ImagePreview } from '@/components/molecules/TicketDetail/ImagePreview/ImagePreview';
import { formatDateTime } from '@/utils/dateFormatter';

interface TicketDetailContentProps {
	ticket: Ticket;
	onDelete: () => void;
	onStatusChange: (status: TicketStatus) => void;
}

/**
 * Componente para el contenido del detalle del ticket
 * Principio: Single Responsibility - Solo renderiza el contenido del detalle
 * Principio: Dependency Inversion - Depende de abstracciones (props)
 */
export const TicketDetailContent = ({
	ticket,
	onDelete,
	onStatusChange,
}: TicketDetailContentProps) => {
	const isImageFile = ticket.archivo && /\.(jpg|jpeg|png|gif|webp)$/i.test(ticket.archivo);

	return (
		<Paper
			sx={{
				p: 4,
				borderRadius: 2,
				boxShadow: 3,
			}}
		>
			<TicketHeader
				title={ticket.asunto}
				priority={ticket.prioridad}
				status={ticket.estatus}
			/>

			<Box sx={{ mb: 3 }}>
				<Typography variant="subtitle2" color="text.secondary" gutterBottom>
					Cambiar Estatus
				</Typography>
				<StatusSelect
					value={ticket.estatus}
					onChange={onStatusChange}
				/>
			</Box>

			<DetailField
				label="Fecha de creación"
				value={formatDateTime(ticket.fecha)}
			/>

			<DetailField label="Detalle" value={ticket.detalle} />

			{ticket.archivo && (
				<Box sx={{ mb: 3 }}>
					<Typography variant="subtitle2" color="text.secondary" gutterBottom>
						Archivo adjunto
					</Typography>
					{isImageFile ? (
						<ImagePreview fileName={ticket.archivo} imageData={ticket.archivoData} />
					) : (
						<Typography variant="body2" sx={{ fontStyle: 'italic' }}>
							{ticket.archivo}
						</Typography>
					)}
				</Box>
			)}

			<TicketActionsBar onDelete={onDelete} />
		</Paper>
	);
};

