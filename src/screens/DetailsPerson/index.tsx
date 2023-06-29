import { useContext } from "react";
import { Container } from "../../components/Container";
import { Text } from "../../components/Text";
import { Content } from "./styles";
import { RegisterContext } from "../../context/RegisterContext";

export default function DetailsPerson() {
  const { person } = useContext(RegisterContext);

  console.log(person);

  return (
    <Container>
      <Content>
        <Text weight='700' size={24} color='#fff'>
          {person[0]?.name}
        </Text>
        <Text weight='700' size={24} color='#fff'>
          {person[0]?.cpf}
        </Text>
        <Text weight='700' size={24} color='#fff'>
          {person[0]?.email}
        </Text>
        <Text weight='700' size={24} color='#fff'>
          {person[0]?.rg}
        </Text>
        <Text weight='700' size={24} color='#fff'>
          {person[0]?.endereco}
        </Text>
        <Text weight='700' size={24} color='#fff'>
          {person[0]?.genre}
        </Text>
        <Text weight='700' size={24} color='#fff'>
          {person[0]?.number}
        </Text>
      </Content>
    </Container>
  );
}
