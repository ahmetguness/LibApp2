import { ImageBackground, Text, View } from "react-native";
import { styles } from "./styles";

export default function AddCategoryScreen() {
  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/background/books.png")}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Add Category</Text>
      </View>
    </ImageBackground>
  );
}
