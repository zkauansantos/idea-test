import { NavigationContainer } from '@react-navigation/native';
import {
	createNativeStackNavigator,
	NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';
import Form from '../screens/Form';
import PersonTypeScreen from '../screens/PersonTypeScreen';
import DetailsPerson from '../screens/DetailsPerson';

const Stack = createNativeStackNavigator();

type StackNavigation = {
  Home: undefined;
  PersonType: undefined;
  Form: { personType: string };
  DetailsPerson: { uriDocumentImage: string };
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: true,
					title: '',
					headerStyle: {
						backgroundColor: '#222',
					},
					headerBackVisible: true,
					statusBarColor: '#222',
				}}
				initialRouteName="Home"
			>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="PersonType" component={PersonTypeScreen} />
				<Stack.Screen name="Form" component={Form} />
				<Stack.Screen name="DetailsPerson" component={DetailsPerson} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
