import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import COLORS from "../../theme/colors";

export default function MemberListCard({
  memberName,
  onPressMessage,
  onPressDelete,
  userType,
  memberId,
}) {
  const penaltizedUsers = useSelector((state) => state.user.penaltizedUsers);

  const bgc = penaltizedUsers.includes(memberId)
    ? COLORS.primaryBlue
    : COLORS.white;

  const btn = () => {
    return (
      <View style={{ flexDirection: "row", marginRight: "15%" }}>
        <TouchableOpacity
          style={{ marginRight: "15%" }}
          onPress={onPressDelete}
        >
          {userType === "admin" && (
            <Icon as={MaterialIcons} name="delete" size="xl" color="red" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressMessage}>
          <Icon as={MaterialIcons} name="message" size="xl" color="blue" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={[styles.root, { backgroundColor: bgc }]}>
      <Text style={styles.text}>{memberName}</Text>
      <View style={styles.iconContainer}>{btn()}</View>
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
