import { AntDesign } from '@expo/vector-icons';
import { Text } from '../../components/Text';
import { FinishContainer } from './styles';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import { StackTypes } from '../../routes/Stack';

export default function Finish() {
	const navigator = useNavigation<StackTypes>();

	return (
		<FinishContainer>
			<Text size={26} weight="700" align="center">
        Seu cadastro foi realizado com sucesso!
			</Text>
			<AntDesign name="smileo" size={64} color="#7c3aed" />
			<Button onPress={() => navigator.navigate('PersonType')}>
        Realizar outro cadastro
			</Button>
		</FinishContainer>
	);
}
