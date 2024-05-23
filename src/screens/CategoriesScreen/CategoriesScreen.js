import { ImageBackground, ScrollView, Text } from "react-native";
import { styles } from "./styles";
import SearchBar from "../../components/searchBar/SearchBar";
import CategoryCard from "../../components/cards/CategoryCard";

export default function CategoriesScreen() {
  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/background/books.png")}
    >
      <SearchBar
        searchBarPlaceHolder={"Search Category"}
        searchBarTitle={"CATEGORIES"}
      />
      <ScrollView>
        <CategoryCard
          imgPath={require("../../assets/background/books.png")}
          categoryName={"Korku"}
          onPress={() => console.log("clicked")}
        />
      </ScrollView>
    </ImageBackground>
  );
}
