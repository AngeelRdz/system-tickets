import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
	useGetTicketByIdQuery,
	useDeleteTicketMutation,
	useUpdateTicketMutation,
} from "@/store/api/ticketsApi";
import { TicketStatus, Ticket } from "@/types/ticket";
import { ensureMinimumDelay } from "@/utils/delay";

/**
 * Hook personalizado para manejar la lógica del detalle de ticket
 * Principio: Single Responsibility - Solo maneja la lógica del detalle
 * Principio: Separation of Concerns - Separa lógica de presentación
 */
export const useTicketDetail = (ticketId: string) => {
	const router = useRouter();
	const { data: ticket, isLoading, isError } = useGetTicketByIdQuery(ticketId);
	const [deleteTicket] = useDeleteTicketMutation();
	const [updateTicket] = useUpdateTicketMutation();
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [savedTicket, setSavedTicket] = useState<Ticket | null>(null);

	useEffect(() => {
		if (ticket && !isDeleting) {
			setSavedTicket(ticket);
		}
	}, [ticket, isDeleting]);

	const handleDeleteClick = () => {
		if (ticket) {
			setSavedTicket(ticket);
		}
		setDeleteDialogOpen(true);
		setIsDeleting(false);
	};

	const handleDeleteConfirm = async () => {
		setIsDeleting(true);
		try {
			await ensureMinimumDelay(deleteTicket(ticketId).unwrap(), 500);
			setDeleteDialogOpen(false);
			setIsDeleting(false);
			setSavedTicket(null);
			router.push("/mis-reportes");
		} catch (error) {
			console.error("Error al eliminar ticket:", error);
			setIsDeleting(false);
		}
	};

	const handleDeleteCancel = () => {
		if (!isDeleting) {
			setDeleteDialogOpen(false);
			setIsDeleting(false);
		}
	};

	const handleStatusChange = async (newStatus: TicketStatus) => {
		try {
			await updateTicket({
				id: ticketId,
				updates: { estatus: newStatus },
			}).unwrap();
		} catch (error) {
			console.error("Error al actualizar estatus:", error);
		}
	};

	const displayTicket = isDeleting && savedTicket ? savedTicket : ticket;

	return {
		ticket: displayTicket,
		isLoading,
		isError: isDeleting ? false : isError,
		deleteDialogOpen,
		isDeleting,
		handleDeleteClick,
		handleDeleteConfirm,
		handleDeleteCancel,
		handleStatusChange,
	};
};
