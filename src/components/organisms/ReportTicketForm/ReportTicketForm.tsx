'use client';

import { Box, Paper, Alert, CircularProgress, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useTicketForm } from '@/hooks/useTicketForm';
import { FormField } from '@/components/molecules/ReportTicket/FormField/FormField';
import { PrioritySelect } from '@/components/molecules/ReportTicket/PrioritySelect/PrioritySelect';
import { FileUpload } from '@/components/molecules/ReportTicket/FileUpload/FileUpload';
import { ThemedButton } from '@/components/atoms/ThemedButton/ThemedButton';
import { TicketFormData } from '@/schemas/ticketSchema';

/**
 * Componente del formulario para reportar tickets
 * Principio: Single Responsibility - Solo se encarga de renderizar el formulario
 * Principio: Dependency Inversion - Depende de abstracciones (hooks, componentes)
 */
export const ReportTicketForm = () => {
	const router = useRouter();
	const { form, onSubmit, isLoading, isError } = useTicketForm();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = form;

	return (
		<Paper
			sx={{
				p: 4,
				borderRadius: 2,
				boxShadow: 3,
			}}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 3,
						maxWidth: '500px',
						mx: 'auto',
					}}
				>
					{isError && (
						<Alert severity="error">
							Error al crear el ticket. Por favor, intenta nuevamente.
						</Alert>
					)}

					<FormField<TicketFormData>
						name="asunto"
						control={control}
						error={errors.asunto?.message}
						textFieldProps={{
							label: 'Asunto',
							required: false,
						}}
					/>

					<PrioritySelect<TicketFormData>
						name="prioridad"
						control={control}
						error={errors.prioridad?.message}
					/>

					<FormField<TicketFormData>
						name="detalle"
						control={control}
						error={errors.detalle?.message}
						textFieldProps={{
							label: 'Detalle',
							multiline: true,
							rows: 4,
							required: false,
						}}
					/>

					<FileUpload<TicketFormData>
						name="archivo"
						control={control}
						error={errors.archivo?.message}
					/>

					<Box
						sx={{
							display: 'flex',
							gap: 2,
							justifyContent: 'center',
							mt: 2,
						}}
					>
						<ThemedButton
							variant="outlined"
							iconColor="primary"
							onClick={() => router.push('/')}
							disabled={isLoading}
							customSx={{ minWidth: 120 }}
						>
							Cancelar
						</ThemedButton>
						<ThemedButton
							type="submit"
							variant="contained"
							iconColor="primary"
							disabled={isLoading}
							customSx={{ minWidth: 160 }}
							startIcon={
								isLoading ? (
									<CircularProgress size={20} sx={{ color: 'common.white' }} />
								) : null
							}
						>
							<Typography
								component="span"
								sx={{
									color: isLoading ? 'common.white' : 'inherit',
								}}
							>
								{isLoading ? 'Creando ticket...' : 'Crear Ticket'}
							</Typography>
						</ThemedButton>
					</Box>
				</Box>
			</form>
		</Paper>
	);
};

