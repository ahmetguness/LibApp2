import { Image, View } from "react-native";
import MenuCard from "../../components/cards/MenuCard";
import { styles } from "./styles";

export default function MemberHomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 40, width: 40 }}>
        <Image
          style={{ height: 40, width: 40 }}
          source={require("../../assets/background/books.png")}
        />
      </View>

      <View style={styles.rowCardContainer}>
        <MenuCard
          cardName={"Categories"}
          onPress={() => navigation.navigate("CategoriesScreen")}
        />
        <MenuCard cardName={"Messages"} />
      </View>
      <View style={styles.rowCardContainer}>
        <MenuCard cardName={"Messa"} />
        <MenuCard cardName={"Messages"} />
      </View>
    </View>
  );
}
