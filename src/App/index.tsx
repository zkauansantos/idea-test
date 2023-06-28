import { StatusBar } from "react-native";
import StackComponent from "../routes/Stack";
import { useFonts } from "expo-font";

export default function App() {

  const [isFonstLoaded] = useFonts({
    "GeneralSans-400": require("../../assets/fonts/GeneralSans-Regular.otf"),
    "GeneralSans-600": require("../../assets/fonts/GeneralSans-Semibold.otf"),
    "GeneralSans-700": require("../../assets/fonts/GeneralSans-Bold.otf"),
  });

  if (!isFonstLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='#000'
        translucent
      />
      <StackComponent />
    </>
  );
}
