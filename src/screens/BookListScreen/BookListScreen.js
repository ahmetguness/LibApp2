import React, { useEffect, useState } from "react";
import { ImageBackground, FlatList, Text } from "react-native";
import SearchBar from "../../components/searchBar/SearchBar";
import { listBooksByCategory } from "../../services/service";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../../components/cards/CategoryCard";
import { updateBookId, updateBookInfo } from "../../redux/BookSlice";
import { styles } from "./styles";


export default function BookListScreen({ navigation }) {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const bookInfo = useSelector((state) => state.book);
  const dispatcher = useDispatch();

  useEffect(() => {
    async function fetchBooks() {
      if (bookInfo?.categoryId) {
        const fetchedBooks = await listBooksByCategory(bookInfo.categoryId);
        setBooks(fetchedBooks);
      }
    }

    fetchBooks();
  }, [bookInfo]);

  const filteredBooks = books.filter((book) =>
    book.bookName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/background/books.png")}
    >
      <SearchBar
        searchBarTitle={"BOOKS"}
        searchBarPlaceHolder={"Search Books"}
        search={search}
        setSearch={setSearch}
      />
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryCard
            imgPath={{ uri: item.bookImg }}
            categoryName={item.bookName}
            onPress={() => {
              dispatcher(updateBookId(item.id));
              dispatcher(
                updateBookInfo({
                  bookName: item.bookName,
                  bookImg: item.bookImg,
                })
              );
              navigation.navigate("BookDetailsScreen");
            }}
          />
        )}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No Books Available</Text>
        }
      />
    </ImageBackground>
  );
}
