import { View } from "react-native";
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
      <View style={{ height: 40, width: 40 }}></View>
      <View style={styles.rowCardContainer}>
        <MenuCard
          cardName={"Categories"}
          iconName={"table"}
          onPress={() => navigation.navigate("CategoriesScreen")}
        />
        <MenuCard
          cardName={"Messages"}
          iconName={"list"}
          onPress={() => navigation.navigate("MemberListScreen")}
        />
        <MenuCard
          cardName={"Reserved"}
          iconName={"get-pocket"}
          onPress={() => navigation.navigate("ReservedBookListScreen")}
        />
      </View>
    </View>
  );
}
