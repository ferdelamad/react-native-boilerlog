import { createStackNavigator } from "react-navigation";
import First from "./screens/First";
import { Second } from "./screens/Second";

export const Routes = createStackNavigator(
  {
    First,
    Second
  },
  {
    initialRouteName: "First"
  }
);
