import React, { useState } from "react";
import { ImageBackground, ScrollView, Text, View, Alert } from "react-native";
import { styles } from "./styles";
import { Input, Stack } from "native-base";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { addCategory } from "../../services/service";
import COLORS from "../../theme/colors";

export default function AddCategoryScreen() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryImg, setCategoryImg] = useState("");

  const handleAddCategory = async () => {
    if (!categoryName || !categoryImg) {
      Alert.alert("Error", "Both fields are required!");
      return;
    }

    try {
      await addCategory(categoryName, categoryImg);
      Alert.alert("Success", "Category added successfully!");
      setCategoryName("");
      setCategoryImg("");
    } catch (error) {
      console.error("ERROR: ", error);
      Alert.alert("Error", "Failed to add category!");
    }
  };

  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/background/books.png")}
    >
      <ScrollView style={styles.scView}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Add Category</Text>
        </View>

        <View
          style={{
            backgroundColor: COLORS.primaryBlue,
            marginHorizontal: "5%",
            borderRadius: 10,
            marginTop: "15%",
            height: 350,
            justifyContent: "center",
          }}
        >
          <View style={styles.categoryContainer}>
            <View style={styles.categoryTitleContainer}>
              <Text style={styles.categoryTitle}>Category Name:</Text>
            </View>
            <Input
              size="xl"
              placeholder="Category Name"
              value={categoryName}
              onChangeText={setCategoryName}
            />
            <View style={styles.categoryTitleContainer}>
              <Text style={styles.categoryTitle}>Photo URL:</Text>
            </View>
            <Input
              size="xl"
              placeholder="Photo Url"
              value={categoryImg}
              onChangeText={setCategoryImg}
            />
          </View>
          <PrimaryButton
            btnName={"Submit!!"}
            style={styles.btn}
            onPress={handleAddCategory}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
