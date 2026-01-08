import { useState } from "react";
import { useRouter } from "next/navigation";
import {
	useGetTicketByIdQuery,
	useDeleteTicketMutation,
	useUpdateTicketMutation,
} from "@/store/api/ticketsApi";
import { TicketStatus } from "@/types/ticket";
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

	const handleDeleteClick = () => {
		setDeleteDialogOpen(true);
	};

	const handleDeleteConfirm = async () => {
		setIsDeleting(true);
		try {
			await ensureMinimumDelay(deleteTicket(ticketId).unwrap(), 500);
			router.push("/mis-reportes");
		} catch (error) {
			console.error("Error al eliminar ticket:", error);
			setIsDeleting(false);
		}
	};

	const handleDeleteCancel = () => {
		if (!isDeleting) {
			setDeleteDialogOpen(false);
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

	return {
		ticket,
		isLoading,
		isError,
		deleteDialogOpen,
		isDeleting,
		handleDeleteClick,
		handleDeleteConfirm,
		handleDeleteCancel,
		handleStatusChange,
	};
};
