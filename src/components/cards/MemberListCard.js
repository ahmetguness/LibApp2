import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function MemberListCard({
  memberName,
  onPressMessage,
  onPressDel,
}) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{memberName}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onPressMessage}>
          <Icon as={MaterialIcons} name="message" size="xl" color="blue" />
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
    marginBottom: "4%",
  },
  text: {
    marginLeft: "6%",
    fontSize: 18,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "22%",
  },
});
