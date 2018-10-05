import { createStackNavigator } from "react-navigation";
import First from "./screens/First";
import Test from "./screens/Test";

export const Routes = createStackNavigator(
  {
    First,
    Test
  },
  {
    initialRouteName: "First"
  }
);
