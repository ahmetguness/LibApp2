import { Heading } from "native-base";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles";

export default function BookDetailsScreen() {
  const bookInfo = useSelector((state) => state.book.bookInfo);
  console.log(bookInfo);

  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/background/books.png")}
    >
      <ScrollView style={styles.scView}>
        <View style={styles.headingContainer}>
          <Heading size="xl">{bookInfo.bookName}</Heading>
        </View>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{ uri: bookInfo.bookImg }} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
