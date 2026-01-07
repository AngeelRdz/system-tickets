'use client';

import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { TicketStatus } from '@/types/ticket';

interface StatusSelectProps {
	value: TicketStatus;
	onChange: (status: TicketStatus) => void;
	disabled?: boolean;
}

const STATUS_OPTIONS: { value: TicketStatus; label: string }[] = [
	{ value: 'pendiente', label: 'Pendiente' },
	{ value: 'en_proceso', label: 'En Proceso' },
	{ value: 'resuelto', label: 'Resuelto' },
	{ value: 'cerrado', label: 'Cerrado' },
];

/**
 * Componente para seleccionar el estatus de un ticket
 * Principio: Single Responsibility - Solo maneja la selección de estatus
 */
export const StatusSelect = ({ value, onChange, disabled }: StatusSelectProps) => {
	return (
		<FormControl size="small" sx={{ minWidth: 150 }}>
			<InputLabel>Estatus</InputLabel>
			<Select
				value={value}
				label="Estatus"
				onChange={(e) => onChange(e.target.value as TicketStatus)}
				disabled={disabled}
			>
				{STATUS_OPTIONS.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

