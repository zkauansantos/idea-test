import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import { Container } from "./styles";

export default function App() {
  const [isFontsLoaded] = useFonts({
    "GeneralSans-400": require("../../assets/fonts/GeneralSans-Regular.otf"),
    "GeneralSans-600": require("../../assets/fonts/GeneralSans-Semibold.otf"),
    "GeneralSans-700": require("../../assets/fonts/GeneralSans-Bold.otf"),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <Container>
      <Text>Hello World!</Text>
      <StatusBar style='auto' />
    </Container>
  );
}
