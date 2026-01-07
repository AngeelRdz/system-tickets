import { SxProps, Theme } from "@mui/material";
import { colorPalette } from "@/config/theme";
import { alpha } from "@mui/material";

/**
 * Utilidad para obtener estilos de botón según variante e iconColor
 * Principio: Single Responsibility - Solo se encarga de generar estilos de botón
 */
export const getButtonStyles = (
	buttonVariant: "contained" | "outlined",
	iconColor: "primary" | "secondary",
	color: { main: string; dark: string }
): SxProps<Theme> => {
	const baseStyles: SxProps<Theme> = {
		py: 1.5,
		fontSize: "1rem",
		fontWeight: 600,
		textTransform: "none",
		borderRadius: 2,
	};

	if (buttonVariant === "contained") {
		return {
			...baseStyles,
			background:
				iconColor === "primary"
					? colorPalette.gradient.primary
					: colorPalette.gradient.secondary,
			"&:hover": {
				background:
					iconColor === "primary"
						? colorPalette.gradient.dark
						: colorPalette.gradient.primary,
			},
		};
	}

	return {
		...baseStyles,
		borderWidth: 2,
		borderColor: color.main,
		color: color.main,
		"&:hover": {
			borderWidth: 2,
			borderColor: color.dark,
			bgcolor: alpha(color.main, 0.08),
		},
	};
};

