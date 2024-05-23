import { Text, View } from "react-native";
import MenuCard from "../../components/cards/MenuCard";
import { styles } from "./styles";

export default function MemberHomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.rowCardContainer}>
        <MenuCard
          cardName={"Kategoriler"}
          onPress={() => navigation.navigate("CategoriesScreen")}
        />
        <MenuCard cardName={"Üye Listesi"} />
      </View>
    </View>
  );
}
