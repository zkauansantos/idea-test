import { cnpj, cpf } from "cpf-cnpj-validator";
import * as yup from "yup";

export const LegalEntityPersonSchemaYup = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  cnpj: yup
    .string()
    .required("Campo obrigatório")
    .test({
      name: "cnpj",
      test: (value) => cnpj.isValid(value),
      message: "CNPJ Inválido",
    }),
  endereco: yup.string().required("Campo obrigatório"),
  phone: yup
    .number()
    .typeError("Apenas números são aceitos")
    .required("Campo obrigatório"),
  legalRepresentativeDocument: yup
    .string()
    .required("Campo obrigatório")
    .test({
      name: "cpf-legal-representative",
      test: (value) => cpf.isValid(value),
      message: "CPF do representante inválido",
    }),
});

export type LegalEntityData = yup.InferType<typeof LegalEntityPersonSchemaYup>;
