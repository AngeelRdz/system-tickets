'use client';

import { Button, ButtonProps, SxProps, Theme } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getButtonStyles } from '@/utils/styles/buttonStyles';
import Link from 'next/link';

interface ThemedButtonProps extends Omit<ButtonProps, 'sx'> {
	iconColor?: 'primary' | 'secondary';
	customSx?: SxProps<Theme>;
	href?: string;
}

/**
 * Componente atómico de botón con estilos temáticos personalizados
 * Usa getButtonStyles para aplicar estilos consistentes en toda la aplicación
 * Principio: Single Responsibility - Solo renderiza un botón estilizado
 * Principio: Open/Closed - Extensible mediante ButtonProps
 */
export const ThemedButton = ({
	iconColor = 'primary',
	variant = 'contained',
	customSx,
	href,
	children,
	...buttonProps
}: ThemedButtonProps) => {
	const theme = useTheme();
	const color = iconColor === 'primary' ? theme.palette.primary : theme.palette.secondary;

	const styles = getButtonStyles(
		variant as 'contained' | 'outlined',
		iconColor,
		color
	);

	const combinedSx: SxProps<Theme> = customSx 
		? ([styles, customSx] as SxProps<Theme>)
		: styles;

	const button = (
		<Button
			{...buttonProps}
			variant={variant}
			sx={combinedSx}
		>
			{children}
		</Button>
	);

	if (href) {
		return (
			<Link href={href} style={{ textDecoration: 'none' }}>
				{button}
			</Link>
		);
	}

	return button;
};

