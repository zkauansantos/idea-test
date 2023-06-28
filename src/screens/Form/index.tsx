import { useRoute } from "@react-navigation/native";

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
 
  const handleRegister = (data: any) => {
    console.log(data);
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
          <Controller
            control={control}
            name='name'
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder='Seu nome'
                placeholderTextColor='#555'
              />
            )}
          />

          <Controller
            control={control}
            name='email'
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder='Seu email'
                placeholderTextColor='#555'
              />
            )}
          />

          <Controller
            control={control}
            name='cpf'
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder='CPF'
                keyboardType="number-pad"
                placeholderTextColor='#555'
              />
            )}
          />

          <Wrapper>
            <Controller
              control={control}
              name='rg'
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder='RG'
                  placeholderTextColor='#555'
                />
              )}
            />

            <Controller
              control={control}
              name='genre'
              render={({ field: { onChange, onBlur, value } }) => (
                <Select onSelect={onChange} />
              )}
            />
          </Wrapper>

          <Controller
            control={control}
            name='enredeco'
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder='Endereço'
                placeholderTextColor='#555'
              />
            )}
          />

          <Controller
            control={control}
            name='phone'
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder='Telefone'
                keyboardType="number-pad"
                placeholderTextColor='#555'
                secureTextEntry
              />
            )}
          />
        </FormContainer>

        <FooterContainer>
          <Button onPress={handleSubmit(handleRegister)}>Cadastrar</Button>
        </FooterContainer>
      </Content>
    </Container>
  );
}
