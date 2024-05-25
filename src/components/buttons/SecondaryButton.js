import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function SecondaryButton({ btnName, onPress }) {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress} activeOpacity={0.7}>
      <Text>{btnName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 50,
    width: "35%",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
