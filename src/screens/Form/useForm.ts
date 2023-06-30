import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackTypes } from '../../routes/Stack';
import { useContext, useEffect, useState } from 'react';
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
	const { registerPerson, setPerson } = useContext(RegisterContext);
	const [documentImage, setDocumentImage] = useState<any>('');
	const [errorImageRequired, setErrorImageRequired] = useState(false);

	const schema =
    personType === 'PJ' ? LegalEntityPersonSchemaYup : NaturalPersonSchemaYup;

	const { control, errors, handleSubmit, reset } = useValidateForm(schema);

	function handleRegister(data: any) {
		if (errorImageRequired) {
			return setErrorImageRequired(true);
		}

		registerPerson({ ...data, imageUrl: documentImage });

		navigate.navigate('DetailsPerson', {
			uriDocumentImage: documentImage,
		});

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
			return setErrorImageRequired(true);
		}

		const uri = documentPhotoSelected.assets[0].uri;

		if (uri) {
			const photoDocumentInfo = (await FileSystem.getInfoAsync(
				uri
			)) as ExtendedFileInfo;

			if (photoDocumentInfo.size && photoDocumentInfo.size / 1024 / 1024 > 5) {
				Alert.alert('Essa imagem é muito grande escolha uma de até 5MB.');
			}
			setErrorImageRequired(false);
			setDocumentImage(uri);
		}
	}

	useEffect(() => {
		setPerson([]);
	}, []);

	return {
		control,
		errors,
		personType,
		errorImageRequired,
		handleSubmit,
		handleRegister,
		handleUserDocumentPhotoSelect,
	};
}
