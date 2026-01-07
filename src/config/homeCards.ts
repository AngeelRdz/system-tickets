import { ReactElement } from "react";
import React from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BugReportIcon from "@mui/icons-material/BugReport";

export interface HomeCardConfig {
	title: string;
	description: string;
	buttonText: string;
	buttonVariant: "contained" | "outlined";
	icon: ReactElement;
	iconColor: "primary" | "secondary";
	href: string;
}

export const HOME_CARDS_CONFIG: HomeCardConfig[] = [
	{
		title: "Reportar un Problema",
		description: "Crea un nuevo ticket para reportar un problema.",
		buttonText: "Crear Nuevo Ticket",
		buttonVariant: "contained",
		icon: React.createElement(BugReportIcon),
		iconColor: "primary",
		href: "/reportar",
	},
	{
		title: "Mis Reportes",
		description: "Visualiza y gestiona todos tus tickets.",
		buttonText: "Ver Mis Reportes",
		buttonVariant: "outlined",
		icon: React.createElement(ListAltIcon),
		iconColor: "secondary",
		href: "/mis-reportes",
	},
];
