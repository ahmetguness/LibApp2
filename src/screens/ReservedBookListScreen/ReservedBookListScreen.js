import React, { useEffect, useState } from "react";
import { ImageBackground, FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { getReservedBooksInfo } from "../../services/service";
import ReservedBookCard from "../../components/cards/ReservedBookCard";
import { styles } from "./styles";

export default function ReservedBookListScreen() {
  const reservedBookIds = useSelector((state) => state.user.userFavorites);
  const [reservedBookInfo, setReservedBookInfo] = useState(null);

  useEffect(() => {
    async function getReservedInfo() {
      try {
        const reservedBooksInfo = await getReservedBooksInfo(reservedBookIds);
        setReservedBookInfo(reservedBooksInfo);
      } catch (error) {
        console.error("Error fetching reserved books info:", error);
      }
    }
    getReservedInfo();
  }, [reservedBookIds]);

  const renderBookCard = ({ item }) => (
    <ReservedBookCard
      bookName={item.bookName}
      imgPath={{ uri: item.bookImg }}
      onPress={() => console.log(`Pressed on ${item.bookName}`)}
    />
  );

  const keyExtractor = (item) => item.id;

  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/background/books.png")}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Reserved Books</Text>
      </View>
      <FlatList
        style={styles.scView}
        data={reservedBookInfo ? Object.values(reservedBookInfo).flat() : []}
        renderItem={renderBookCard}
        keyExtractor={keyExtractor}
      />
    </ImageBackground>
  );
}
