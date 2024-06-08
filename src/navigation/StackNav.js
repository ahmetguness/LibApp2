import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import IntroScreen from "../screens/IntroScreen/IntroScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import CategoriesScreen from "../screens/CategoriesScreen/CategoriesScreen";
import BookListScreen from "../screens/BookListScreen/BookListScreen";
import BookDetailsScreen from "../screens/BookDetailsScreen/BookDetailsScreen";
import MemberListScreen from "../screens/MemberListScreen/MemberListScreen";
import MessageScreen from "../screens/MessageScreen/MessageScreen";
import ReservedBookListScreen from "../screens/ReservedBookListScreen/ReservedBookListScreen";
import AddBookScreen from "../screens/AddBookScreen/AddBookScreen";
import AddCategoryScreen from "../screens/AddBookScreen/AddCategoryScreen";

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
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
      <Stack.Screen
        name="ReservedBookListScreen"
        component={ReservedBookListScreen}
      />
      <Stack.Screen name="AddBookScreen" component={AddBookScreen} />
      <Stack.Screen name="AddCategoryScreen" component={AddCategoryScreen} />
    </Stack.Navigator>
  );
}
