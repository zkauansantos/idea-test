import { useNavigation } from '@react-navigation/native';

import { Text } from '../../components/Text';
import Button from '../../components/Button';

import { StackTypes } from '../../routes/Stack';

import { BoxButtons, Content } from './styles';

export default function PersonTypeScreen() {
	const navigate = useNavigation<StackTypes>();

	function handleSelect(personSelected: string) {
		navigate.navigate('Form', {
			personType: personSelected,
		});
	}

	return (
		<Content>
			<Text size={24} weight="700">
        Escolha o tipo de cadastro
			</Text>

			<BoxButtons>
				<Button onPress={() => handleSelect('PF')}>Pessoa Física</Button>
				<Button onPress={() => handleSelect('PJ')}>Pessoa Jurídica</Button>
			</BoxButtons>
		</Content>
	);
}
