import { Control, FieldErrors, FieldValues } from 'react-hook-form';
import Field from '../Field';

interface FormLegalEntityPersonProps {
  control: Control<FieldValues, any>;
  errors: FieldErrors<any>;
}

export default function FormLegalEntityPerson({
	control,
	errors,
}: FormLegalEntityPersonProps) {
	return (
		<>
			<Field
				control={control}
				name="name"
				errors={errors}
				placeholder="Razão social"
			/>

			<Field
				control={control}
				name="email"
				errors={errors}
				placeholder="E-mail"
			/>

			<Field
				control={control}
				name="cnpj"
				number
				errors={errors}
				placeholder="CNPJ"
				maxLength={14}
			/>

			<Field
				control={control}
				name="legalRepresentativeDocument"
				number
				errors={errors}
				placeholder="CPF"
				maxLength={11}
			/>

			<Field
				control={control}
				name="address"
				errors={errors}
				placeholder="Endereço"
				maxLength={50}
			/>

			<Field
				control={control}
				number
				name="phone"
				errors={errors}
				placeholder="Telefone"
			/>
		</>
	);
}
