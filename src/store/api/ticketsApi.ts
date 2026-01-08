import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Ticket, CreateTicketDto } from "@/types/ticket";
import { storageService } from "@/utils/storage";

export const ticketsApi = createApi({
	reducerPath: "ticketsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
	tagTypes: ["Ticket"],
	endpoints: (builder) => ({
		getTickets: builder.query<Ticket[], { page?: number; limit?: number }>({
			queryFn: ({ page = 1, limit = 10 }) => {
				try {
					const allTickets = storageService.getTickets();
					const startIndex = (page - 1) * limit;
					const endIndex = startIndex + limit;
					const paginatedTickets = allTickets.slice(startIndex, endIndex);

					return {
						data: paginatedTickets,
					};
				} catch (error) {
					return { error: { status: "CUSTOM_ERROR", error: String(error) } };
				}
			},
			providesTags: ["Ticket"],
		}),

		getTicketById: builder.query<Ticket, string>({
			queryFn: (id) => {
				try {
					const ticket = storageService.getTicketById(id);
					if (!ticket) {
						return {
							error: { status: "CUSTOM_ERROR", error: "Ticket no encontrado" },
						};
					}
					return { data: ticket };
				} catch (error) {
					return { error: { status: "CUSTOM_ERROR", error: String(error) } };
				}
			},
			providesTags: (result, error, id) => [{ type: "Ticket", id }],
		}),

		createTicket: builder.mutation<Ticket, CreateTicketDto>({
			queryFn: async (ticketData) => {
				try {
					let archivoData: string | undefined;

					if (
						ticketData.archivo &&
						ticketData.archivo.type.startsWith("image/")
					) {
						archivoData = await new Promise<string>((resolve, reject) => {
							const reader = new FileReader();
							reader.onloadend = () => {
								resolve(reader.result as string);
							};
							reader.onerror = reject;
							reader.readAsDataURL(ticketData.archivo!);
						});
					}

					const newTicket: Ticket = {
						id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
						asunto: ticketData.asunto,
						prioridad: ticketData.prioridad,
						detalle: ticketData.detalle,
						archivo: ticketData.archivo?.name,
						archivoData,
						fecha: new Date().toISOString(),
						estatus: "pendiente",
					};

					storageService.addTicket(newTicket);
					return { data: newTicket };
				} catch (error) {
					return { error: { status: "CUSTOM_ERROR", error: String(error) } };
				}
			},
			invalidatesTags: ["Ticket"],
		}),

		deleteTicket: builder.mutation<void, string>({
			queryFn: (id) => {
				try {
					storageService.deleteTicket(id);
					return { data: null as any };
				} catch (error) {
					return { error: { status: "CUSTOM_ERROR", error: String(error) } };
				}
			},
			invalidatesTags: ["Ticket"],
		}),

		updateTicket: builder.mutation<
			Ticket,
			{ id: string; updates: Partial<Ticket> }
		>({
			queryFn: ({ id, updates }) => {
				try {
					const ticket = storageService.getTicketById(id);
					if (!ticket) {
						return {
							error: { status: "CUSTOM_ERROR", error: "Ticket no encontrado" },
						};
					}
					storageService.updateTicket(id, updates);
					const updatedTicket = storageService.getTicketById(id);
					return { data: updatedTicket! };
				} catch (error) {
					return { error: { status: "CUSTOM_ERROR", error: String(error) } };
				}
			},
			invalidatesTags: (result, error, { id }) => [
				{ type: "Ticket", id },
				"Ticket",
			],
		}),

		getTotalTickets: builder.query<number, void>({
			queryFn: () => {
				try {
					const tickets = storageService.getTickets();
					return { data: tickets.length };
				} catch (error) {
					return { error: { status: "CUSTOM_ERROR", error: String(error) } };
				}
			},
			providesTags: ["Ticket"],
		}),
	}),
});

export const {
	useGetTicketsQuery,
	useGetTicketByIdQuery,
	useCreateTicketMutation,
	useDeleteTicketMutation,
	useUpdateTicketMutation,
	useGetTotalTicketsQuery,
} = ticketsApi;
