import { createTheme, ThemeOptions } from "@mui/material/styles";

const baseColor = "#132d55";

const colorPalette = {
	primary: {
		main: baseColor,
		light: "#1a3d6b",
		dark: "#0d1f3a",
		contrastText: "#ffffff",
	},
	secondary: {
		main: "#2d5aa0",
		light: "#4a7bc4",
		dark: "#1e3d6b",
		contrastText: "#ffffff",
	},
	error: {
		main: "#d32f2f",
		light: "#ef5350",
		dark: "#c62828",
		contrastText: "#ffffff",
	},
	accent: {
		main: "#4a90e2",
		light: "#6ba8f0",
		dark: "#2d6bb8",
	},
	gradient: {
		primary: `linear-gradient(135deg, ${baseColor}, #2d5aa0)`,
		secondary: `linear-gradient(135deg, #2d5aa0, #4a90e2)`,
		accent: `linear-gradient(135deg, #4a90e2, #6ba8f0)`,
		dark: `linear-gradient(135deg, #0d1f3a, ${baseColor})`,
	},
};

export const themeOptions: ThemeOptions = {
	palette: {
		mode: "light",
		primary: colorPalette.primary,
		secondary: colorPalette.secondary,
		error: colorPalette.error,
		background: {
			default: "#f5f7fa",
			paper: "#ffffff",
		},
		text: {
			primary: "#1a1a1a",
			secondary: "#666666",
		},
	},
	typography: {
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
		].join(","),
		h1: {
			fontWeight: 700,
			color: baseColor,
		},
		h2: {
			fontWeight: 700,
			color: baseColor,
		},
		h3: {
			fontWeight: 600,
			color: baseColor,
		},
		h4: {
			fontWeight: 600,
			color: baseColor,
		},
		button: {
			fontWeight: 600,
			textTransform: "none",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					padding: "10px 24px",
				},
				contained: {
					background: colorPalette.gradient.primary,
					"&:hover": {
						background: colorPalette.gradient.dark,
					},
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 12,
					boxShadow: "0 2px 8px rgba(19, 45, 85, 0.1)",
				},
			},
		},
	},
};

export const theme = createTheme(themeOptions);

export { colorPalette };
