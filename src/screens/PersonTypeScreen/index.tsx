import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import { Text } from '../../components/Text';
import Button from '../../components/Button';

import { StackTypes } from '../../routes/Stack';

import { BoxButtons, Content } from './styles';

export default function PersonTypeScreen() {
	const [selectedTypePerson, setSelectedTypePerson] = useState('');
	const navigate = useNavigation<StackTypes>();

	useEffect(() => {
		if (selectedTypePerson !== '') {
			navigate.navigate('Form', {
				personType: selectedTypePerson,
			});
		}

		return () => setSelectedTypePerson('');
	}, [selectedTypePerson, navigate]);

	function handleSelect(personSelected: string) {
		setSelectedTypePerson(personSelected);
	}

	return (
		<Content>
			<Text size={24} weight='700' color='#fff'>
        Escolha o tipo de cadastro
			</Text>

			<BoxButtons>
				<Button onPress={() => handleSelect('PF')}>Pessoa Física</Button>
				<Button onPress={() => handleSelect('PJ')}>Pessoa Jurídica</Button>
			</BoxButtons>
		</Content>
	);
}
