import { ImageBackground, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles";
import AdminHomeScreen from "./AdminHomeScreen";
import MemberHomeScreen from "./MemberHomeScreen";

export default function HomeScreen({ navigation }) {
  const userInfo = useSelector((state) => state.user.userInfo);

  const backgroundImg =
    userInfo.userType === "member"
      ? require("../../assets/background/member.png")
      : require("../../assets/background/admin.png");

  return (
    <ImageBackground style={styles.root} source={backgroundImg}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{userInfo.userName.toUpperCase()}</Text>
      </View>
      <View style={styles.screen}>
        {userInfo.userType === "member" ? (
          <MemberHomeScreen navigation={navigation} />
        ) : (
          <AdminHomeScreen navigation={navigation} />
        )}
      </View>
    </ImageBackground>
  );
}
