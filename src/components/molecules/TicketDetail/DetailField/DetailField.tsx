'use client';

import { Box, Typography } from '@mui/material';

interface DetailFieldProps {
	label: string;
	value: string | React.ReactNode;
}

/**
 * Componente reutilizable para mostrar un campo de detalle
 * Principio: Single Responsibility - Solo renderiza un campo de detalle
 * Principio: Open/Closed - Extensible mediante props
 */
export const DetailField = ({ label, value }: DetailFieldProps) => {
	return (
		<Box sx={{ mb: 3 }}>
			<Typography variant="subtitle2" color="text.secondary" gutterBottom>
				{label}
			</Typography>
			{typeof value === 'string' ? (
				<Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
					{value}
				</Typography>
			) : (
				value
			)}
		</Box>
	);
};

