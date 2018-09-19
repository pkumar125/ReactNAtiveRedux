import { Navigation } from "react-native-navigation";
import AuthScreen from "./src/screens/Auth/Auth";


// Register Screens
Navigation.registerComponent("r2h.AuthScreen", () => AuthScreen);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "r2h.AuthScreen",
    title: "Login"
  }
});
