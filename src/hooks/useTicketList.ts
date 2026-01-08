import { useState } from "react";
import {
	useGetTicketsQuery,
	useDeleteTicketMutation,
	useGetTotalTicketsQuery,
} from "@/store/api/ticketsApi";
import { DEFAULT_ITEMS_PER_PAGE } from "@/constants/paginationConstants";
import { ensureMinimumDelay } from "@/utils/delay";

/**
 * Hook personalizado para manejar la lógica de la lista de tickets
 * Principio: Single Responsibility - Solo maneja la lógica de la lista
 * Principio: Separation of Concerns - Separa lógica de presentación
 */
export const useTicketList = () => {
	const [page, setPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [ticketToDelete, setTicketToDelete] = useState<string | null>(null);
	const [ticketAsunto, setTicketAsunto] = useState<string | null>(null);

	const { data: tickets = [], isLoading } = useGetTicketsQuery({
		page,
		limit: itemsPerPage,
	});
	const { data: totalTickets = 0 } = useGetTotalTicketsQuery();
	const [deleteTicket] = useDeleteTicketMutation();
	const [isDeleting, setIsDeleting] = useState(false);

	const totalPages = Math.ceil(totalTickets / itemsPerPage);

	const handleItemsPerPageChange = (newItemsPerPage: number) => {
		setItemsPerPage(newItemsPerPage);
		setPage(1);
	};

	const handleDelete = (id: string, asunto: string) => {
		setTicketToDelete(id);
		setTicketAsunto(asunto);
		setIsDeleting(false); // Resetear estado al abrir nuevo diálogo
		setDeleteDialogOpen(true);
	};

	const confirmDelete = async () => {
		if (ticketToDelete) {
			setIsDeleting(true);
			try {
				await ensureMinimumDelay(deleteTicket(ticketToDelete).unwrap(), 500);
				setDeleteDialogOpen(false);
				setTicketToDelete(null);
				setTicketAsunto(null);
				setIsDeleting(false); // Resetear estado después de eliminar

				if (tickets.length === 1 && page > 1) {
					setPage(page - 1);
				}
			} catch (error) {
				console.error("Error al eliminar ticket:", error);
				setIsDeleting(false);
			}
		}
	};

	const closeDeleteDialog = () => {
		if (!isDeleting) {
			setDeleteDialogOpen(false);
			setTicketToDelete(null);
			setTicketAsunto(null);
			setIsDeleting(false); // Resetear estado al cerrar
		}
	};

	return {
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
		ticketToDelete,
		ticketAsunto,
		isDeleting,
	};
};
