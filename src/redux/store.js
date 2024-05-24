import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import BookSlice from "./BookSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    book: BookSlice.reducer,
  },
});
