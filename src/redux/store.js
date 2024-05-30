import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import BookSlice from "./BookSlice";
import MessageSlice from "./MessageSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    book: BookSlice.reducer,
    message: MessageSlice.reducer,
  },
});
