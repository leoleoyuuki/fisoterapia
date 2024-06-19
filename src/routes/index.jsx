import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Second from "../screens/Second";
export default function Routes() {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} options={{
          headerShown: false,
          tabBarStyle: {
            display: "none"
          },
        }} />
        <Screen name="Second" component={Second} options={{
          headerShown: false,
          tabBarStyle: {
            display: "none"
          },
        }} />
      </Navigator>
    </NavigationContainer>
  );
}
