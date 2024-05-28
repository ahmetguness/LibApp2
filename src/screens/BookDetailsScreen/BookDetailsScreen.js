import { Heading } from "native-base";
import { Image, ImageBackground, ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import SummaryCard from "../../components/cards/SummaryCard";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import { updateUserFavorites } from "../../redux/UserSlice";

export default function BookDetailsScreen() {
  const bookInfo = useSelector((state) => state.book.bookInfo);
  const categoryId = useSelector((state) => state.book.categoryId);
  const bookId = useSelector((state) => state.book.bookId);
  const userFavs = useSelector((state) => state.user.userFavorites);
  const userType = useSelector((state) => state.user.userInfo.userType);

  const dispatch = useDispatch();

  const reserveBtnName =
    userFavs[categoryId] && userFavs[categoryId].includes(bookId)
      ? "unReserve"
      : "Reserve";

  const btns =
    userType === "member" ? (
      <View style={styles.btnContainer}>
        <SecondaryButton
          btnName={reserveBtnName}
          onPress={() => {
            dispatch(
              updateUserFavorites({
                favKey: categoryId,
                favValue: bookId,
              })
            );
          }}
        />
        <SecondaryButton btnName={"asd"} onPress={() => null} />
      </View>
    ) : null;

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
        <View
          style={{
            marginHorizontal: "9%",
            marginTop: "5%",
            marginBottom: "5%",
          }}
        >
          <SummaryCard
            bookName={bookInfo.bookName}
            bookSum={bookInfo.bookSum}
            bookAuthor={bookInfo.bookAuthor}
            onPress={null}
          />
        </View>
        {btns}
      </ScrollView>
    </ImageBackground>
  );
}
