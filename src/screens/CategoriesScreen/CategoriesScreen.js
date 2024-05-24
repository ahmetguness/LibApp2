import React, { useEffect, useState, useCallback } from "react";
import { ImageBackground, FlatList } from "react-native";
import { styles } from "./styles";
import SearchBar from "../../components/searchBar/SearchBar";
import CategoryCard from "../../components/cards/CategoryCard";
import { listCategories } from "../../services/service";
import { useDispatch } from "react-redux";
import { updateCategoryId } from "../../redux/BookSlice";

const MemoizedCategoryCard = React.memo(CategoryCard);

export default function CategoriesScreen({ navigation }) {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const dispatcher = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesList = await listCategories();
      setCategories(categoriesList);
      setFilteredCategories(categoriesList);
    };

    fetchCategories();
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    const filteredData = categories.filter((category) =>
      category.categoryName.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCategories(filteredData);
  };

  const renderCategory = useCallback(
    ({ item }) => (
      <MemoizedCategoryCard
        categoryName={item.categoryName}
        imgPath={{ uri: item.categoryImg }}
        onPress={() => {
          dispatcher(updateCategoryId(item.id));
          navigation.navigate("BookListScreen");
        }}
      />
    ),
    [navigation, dispatcher]
  );

  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/background/books.png")}
    >
      <SearchBar
        searchBarPlaceHolder={"Search Category"}
        searchBarTitle={"CATEGORIES"}
        search={search}
        setSearch={handleSearch}
      />
      <FlatList
        data={filteredCategories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCategory}
        extraData={filteredCategories}
      />
    </ImageBackground>
  );
}
