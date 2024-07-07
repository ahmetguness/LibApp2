import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function MenuCard({ cardName, onPress, iconName }) {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{cardName}</Text>
      <Icon name={iconName} size={20} color="#000" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: 70,
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: "2%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
  },
  text: {
    fontSize: 20,
  },
});
