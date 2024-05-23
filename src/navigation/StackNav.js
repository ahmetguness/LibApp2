import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import IntroScreen from "../screens/IntroScreen/IntroScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import CategoriesScreen from "../screens/CategoriesScreen/CategoriesScreen";
import MemberHomeScreen from "../screens/HomeScreen/MemberHomeScreen";
import AdminHomeScreen from "../screens/HomeScreen/AdminHomeScreen";

export default function StackNav() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
    </Stack.Navigator>
  );
}
