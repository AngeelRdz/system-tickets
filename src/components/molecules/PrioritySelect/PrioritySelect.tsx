'use client';

import { Controller, Control, FieldPath, FieldValues } from 'react-hook-form';
import { TextField, MenuItem } from '@mui/material';
import { TICKET_PRIORITIES } from '@/constants/ticketConstants';

interface PrioritySelectProps<T extends FieldValues> {
	name: FieldPath<T>;
	control: Control<T>;
	error?: string;
}

/**
 * Componente para seleccionar prioridad de ticket
 * Principio: Single Responsibility - Solo maneja la selección de prioridad
 */
export const PrioritySelect = <T extends FieldValues>({
	name,
	control,
	error,
}: PrioritySelectProps<T>) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<TextField
					{...field}
					select
					label="Prioridad"
					fullWidth
					error={!!error}
					helperText={error}
					required
					FormHelperTextProps={{
						sx: {
							color: error ? 'error.main' : 'text.secondary',
							m: error ? '4px 0 0 0' : '4px 0 0 0',
						},
					}}
				>
					{TICKET_PRIORITIES.map((priority) => (
						<MenuItem key={priority.value} value={priority.value}>
							{priority.label}
						</MenuItem>
					))}
				</TextField>
			)}
		/>
	);
};

