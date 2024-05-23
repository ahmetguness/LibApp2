import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  titleContainer: {
    marginTop: "4%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "4%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
  },
  screen: {
    flex: 1,
    marginHorizontal: "10%",
    width: "80%",
  },
  rowCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "10%",
  },
});
