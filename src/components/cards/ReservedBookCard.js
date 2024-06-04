import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ReservedBookCard({ bookName, onPress }) {
  return (
    <View style={styles.root}>
      <View style={styles.imgContainer}>
        <Image
          style={{
            height: 50,
            width: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
          source={require("../../assets/background/books.png")}
        />
      </View>
      <View style={styles.bookNameContainer}>
        <Text>{bookName}</Text>
      </View>
      <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
        <Ionicons name="return-up-back-outline" size={35} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "90%",
    height: 100,
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: "5%",
    marginBottom: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    justifyContent: "center",
    marginHorizontal: "5%",
  },
  bookNameContainer: {
    justifyContent: "center",
    marginHorizontal: "5%",
  },
  imgContainer: {
    height: 10,
    width: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
