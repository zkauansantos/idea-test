import { useNavigation, useRoute } from "@react-navigation/native";

import { FormContainer, HeaderContainer, Wrapper } from "./styles";

import { useForm } from "react-hook-form";
import { Text } from "../../components/Text";
import { Container } from "../../components/Container";
import Button from "../../components/Button";
import Select from "../../components/Select";
import Field from "../../components/Field";
import { StackTypes } from "../../routes/Stack";
import { useContext } from "react";
import { RegisterContext } from "../../context/RegisterContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface RouteParams {
  personType: string;
}

const schemaYup = yup.object({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  cpf: yup.string().required("Campo obrigatório"),
  rg: yup.string().required("Campo obrigatório"),
  genre: yup.string().required("Campo obrigatório"),
  endereco: yup.string().required("Campo obrigatório"),
  phone: yup.number().required("Campo obrigatório"),
});

export default function FormScreen() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<any>({
    resolver: yupResolver(schemaYup),
  });
  const route = useRoute();
  const navigate = useNavigation<StackTypes>();
  const { registerPerson } = useContext(RegisterContext);

  const handleRegister = (data: any) => {
    console.log(data);
    registerPerson(data);

    navigate.navigate("DetailsPerson");
    reset();
  };

  const { personType } = route.params as RouteParams;

  return (
    <Container>
      <HeaderContainer>
        <Text weight='700' color='#FFF' size={28}>
          Cadastrar
        </Text>
      </HeaderContainer>

      <FormContainer>
        <Field
          control={control}
          name='name'
          errors={errors}
          placeholder='Nome'
        />

        <Field
          control={control}
          name='email'
          errors={errors}
          placeholder='E-mail'
        />

        <Field control={control} name='cpf' errors={errors} placeholder='CPF' />

        <Wrapper>
          <Field control={control} name='rg' errors={errors} placeholder='RG' />

          <Select
            control={control}
            name='genre'
            errors={errors}
            defaultButtonText='Gênero'
          />
        </Wrapper>

        <Field
          control={control}
          name='endereco'
          errors={errors}
          placeholder='Endereço'
        />

        <Field
          control={control}
          name='phone'
          errors={errors}
          placeholder='Telefone'
        />
      </FormContainer>

      <Button onPress={handleSubmit(handleRegister)}>Cadastrar</Button>
    </Container>
  );
}
