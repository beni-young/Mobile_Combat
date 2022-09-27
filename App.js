import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Creation from "./src/screens/Creation";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Create: Creation,
  },
  {
    initialRouteName: "Create",
    defaultNavigationOptions: {
      title: "Mobile Game",
    },
  }
);

export default createAppContainer(navigator);
