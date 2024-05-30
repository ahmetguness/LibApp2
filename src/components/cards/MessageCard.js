import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MessageCard({ messageOwner }) {
  const alignItems = messageOwner === "sender" ? "flex-end" : "flex-start";

  return (
    <View style={[styles.root, { alignItems }]}>
      <View style={styles.innerContainer}>
        <Text>ASD</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  innerContainer: {
    width: "80%",
    height: 60,
    backgroundColor: "red",
    borderRadius: 10,
    marginVertical: "2%",
    marginHorizontal: "3%",
  },
});
