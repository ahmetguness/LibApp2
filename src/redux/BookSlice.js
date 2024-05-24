import { createSlice } from "@reduxjs/toolkit";

export const BookSlice = createSlice({
  name: "book",
  initialState: {
    categoryId: "",
    bookId: "",
    bookInfo: {
      bookName: "",
      bookImg: "",
    },
  },
  reducers: {
    updateBookId(state, action) {
      state.bookId = action.payload;
    },
    updateCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    updateBookInfo(state, action) {
      const { bookName, bookImg } = action.payload;
      state.bookInfo.bookName = bookName;
      state.bookInfo.bookImg = bookImg;
    },
  },
});

export default BookSlice;
export const { updateBookId, updateCategoryId, updateBookInfo } =
  BookSlice.actions;
