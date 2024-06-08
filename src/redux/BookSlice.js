import { createSlice } from "@reduxjs/toolkit";

export const BookSlice = createSlice({
  name: "book",
  initialState: {
    categoryId: "",
    bookId: "",
    bookInfo: {
      bookName: "",
      bookImg: "",
      bookSum: "",
      bookAuthor: "",
    },
    categoryIdDict: null,
  },
  reducers: {
    updateBookId(state, action) {
      state.bookId = action.payload;
    },
    updateCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    updateBookInfo(state, action) {
      const { bookName, bookImg, bookSum, bookAuthor } = action.payload;
      state.bookInfo.bookName = bookName;
      state.bookInfo.bookImg = bookImg;
      state.bookInfo.bookSum = bookSum;
      state.bookInfo.bookAuthor = bookAuthor;
    },
    updateCategoryIdDict(state, action) {
      state.categoryIdDict = action.payload;
    },
  },
});

export default BookSlice;
export const {
  updateBookId,
  updateCategoryId,
  updateBookInfo,
  updateCategoryIdDict,
} = BookSlice.actions;
