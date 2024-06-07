import React, { useEffect, useState } from "react";
import { Heading } from "native-base";
import { Image, ImageBackground, ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import SummaryCard from "../../components/cards/SummaryCard";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import { updateUserFavorites } from "../../redux/UserSlice";
import { reserveBook } from "../../services/service";

export default function BookDetailsScreen() {
  const bookInfo = useSelector((state) => state.book.bookInfo);
  const categoryId = useSelector((state) => state.book.categoryId);
  const bookId = useSelector((state) => state.book.bookId);
  const userFavs = useSelector((state) => state.user.userFavorites);
  const userType = useSelector((state) => state.user.userInfo.userType);
  const userId = useSelector((state) => state.user.userInfo.userId);
  const dispatch = useDispatch();

  const [shouldReserve, setShouldReserve] = useState(false);

  useEffect(() => {
    if (shouldReserve) {
      reserveBook(userId, userFavs)
        .then(() => setShouldReserve(false))
        .catch((error) => {
          console.error("Error handling reserve:", error);
          setShouldReserve(false);
        });
    }
  }, [userFavs, shouldReserve, userId]);

  const reserveBtnName =
    userFavs[categoryId] && userFavs[categoryId].includes(bookId)
      ? "unReserve"
      : "Reserve";

  const handleReserve = async () => {
    try {
      dispatch(
        updateUserFavorites({
          favKey: categoryId,
          favValue: bookId,
        })
      );
      setShouldReserve(true);
    } catch (error) {
      console.error("Error handling reserve:", error);
    }
  };

  const btns =
    userType === "member" ? (
      <View style={styles.btnContainer}>
        <SecondaryButton btnName={reserveBtnName} onPress={handleReserve} />
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
