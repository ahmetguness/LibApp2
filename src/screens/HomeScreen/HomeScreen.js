import { ImageBackground, Text } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles";

export default function HomeScreen() {
  const userInfo = useSelector((state) => state.user.userInfo);

  const backgroundImg =
    userInfo.userType === "member"
      ? require("../../assets/background/member.png")
      : require("../../assets/background/admin.png");

  return (
    <ImageBackground
      style={styles.root}
      source={backgroundImg}
    ></ImageBackground>
  );
}
