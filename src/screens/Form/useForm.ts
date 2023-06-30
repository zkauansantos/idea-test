import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackTypes } from '../../routes/Stack';
import { useContext } from 'react';
import { RegisterContext } from '../../context/RegisterContext';
import { LegalEntityPersonSchemaYup } from './schemas/LegalEntityPersonSchemaYup';
import { NaturalPersonSchemaYup } from './schemas/NaturalPersonSchemaYup';
import useValidateForm from '../../hooks/useValidateForm';

import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

interface RouteParams {
  personType: 'PJ' | 'PF';
}

type ExtendedFileInfo = FileSystem.FileInfo & {
  size: number;
};

export default function useForm() {
	const route = useRoute();
	const navigate = useNavigation<StackTypes>();
	const { personType } = route.params as RouteParams;
	const { registerPerson } = useContext(RegisterContext);
	const schema =
    personType === 'PJ' ? LegalEntityPersonSchemaYup : NaturalPersonSchemaYup;

	const { control, errors, handleSubmit, reset, setValue, trigger } =
    useValidateForm(schema);

	function handleRegister(data: any) {
		registerPerson(data);
		navigate.navigate('DetailsPerson');
		reset();
	}

	async function handleUserDocumentPhotoSelect() {
		const documentPhotoSelected = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 4],
			quality: 1,
		});

		if (documentPhotoSelected.canceled) {
			return;
		}

		const uri = documentPhotoSelected.assets[0].uri;

		if (uri) {
			const photoDocumentInfo = (await FileSystem.getInfoAsync(
				uri
			)) as ExtendedFileInfo;

			if (photoDocumentInfo.size && photoDocumentInfo.size / 1024 / 1024 > 5) {
				Alert.alert('Essa imagem é muito grande, escolha uma de até 5MB.');
			}

			setValue('document', uri);
			trigger('document');
		}
	}

	return {
		control,
		errors,
		personType,
		handleSubmit,
		handleRegister,
		handleUserDocumentPhotoSelect,
	};
}
