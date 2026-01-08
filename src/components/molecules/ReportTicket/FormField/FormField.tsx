'use client';

import { Controller, Control, FieldPath, FieldValues } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

interface FormFieldProps<T extends FieldValues> {
	name: FieldPath<T>;
	control: Control<T>;
	error?: string;
	textFieldProps?: TextFieldProps;
}

/**
 * Componente reutilizable para campos de formulario
 * Principio: Single Responsibility - Solo renderiza un campo de formulario
 * Principio: Open/Closed - Extensible mediante textFieldProps
 */
export const FormField = <T extends FieldValues>({
	name,
	control,
	error,
	textFieldProps,
}: FormFieldProps<T>) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<TextField
					{...field}
					{...textFieldProps}
					fullWidth
					error={!!error}
					helperText={error}
					FormHelperTextProps={{
						sx: {
							color: error ? 'error.main' : 'text.secondary',
							m: error ? '4px 0 0 0' : '4px 0 0 0',
						},
					}}
				/>
			)}
		/>
	);
};

