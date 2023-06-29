import { useNavigation, useRoute } from "@react-navigation/native";

import {
  Content,
  FooterContainer,
  FormContainer,
  HeaderContainer,
  Input,
  Wrapper,
} from "./styles";

import { Controller, useForm } from "react-hook-form";
import { Text } from "../../components/Text";
import { Container } from "../../components/Container";
import Button from "../../components/Button";
import Select from "../../components/Select";
import Field from "../../components/Field";
import { StackTypes } from "../../routes/Stack";
import { useContext } from "react";
import { RegisterContext } from "../../context/RegisterContext";

interface RouteParams {
  personType: string;
}

export default function FormScreen() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({});
  const route = useRoute();
  const navigate = useNavigation<StackTypes>();
  const { registerPerson } = useContext(RegisterContext);

  const handleRegister = (data: any) => {
    console.log(data);
    registerPerson(data);

    navigate.navigate("DetailsPerson");
  };

  const { personType } = route.params as RouteParams;

  return (
    <Container>
      <Content>
        <HeaderContainer>
          <Text weight='700' color='#FFF' size={28}>
            Cadastrar
          </Text>
        </HeaderContainer>

        <FormContainer>
          <Field control={control} name='name' placeholder='Nome' />

          <Field control={control} name='email' placeholder='E-mail' />

          <Field control={control} name='cpf' placeholder='CPF' />

          <Wrapper>
            <Field control={control} name='rg' placeholder='RG' />

            <Controller
              control={control}
              name='genre'
              render={({ field: { onChange } }) => (
                <Select onSelect={onChange} />
              )}
            />
          </Wrapper>

          <Field control={control} name='endereco' placeholder='Endereço' />

          <Field control={control} name='number' placeholder='Telefone' />

          <Field control={control} name='number' placeholder='Telefone' />
        </FormContainer>

        <FooterContainer>
          <Button onPress={handleSubmit(handleRegister)}>Cadastrar</Button>
        </FooterContainer>
      </Content>
    </Container>
  );
}
