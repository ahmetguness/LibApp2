import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MessageCard({
  messageOwner,
  messageContext,
  name,
  date,
}) {
  const alignItems = messageOwner === "sender" ? "flex-end" : "flex-start";

  return (
    <View style={[styles.root, { alignItems }]}>
      <View style={styles.innerContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.contextText}>{messageContext}</Text>
        <Text style={styles.dateText}>{date}</Text>
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
    minHeight: 60,
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: "2%",
    marginHorizontal: "3%",
    padding: "3%",
  },
  dateText: {
    fontSize: 12,
    alignItems: "flex-end",
    fontWeight: "200",
    marginTop: 10,
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  contextText: {
    fontSize: 11,
  },
});
