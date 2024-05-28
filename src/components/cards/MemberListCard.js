import { DeleteIcon } from "native-base";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MemberListCard({ memberName }) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{memberName}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <DeleteIcon size="xl" />
        </TouchableOpacity>
        <TouchableOpacity>
          <DeleteIcon size="xl" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 60,
    width: "90%",
    borderRadius: 10,
    backgroundColor: "white",
    marginHorizontal: "5%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    marginLeft: "6%",
    fontSize: 18,
  },
  iconContainer: {
    marginRight: "6%",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "22%",
  },
});
