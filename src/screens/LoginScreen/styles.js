import { StyleSheet } from "react-native";
import COLORS from "../../theme/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  switchText: {
    fontSize: 22,
    color: "white",
  },
  switchContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "4%",
    backgroundColor: COLORS.primaryBlue1,
    marginHorizontal: "10%",
    borderRadius: 10,
    height: 70,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "4%",
    backgroundColor: COLORS.primaryBlue1,
    borderRadius: 10,
    marginHorizontal: "10%",
    height: 70,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  loginFormContainer: {
    marginTop: "36%",
  },
  primaryButton: {
    marginTop: "15%",
  },
});
