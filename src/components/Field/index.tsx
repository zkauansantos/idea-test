import { Control, Controller, FieldErrors, FieldValues } from 'react-hook-form';
import { Input } from './styles';
import { FieldContainer } from './styles';
import { ErrorFeedback } from '../ErrorFeedBack';

interface FieldProps {
  control: Control<FieldValues, any>;
  name: string;
  errors: FieldErrors<any>;
  placeholder: string;
  number?: boolean;
  maxLength?: number;
}

export default function Field({
	control,
	name,
	placeholder,
	errors,
	number,
	maxLength = 200,
}: FieldProps) {
	return (
		<FieldContainer>
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, onBlur, value } }) => (
					<Input
						onChangeText={onChange}
						onBlur={onBlur}
						value={value}
						placeholder={placeholder}
						placeholderTextColor="#555"
						keyboardType={number ? 'numeric' : 'default'}
						maxLength={maxLength}
					/>
				)}
			/>
			{!!errors[name] && (
				<ErrorFeedback>{errors[name]?.message?.toString()}</ErrorFeedback>
			)}
		</FieldContainer>
	);
}
