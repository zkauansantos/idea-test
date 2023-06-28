import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import DetailsScreen from "../screens/Form";
import PersonTypeScreen from "../screens/PersonTypeScreen";

const Stack = createNativeStackNavigator();

type StackNavigation = {
  Home: undefined;
  PersonType: undefined;
  Form: { personType: string };
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          title: "",
          headerStyle: {
            backgroundColor: "#222",
          },
          headerBackVisible: true,
        }}
        initialRouteName='Home'
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='PersonType' component={PersonTypeScreen} />
        <Stack.Screen name='Form' component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
