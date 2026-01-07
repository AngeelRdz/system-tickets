/**
 * Utilidad para formatear fechas
 * Principio: Single Responsibility - Solo se encarga de formatear fechas
 */
export const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	const datePart = date.toLocaleDateString("es-ES", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
	const timePart = date.toLocaleTimeString("es-ES", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	});
	return `${datePart} ${timePart}`;
};

export const formatDateTime = (dateString: string): string => {
	const date = new Date(dateString);
	return date.toLocaleDateString("es-ES", {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});
};
