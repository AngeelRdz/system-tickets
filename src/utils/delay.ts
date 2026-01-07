/**
 * Utilidad para asegurar un tiempo mínimo de visualización
 * Útil para operaciones muy rápidas donde queremos mostrar feedback visual
 */
export const ensureMinimumDelay = async <T>(
	promise: Promise<T>,
	minDelay: number = 300
): Promise<T> => {
	const startTime = Date.now();
	const result = await promise;
	const elapsedTime = Date.now() - startTime;

	if (elapsedTime < minDelay) {
		await new Promise((resolve) => setTimeout(resolve, minDelay - elapsedTime));
	}

	return result;
};
