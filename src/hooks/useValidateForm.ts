import { UseFormReturn, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues } from 'react-hook-form/dist/types';

export default function useValidateForm<T extends FieldValues>(schema: any) {
	const {
		handleSubmit,
		formState,
		reset,
		trigger,
		control,
		setValue,
	}: UseFormReturn<T> = useForm({
		resolver: yupResolver(schema),
	});

	const { errors } = formState;

	return {
		errors,
		control,
		reset,
		handleSubmit,
		trigger,
		setValue,
	};
}
