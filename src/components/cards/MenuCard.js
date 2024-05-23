import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function MenuCard({ cardName, onPress }) {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <Text style={styles.text}>{cardName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "44%",
    height: 100,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});
