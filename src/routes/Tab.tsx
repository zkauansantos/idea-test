import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Home";
import DetailsScreen from "../screens/Form";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

type TabNavigation = {
  Home: undefined;
  Details: undefined;
};

export type TabTypes = BottomTabNavigationProp<TabNavigation>;

export default function TabComponent() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Form' component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
