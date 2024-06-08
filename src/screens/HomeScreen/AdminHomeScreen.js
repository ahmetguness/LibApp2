import { Image, View } from "react-native";
import MenuCard from "../../components/cards/MenuCard";
import { styles } from "./styles";
import { useEffect } from "react";
import { fetchCategories } from "../../services/service";
import { useDispatch } from "react-redux";
import { updateCategoryIdDict } from "../../redux/BookSlice";

export default function AdminHomeScreen({ navigation }) {
  const dispatcher = useDispatch();

  useEffect(() => {
    try {
      async function getCategories() {
        const categories = await fetchCategories();
        dispatcher(updateCategoryIdDict(categories));
      }
    } catch (error) {
      throw error;
    }
    getCategories();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.rowCardContainer}>
        <MenuCard
          cardName={"Categories"}
          onPress={() => navigation.navigate("CategoriesScreen")}
        />
        <MenuCard
          cardName={"Member List"}
          onPress={() => navigation.navigate("MemberListScreen")}
        />
      </View>
      <View style={styles.rowCardContainer}>
        <MenuCard
          cardName={"Add Book"}
          onPress={() => navigation.navigate("AddBookScreen")}
        />
        <MenuCard
          cardName={"Add Category"}
          onPress={() => navigation.navigate("AddCategoryScreen")}
        />
      </View>
    </View>
  );
}
