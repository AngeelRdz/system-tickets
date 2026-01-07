import { TicketPriority } from '@/types/ticket';

/**
 * Constantes relacionadas con tickets
 * Principio: Single Responsibility - Solo contiene constantes
 */
export const TICKET_PRIORITIES: { value: TicketPriority; label: string }[] = [
	{ value: 'baja', label: 'Baja' },
	{ value: 'media', label: 'Media' },
	{ value: 'alta', label: 'Alta' },
	{ value: 'urgente', label: 'Urgente' },
];

export const DEFAULT_TICKET_PRIORITY: TicketPriority = 'media';

export const TICKET_FORM_DEFAULT_VALUES = {
	asunto: '',
	prioridad: DEFAULT_TICKET_PRIORITY,
	detalle: '',
};

