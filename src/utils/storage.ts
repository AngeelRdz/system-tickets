import { Ticket } from "@/types/ticket";

const STORAGE_KEY = "tickets";

/**
 * Servicio de almacenamiento para la aplicación
 * Principio: Single Responsibility - Solo maneja el almacenamiento de la aplicación
 * Principio: Open/Closed - Extensible mediante storageService
 */
export const storageService = {
	getTickets: (): Ticket[] => {
		if (typeof window === "undefined") return [];
		const stored = localStorage.getItem(STORAGE_KEY);
		return stored ? JSON.parse(stored) : [];
	},

	saveTickets: (tickets: Ticket[]): void => {
		if (typeof window === "undefined") return;
		localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
	},

	addTicket: (ticket: Ticket): void => {
		const tickets = storageService.getTickets();
		tickets.push(ticket);
		storageService.saveTickets(tickets);
	},

	deleteTicket: (id: string): void => {
		const tickets = storageService.getTickets();
		const filtered = tickets.filter((t) => t.id !== id);
		storageService.saveTickets(filtered);
	},

	getTicketById: (id: string): Ticket | undefined => {
		const tickets = storageService.getTickets();
		return tickets.find((t) => t.id === id);
	},

	updateTicket: (id: string, updates: Partial<Ticket>): void => {
		const tickets = storageService.getTickets();
		const index = tickets.findIndex((t) => t.id === id);
		if (index !== -1) {
			tickets[index] = { ...tickets[index], ...updates };
			storageService.saveTickets(tickets);
		}
	},
};
