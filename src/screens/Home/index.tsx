import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/Stack';
import Button from '../../components/Button';
import { Text } from '../../components/Text';
import { Content } from './styles';
import { View } from 'react-native';

export default function HomeScreen() {
	const navigate = useNavigation<StackTypes>();

	function handleNavigate() {
		navigate.navigate('PersonType');
	}

	return (
		<Content>
			<View>
				<Text style={{ marginBottom: 4 }} weight='700' color='#FFF' size={24}>
          Bem-vindo ao RegistralApp
				</Text>
				<Text color='#FFF' weight='400' opacity={0.6}>
          Aqui, você pode realizar o cadastro de pessoas físicas e jurídicas de
          forma fácil e segura.
				</Text>
			</View>

			<Button onPress={handleNavigate}>Começar</Button>
		</Content>
	);
}
