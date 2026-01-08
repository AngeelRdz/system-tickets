/**
 * Constantes de paginación
 * Principio: Single Responsibility - Solo contiene constantes de paginación
 */
export const ITEMS_PER_PAGE_OPTIONS = [5, 10, 15] as const;
export const DEFAULT_ITEMS_PER_PAGE = 5;

// Constantes de altura de tabla
export const ROW_HEIGHT = 53;
export const MIN_TABLE_HEIGHT = ROW_HEIGHT * DEFAULT_ITEMS_PER_PAGE;
