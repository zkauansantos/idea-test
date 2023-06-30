import { AntDesign } from '@expo/vector-icons';
import { Text } from '../../components/Text';
import { FinishContainer } from './styles';

export default function Finish() {
	return (
		<FinishContainer>
			<Text size={26} weight="700" align="center">
        Seu cadastro foi realizado com sucesso!
			</Text>
			<AntDesign name="smileo" size={64} color="#7c3aed" />
		</FinishContainer>
	);
}
