import { cpf } from 'cpf-cnpj-validator';
import * as yup from 'yup';

export const NaturalPersonSchemaYup = yup.object().shape({
	name: yup.string().required('Campo obrigatório'),
	email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
	cpf: yup
		.string()
		.required('Campo obrigatório')
		.test({
			name: 'cpf',
			test: (value) => cpf.isValid(value),
			message: 'CPF Inválido',
		}),
	rg: yup.string().min(7, 'RG inválido').required('Campo obrigatório'),
	genre: yup.string().required('Campo obrigatório'),
	address: yup.string().required('Campo obrigatório'),
	phone: yup
		.number()
		.typeError('Apenas números são aceitos')
		.required('Campo obrigatório'),
});

export type NaturalPersonData = yup.InferType<typeof NaturalPersonSchemaYup>;
