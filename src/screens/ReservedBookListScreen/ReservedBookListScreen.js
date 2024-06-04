import { ImageBackground, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import ReservedBookCard from "../../components/cards/ReservedBookCard";

export default function ReservedBookListScreen() {
  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/background/books.png")}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Reserved Books</Text>
      </View>
      <ScrollView style={styles.scView}>
        <ReservedBookCard bookName={"Book Name"} onPress={()=>console.log("dltBtn")} />
      </ScrollView>
    </ImageBackground>
  );
}
