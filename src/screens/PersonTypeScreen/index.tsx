import { useState } from "react";
import { Text } from "../../components/Text";
import { BoxButtons, Content } from "./styles";
import { Container } from "../../components/Container";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/Stack";

export default function PersonTypeScreen() {
  const [selectedTypePerson, setSelectedTypePerson] = useState("");
  const navigate = useNavigation<StackTypes>();

  function handleSelect(personSelected: string) {
    setSelectedTypePerson(personSelected);
    navigate.navigate("Form", { personType: selectedTypePerson });
  }

  return (
    <Container>
      <Content>
        <Text size={24} weight='700' color='#fff'>
          Escolha o tipo de cadastro
        </Text>

        <BoxButtons>
          <Button onPress={() => handleSelect("PF")}>
            Pessoa Física
          </Button>
          <Button onPress={() => handleSelect("PJ")}>
            Pessoa Jurídica
          </Button>
        </BoxButtons>
      </Content>
    </Container>
  );
}
