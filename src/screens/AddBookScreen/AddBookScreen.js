import { ImageBackground, ScrollView, Text, View, Alert } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { Box, CheckIcon, Input, Select } from "native-base";
import { useState } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { addBook } from "../../services/service";
import COLORS from "../../theme/colors";

const TitleAndInput = ({ title, placeholder, value, onChangeText }) => (
  <View style={styles.inputGroup}>
    <Text style={styles.primaryTitle}>{title}</Text>
    <Box alignItems="center">
      <Input
        mx="3"
        placeholder={placeholder}
        w="90%"
        value={value}
        onChangeText={onChangeText}
      />
    </Box>
  </View>
);

export default function AddBookScreen() {
  const [categoryId, setCategoryId] = useState("");
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookImg, setBookImg] = useState("");
  const [bookSum, setBookSum] = useState("");
  const categories = useSelector((state) => state.book.categoryIdDict);

  const handleAddBook = async () => {
    const bookInfo = {
      bookName,
      bookAuthor,
      bookImg,
      bookSum,
    };
    try {
      await addBook(categoryId, bookInfo);
      Alert.alert("Success", "Book added successfully!");
      setCategoryId("");
      setBookName("");
      setBookAuthor("");
      setBookImg("");
      setBookSum("");
    } catch (error) {
      console.error("Failed to add book:", error);
    }
  };

  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/background/books.png")}
    >
      <ScrollView style={styles.scView}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Add a Book</Text>
        </View>

        <View
          style={{
            backgroundColor: COLORS.primaryBlue,
            marginHorizontal: "5%",
            borderRadius: 10,
            marginTop: "10%",
            height: 600,
            justifyContent: "center",
          }}
        >
          <View style={styles.inputGroup}>
            <Text style={styles.primaryTitle}>Category:</Text>
            <Select
              selectedValue={categoryId}
              minWidth="200"
              accessibilityLabel="Choose Category"
              placeholder="Choose Category"
              _selectedItem={{
                bg: "white",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setCategoryId(itemValue)}
              style={{ backgroundColor: "white" }}
            >
              {Object.entries(categories).map(([id, categoryName]) => (
                <Select.Item key={id} label={categoryName} value={id} />
              ))}
            </Select>
          </View>
          <TitleAndInput
            title="Book Name:"
            placeholder="Book Name"
            value={bookName}
            onChangeText={setBookName}
          />
          <TitleAndInput
            title="Author:"
            placeholder="Author"
            value={bookAuthor}
            onChangeText={setBookAuthor}
          />
          <TitleAndInput
            title="Cover Image Url:"
            placeholder="Cover Image Url"
            value={bookImg}
            onChangeText={setBookImg}
          />
          <TitleAndInput
            title="Summary:"
            placeholder="Summary"
            value={bookSum}
            onChangeText={setBookSum}
          />
          <PrimaryButton
            btnName={"Submit!"}
            style={{ marginTop: 10 }}
            onPress={handleAddBook}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
