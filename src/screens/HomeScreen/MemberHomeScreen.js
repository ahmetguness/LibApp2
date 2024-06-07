import { Image, View } from "react-native";
import MenuCard from "../../components/cards/MenuCard";
import { styles } from "./styles";
import { useEffect } from "react";
import { fetchReservedBooks } from "../../services/service";
import { useDispatch, useSelector } from "react-redux";
import { updateReservedBooks } from "../../redux/UserSlice";

export default function MemberHomeScreen({ navigation }) {
  const dispatcher = useDispatch();
  const userId = useSelector((state) => state.user.userInfo.userId);

  useEffect(() => {
    async function fetchReserved() {
      try {
        const reservedBooks = await fetchReservedBooks(userId);
        dispatcher(updateReservedBooks(reservedBooks));
      } catch (error) {
        console.error(error);
      }
    }

    fetchReserved();
  }, []);

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
        <MenuCard
          cardName={"Messages"}
          onPress={() => navigation.navigate("MemberListScreen")}
        />
      </View>
      <View style={styles.rowCardContainer}>
        <MenuCard
          cardName={"Reserved"}
          onPress={() => navigation.navigate("ReservedBookListScreen")}
        />
      </View>
    </View>
  );
}
