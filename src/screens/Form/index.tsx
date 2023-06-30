import { Platform, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import useForm from './useForm';

import { Text } from '../../components/Text';
import { ErrorFeedback } from '../../components/ErrorFeedBack';
import FormNaturalPerson from '../../components/FormNaturalPerson';
import FormLegalEntityPerson from '../../components/FormLegalEntityPerson';
import Button from '../../components/Button';

import {
	ButtonSendImageDocument,
	Container,
	FooterContainer,
	FormContainer,
	HeaderContainer,
} from './styles';
import { Controller } from 'react-hook-form';

export default function FormScreen() {
	const {
		control,
		errors,
		personType,
		handleSubmit,
		handleRegister,
		handleUserDocumentPhotoSelect,
	} = useForm();

	return (
		<>
			<Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
				<HeaderContainer>
					<Text weight="700" size={28}>
            Cadastro {personType}
					</Text>
				</HeaderContainer>

				<FormContainer>
					{personType === 'PF' && (
						<FormNaturalPerson control={control} errors={errors} />
					)}
					{personType === 'PJ' && (
						<FormLegalEntityPerson control={control} errors={errors} />
					)}

					<View>
						<Controller
							control={control}
							name="document"
							render={() => (
								<>
									<ButtonSendImageDocument
										onPress={handleUserDocumentPhotoSelect}
									>
										<Text>Enviar documento</Text>
										<AntDesign name="camerao" size={22} color="#999" />
									</ButtonSendImageDocument>
									{!!errors?.document && (
										<ErrorFeedback>
											{errors.document.message?.toString()}
										</ErrorFeedback>
									)}
								</>
							)}
						/>
					</View>
				</FormContainer>

				<FooterContainer>
					<Button onPress={handleSubmit(handleRegister)}>Cadastrar</Button>
				</FooterContainer>
			</Container>
		</>
	);
}
