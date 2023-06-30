import { useContext } from 'react';
import { Text } from '../../components/Text';
import {
	ContainerDetails,
	Content,
	DocumentImage,
	FieldDetail,
	HeaderContainer,
} from './styles';
import { RegisterContext } from '../../context/RegisterContext';
import { FlatList, View } from 'react-native';

export default function DetailsPerson() {
	const { person } = useContext(RegisterContext);

	return (
		<Content>
			<HeaderContainer>
				<Text color="#FFF" weight="600" size={28}>
          Detalhes
				</Text>
			</HeaderContainer>

			<ContainerDetails>
				<FlatList
					style={{ width: '100%' }}
					scrollEnabled={false}
					data={person}
					keyExtractor={(person, i) => `${person} - ${i}`}
					renderItem={({ item: person }) => {
						console.log(person);
						return (
							<>
								<FieldDetail>
									<Text color="#777" weight="600" size={18}>
                    Nome
									</Text>
									<Text color="#f2f2f2" weight="400" size={14}>
										{person.name}
									</Text>
								</FieldDetail>
								<FieldDetail>
									<Text color="#777" weight="600" size={18}>
                    E-mail
									</Text>
									<Text color="#f2f2f2" weight="400" size={14}>
										{person.email}
									</Text>
								</FieldDetail>
								<FieldDetail>
									<Text color="#777" weight="600" size={18}>
                    CPF
									</Text>
									<Text color="#f2f2f2" weight="400" size={14}>
										{person.cpf}
									</Text>
								</FieldDetail>
								<FieldDetail>
									<Text color="#777" weight="600" size={18}>
                    Gênero
									</Text>
									<Text color="#f2f2f2" weight="400" size={14}>
										{person.genre}
									</Text>
								</FieldDetail>
								<FieldDetail>
									<Text color="#777" weight="600" size={18}>
                    Endereço
									</Text>
									<Text color="#f2f2f2" weight="400" size={14}>
										{person.address}
									</Text>
								</FieldDetail>
								<FieldDetail>
									<Text color="#777" weight="600" size={18}>
                    Telefone
									</Text>
									<Text color="#f2f2f2" weight="400" size={14}>
										{person.phone}
									</Text>
								</FieldDetail>
							</>
						);
					}}
				/>

				<View>
					<Text color="#777" weight="600" size={18}>
            Documentos
					</Text>
					<DocumentImage source={{ uri: person[0].imageUrl }} />
				</View>
			</ContainerDetails>
		</Content>
	);
}
