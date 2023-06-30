import { Text } from '../Text';
import { ButtonContainer } from './styles';

interface ButtonProps {
  children: string;
  onPress(): void;
}

export default function Button({ children, onPress }: ButtonProps) {
	return (
		<ButtonContainer onPress={onPress}>
			<Text weight="600" color="#fff">
				{children}
			</Text>
		</ButtonContainer>
	);
}
