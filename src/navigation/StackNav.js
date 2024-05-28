import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import IntroScreen from "../screens/IntroScreen/IntroScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import CategoriesScreen from "../screens/CategoriesScreen/CategoriesScreen";
import MemberHomeScreen from "../screens/HomeScreen/MemberHomeScreen";
import AdminHomeScreen from "../screens/HomeScreen/AdminHomeScreen";
import BookListScreen from "../screens/BookListScreen/BookListScreen";
import BookDetailsScreen from "../screens/BookDetailsScreen/BookDetailsScreen";
import MemberListScreen from "../screens/MemberListScreen/MemberListScreen";

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
      <Stack.Screen name="BookListScreen" component={BookListScreen} />
      <Stack.Screen name="BookDetailsScreen" component={BookDetailsScreen} />
      <Stack.Screen name="MemberListScreen" component={MemberListScreen} />
    </Stack.Navigator>
  );
}
