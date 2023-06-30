import SelectDropdown from 'react-native-select-dropdown';
import { AntDesign } from '@expo/vector-icons';
import { Control, Controller, FieldErrors, FieldValues } from 'react-hook-form';
import { ErrorFeedback } from '../ErrorFeedBack';
import { SelectContainer } from './styles';

const genres = ['Masculino', 'Feminino', 'Prefiro não informar'];

interface SelectProps {
  control: Control<FieldValues, any>;
  errors: FieldErrors<any>;
  name: string;
  defaultButtonText: string;
}

export default function Select({
	control,
	errors,
	name,
	defaultButtonText,
}: SelectProps) {
	return (
		<SelectContainer>
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange } }) => (
					<SelectDropdown
						data={genres}
						onSelect={onChange}
						defaultButtonText={defaultButtonText}
						renderDropdownIcon={() => (
							<AntDesign name='caretdown' size={16} color='#555' />
						)}
						dropdownIconPosition='left'
						buttonStyle={{
							backgroundColor: '#333',
							padding: 0,
							height: 42,
							width: 190,
							borderStyle: 'solid',
							borderColor: '#555',
							borderWidth: 1,
							borderRadius: 4,
						}}
						buttonTextStyle={{
							color: '#fff',
							fontSize: 14,
						}}
						dropdownStyle={{
							backgroundColor: '#333',
							borderColor: '#333',
						}}
						rowTextStyle={{
							color: '#fff',
						}}
						rowStyle={{
							backgroundColor: '#333',
							height: 35,
						}}
					/>
				)}
			/>
			{!!errors[name] && <ErrorFeedback>{errors[name]?.message}</ErrorFeedback>}
		</SelectContainer>
	);
}
