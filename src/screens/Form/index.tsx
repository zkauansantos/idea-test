import { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { RegisterContext } from "../../context/RegisterContext";

import {
  Container,
  FooterContainer,
  FormContainer,
  HeaderContainer,
} from "./styles";

import { StackTypes } from "../../routes/Stack";
import { LegalEntityPersonSchemaYup } from "./schemas/LegalEntityPersonSchemaYup";
import { NaturalPersonSchemaYup } from "./schemas/NaturalPersonSchemaYup";
import useValidateForm from "../../hooks/useValidateForm";

import { Text } from "../../components/Text";
import Button from "../../components/Button";
import FormNaturalPerson from "../../components/FormNaturalPerson";
import FormLegalEntityPerson from "../../components/FormLegalEntityPerson";
import { Platform } from "react-native";

interface RouteParams {
  personType: "PJ" | "PF";
}



export default function FormScreen() {
  const route = useRoute();
  const navigate = useNavigation<StackTypes>();
  const { personType } = route.params as RouteParams;
  const { registerPerson } = useContext(RegisterContext);

  const schema =
    personType === "PJ" ? LegalEntityPersonSchemaYup : NaturalPersonSchemaYup;

  const { control, errors, handleSubmit } = useValidateForm(schema);

  const handleRegister = (data: any) => {
    console.log(data);
    registerPerson(data);

    navigate.navigate("DetailsPerson");
  };

  return (
    <>
      <Container
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <HeaderContainer>
          <Text weight='700' color='#FFF' size={28}>
            Cadastro {personType}
          </Text>
        </HeaderContainer>

        <FormContainer>
          {personType === "PF" && (
            <FormNaturalPerson control={control} errors={errors} />
          )}
          {personType === "PJ" && (
            <FormLegalEntityPerson control={control} errors={errors} />
          )}
        </FormContainer>
        <FooterContainer>
          <Button onPress={handleSubmit(handleRegister)}>Cadastrar</Button>
        </FooterContainer>
      </Container>
    </>
  );
}
