import { ImageBackground, Text, View } from "react-native";
import { styles } from "./styles";
import PrimaryButton from "../../components/buttons/PrimaryButton";

export default function IntroScreen({ navigation }) {
  const welcomeText =
    "Get ready to discover the fascinating world of books. Dive into stories that will expand your mind, ignite your imagination and take you on unforgettable journeys. Let's start this literary adventure together!";

  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/background/books.png")}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>{welcomeText}</Text>
        <PrimaryButton
          style={styles.btn}
          btnName={"Get Started!!"}
          onPress={() => navigation.navigate("LoginScreen")}
        />
      </View>
    </ImageBackground>
  );
}
