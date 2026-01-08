import { configureStore } from "@reduxjs/toolkit";
import { ticketsApi } from "./api/ticketsApi";

/**
 * Store de la aplicación
 * Principio: Single Responsibility - Solo maneja el store de la aplicación
 * Principio: Open/Closed - Extensible mediante configureStore
 */
export const store = configureStore({
	reducer: {
		[ticketsApi.reducerPath]: ticketsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(ticketsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
