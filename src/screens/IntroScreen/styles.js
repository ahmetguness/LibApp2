import { StyleSheet } from "react-native";
import COLORS from "../../theme/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    marginRight: "8%",
    marginLeft: "8%",
    marginTop: "120%",
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  btn: {
    marginTop: "4%",
    color: COLORS.primaryBlue,
  },
});
