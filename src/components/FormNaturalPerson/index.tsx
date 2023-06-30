import { Control, FieldErrors, FieldValues } from "react-hook-form";
import { Wrapper } from "./styles";
import Field from "../Field";
import Select from "../Select";

interface NaturalPersonProps {
  control: Control<FieldValues, any>;
  errors: FieldErrors<any>;
}

export default function NaturalPerson({ control, errors }: NaturalPersonProps) {
  return (
    <>
      <Field control={control} name='name' errors={errors} placeholder='Nome' />

      <Field
        control={control}
        name='email'
        errors={errors}
        placeholder='E-mail'
      />

      <Field
        control={control}
        name='cpf'
        number
        errors={errors}
        placeholder='CPF'
        maxLength={11}
      />

      <Wrapper>
        <Field
          control={control}
          number
          name='rg'
          errors={errors}
          placeholder='RG'
          maxLength={7}
        />

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
        number
        name='phone'
        errors={errors}
        placeholder='Telefone'
      />
    </>
  );
}
