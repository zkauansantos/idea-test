import { useContext, useEffect } from 'react';
import { Text } from '../../components/Text';
import {
	ButtonFinish,
	ContainerDetails,
	ContainerDocImage,
	Content,
	DocumentImage,
	FieldDetail,
	HeaderContainer,
} from './styles';
import { RegisterContext } from '../../context/RegisterContext';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/Stack';

export default function DetailsPerson() {
	const { person, setPerson } = useContext(RegisterContext);
	const navigator = useNavigation<StackTypes>();

	useEffect(() => {
		return () => setPerson([]);
	}, []);

	const translation = {
		name: 'Nome',
		email: 'E-mail',
		cpf: 'CPF',
		genre: 'Gênero',
		address: 'Endereço',
		phone: 'Telefone',
		document: 'Documentos',
		legalRepresentativeDocument: 'CPF do Representante Legal',
	};

	return (
		<Content>
			<HeaderContainer>
				<Text weight="600" size={28}>
          Detalhes
				</Text>
				<ButtonFinish onPress={() => navigator.navigate('Finish')}>
					<Text weight="600" size={16}>
            Concluir cadastro
					</Text>
				</ButtonFinish>
			</HeaderContainer>

			<ContainerDetails>
				<FlatList
					style={{ width: '100%', paddingBottom: 48 }}
					data={person}
					keyExtractor={(person, i) => `${person} - ${i}`}
					renderItem={({ item: person }) => {
						console.log(person);
						return (
							<>
								{Object.keys(person).map((key) => {
									if (key !== 'document') {
										return (
											<FieldDetail key={key}>
												<Text color="#777" weight="600" size={18}>
													{translation[key] ||
                            key.charAt(0).toUpperCase() + key.slice(1)}
												</Text>
												<Text color="#f2f2f2" weight="400" size={14}>
													{person[key]}
												</Text>
											</FieldDetail>
										);
									}
								})}
								{person.document && (
									<FieldDetail>
										<Text color="#777" weight="600" size={18}>
											{translation['document']}
										</Text>
										<ContainerDocImage>
											<DocumentImage source={{ uri: person.document }} />
										</ContainerDocImage>
									</FieldDetail>
								)}
							</>
						);
					}}
				/>
			</ContainerDetails>
		</Content>
	);
}
