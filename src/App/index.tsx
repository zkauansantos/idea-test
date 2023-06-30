import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';

import StackComponent from '../routes/Stack';
import RegisterContextProvider from '../context/RegisterContext';

export default function App() {
	const [isFonstLoaded] = useFonts({
		'GeneralSans-400': require('../../assets/fonts/GeneralSans-Regular.otf'),
		'GeneralSans-600': require('../../assets/fonts/GeneralSans-Semibold.otf'),
		'GeneralSans-700': require('../../assets/fonts/GeneralSans-Bold.otf'),
	});

	if (!isFonstLoaded) {
		return null;
	}

	return (
		<RegisterContextProvider>
			<StatusBar barStyle="light-content" backgroundColor="#222" translucent />
			<StackComponent />
		</RegisterContextProvider>
	);
}
