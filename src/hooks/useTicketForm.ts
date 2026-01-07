import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCreateTicketMutation } from "@/store/api/ticketsApi";
import { ticketFormSchema, TicketFormData } from "@/schemas/ticketSchema";
import { TICKET_FORM_DEFAULT_VALUES } from "@/constants/ticketConstants";
import { CreateTicketDto } from "@/types/ticket";

/**
 * Hook personalizado para manejar la lógica del formulario de tickets
 * Principio: Single Responsibility - Solo maneja la lógica del formulario
 * Principio: Separation of Concerns - Separa lógica de presentación
 */
export const useTicketForm = () => {
	const router = useRouter();
	const [createTicket, { isLoading: isCreating, isError }] =
		useCreateTicketMutation();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<TicketFormData>({
		resolver: zodResolver(ticketFormSchema),
		defaultValues: TICKET_FORM_DEFAULT_VALUES,
	});

	const onSubmit = async (data: TicketFormData) => {
		setIsSubmitting(true);
		try {
			const ticketData: CreateTicketDto = {
				asunto: data.asunto,
				prioridad: data.prioridad,
				detalle: data.detalle,
				archivo: data.archivo,
			};

			await createTicket(ticketData).unwrap();
			await new Promise((resolve) => setTimeout(resolve, 800));

			router.push("/mis-reportes");
		} catch (error) {
			console.error("Error al crear ticket:", error);
			setIsSubmitting(false);
		}
	};

	const isLoading = isCreating || isSubmitting;

	return {
		form,
		onSubmit,
		isLoading,
		isError,
	};
};
