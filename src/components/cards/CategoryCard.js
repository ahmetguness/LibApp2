import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CategoryCard({ imgPath, categoryName, onPress }) {
  return (
    <TouchableOpacity style={styles.root} activeOpacity={0.7} onPress={onPress}>
      <Image style={styles.img} source={imgPath} />
      <Text style={styles.text}>{categoryName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 240,
    width: "90%",
    backgroundColor: "white",
    marginHorizontal: "5%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%",
  },
  img: {
    height: "65%",
    width: "50%",
    borderRadius: 10,
    marginBottom: "4%",
  },
  text: {
    fontSize: 24,
  },
});
