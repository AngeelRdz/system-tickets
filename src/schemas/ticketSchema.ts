import { z } from "zod";
import { TicketPriority } from "@/types/ticket";

/**
 * Esquema de validación para el formulario de tickets
 * Principio: Single Responsibility - Solo se encarga de la validación
 */
export const ticketFormSchema = z.object({
	asunto: z.string().min(1, "El asunto es requerido"),
	prioridad: z.enum(["baja", "media", "alta", "urgente"] as [
		TicketPriority,
		...TicketPriority[]
	]),
	detalle: z.string().min(10, "El detalle debe tener al menos 10 caracteres"),
	archivo: z.instanceof(File).optional(),
});

export type TicketFormData = z.infer<typeof ticketFormSchema>;
