'use client';

import { Box, Avatar, Typography } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';

interface ImagePreviewProps {
	fileName: string;
	imageData?: string; // Base64 data
}

/**
 * Componente para mostrar preview de imagen
 * Principio: Single Responsibility - Solo muestra preview de imagen
 */
export const ImagePreview = ({ fileName, imageData }: ImagePreviewProps) => {
	if (!imageData) {
		return (
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 1,
				}}
			>
				<Avatar
					variant="rounded"
					sx={{
						width: 200,
						height: 200,
						border: '2px solid',
						borderColor: 'divider',
						bgcolor: 'grey.100',
					}}
				>
					<ImageIcon sx={{ fontSize: 60, color: 'grey.400' }} />
				</Avatar>
				<Typography variant="caption" color="text.secondary">
					{fileName}
				</Typography>
			</Box>
		);
	}

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: 1,
			}}
		>
			<Avatar
				src={imageData}
				alt={fileName}
				variant="rounded"
				sx={{
					width: 200,
					height: 200,
					border: '2px solid',
					borderColor: 'primary.main',
					boxShadow: 2,
					objectFit: 'cover',
				}}
			>
				<ImageIcon />
			</Avatar>
			<Typography variant="caption" color="text.secondary">
				{fileName}
			</Typography>
		</Box>
	);
};

