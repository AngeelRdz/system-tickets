export type TicketPriority = "baja" | "media" | "alta" | "urgente";

export type TicketStatus = "pendiente" | "en_proceso" | "resuelto" | "cerrado";

export interface Ticket {
	id: string;
	asunto: string;
	prioridad: TicketPriority;
	detalle: string;
	archivo?: string;
	archivoData?: string;
	fecha: string;
	estatus: TicketStatus;
}

export interface CreateTicketDto {
	asunto: string;
	prioridad: TicketPriority;
	detalle: string;
	archivo?: File;
}
