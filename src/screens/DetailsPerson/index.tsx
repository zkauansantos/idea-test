import { useContext } from "react";
import { Text } from "../../components/Text";
import { ContainerDetails, Content, HeaderContainer } from "./styles";
import { RegisterContext } from "../../context/RegisterContext";
import { FlatList } from "react-native";

export default function DetailsPerson() {
  const { person } = useContext(RegisterContext);

  return (
    <Content>
      <HeaderContainer>
        <Text color='#FFF' weight='600' size={28}>
          Detalhes
        </Text>
      </HeaderContainer>

      <ContainerDetails>
        <FlatList
          data={person}
          keyExtractor={(person, i) => `${person} - ${i}`}
          renderItem={({ item: person }) => {
            console.log(person);
            return (
              <>
                <Text color='#FFF' weight='600'>
                  {person.name}
                </Text>
                <Text color='#FFF' weight='600'>
                  {person.cpf}
                </Text>
                <Text color='#FFF' weight='600'>
                  {person.email}
                </Text>
                <Text color='#FFF' weight='600'>
                  {person.genre}
                </Text>
                <Text color='#FFF' weight='600'>
                  {person.phone}
                </Text>
                <Text color='#FFF' weight='600'>
                  {person.rg}
                </Text>
              </>
            );
          }}
        />
      </ContainerDetails>
    </Content>
  );
}
