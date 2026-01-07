'use client';

import { useState, useEffect } from 'react';
import { Controller, Control, FieldPath, FieldValues } from 'react-hook-form';
import { Box, Button, Typography, Avatar } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';

interface FileUploadProps<T extends FieldValues> {
	name: FieldPath<T>;
	control: Control<T>;
	error?: string;
}

/**
 * Componente interno para manejar el preview de imagen
 */
const FileUploadField = ({
	value,
	onChange,
	field,
	error,
}: {
	value: File | undefined;
	onChange: (file: File | undefined) => void;
	field: any;
	error?: string;
}) => {
	const [preview, setPreview] = useState<string | null>(null);

	useEffect(() => {
		if (value && value instanceof File) {
			const isImage = value.type.startsWith('image/');
			if (isImage) {
				const reader = new FileReader();
				reader.onloadend = () => {
					setPreview(reader.result as string);
				};
				reader.readAsDataURL(value);
			} else {
				setPreview(null);
			}
		} else {
			setPreview(null);
		}
	}, [value]);

	const isImage = value && value instanceof File && value.type.startsWith('image/');

	return (
		<Box>
			<Box
				sx={{
					display: 'flex',
					gap: 2,
					alignItems: 'flex-start',
				}}
			>
				<Box sx={{ flex: 1 }}>
					<Button variant="outlined" component="label" fullWidth>
						Adjuntar Archivo
						<input
							{...field}
							type="file"
							accept="image/*"
							hidden
							onChange={(e) => {
								const file = e.target.files?.[0];
								if (file) {
									onChange(file);
								}
							}}
						/>
					</Button>
					{value && (
						<Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
							{value.name}
						</Typography>
					)}
					{error && (
						<Typography variant="caption" color="error" sx={{ mt: 1, display: 'block' }}>
							{error}
						</Typography>
					)}
				</Box>
				{isImage && preview && (
					<Box
						sx={{
							flexShrink: 0,
						}}
					>
						<Avatar
							src={preview}
							alt="Preview"
							variant="rounded"
							sx={{
								width: 120,
								height: 120,
								border: '2px solid',
								borderColor: 'primary.main',
								boxShadow: 2,
							}}
						>
							<ImageIcon />
						</Avatar>
					</Box>
				)}
			</Box>
		</Box>
	);
};

/**
 * Componente para subir archivos con preview de imagen
 * Principio: Single Responsibility - Solo maneja la carga de archivos
 */
export const FileUpload = <T extends FieldValues>({
	name,
	control,
	error,
}: FileUploadProps<T>) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value, ...field } }) => (
				<FileUploadField
					value={value}
					onChange={onChange}
					field={field}
					error={error}
				/>
			)}
		/>
	);
};

