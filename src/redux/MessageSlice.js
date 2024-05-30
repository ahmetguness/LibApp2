import { createSlice } from "@reduxjs/toolkit";

export const MessageSlice = createSlice({
  name: "message",
  initialState: {
    messageSenderId: "",
    messageReceiverId: "",
    messageReceiverUserName: "",
  },
  reducers: {
    updateSenderId(state, action) {
      state.messageSenderId = action.payload;
    },
    updateReceiverId(state, action) {
      state.messageReceiverId = action.payload;
    },
    updateMessageReceiverUserName(state, action) {
      state.messageReceiverUserName = action.payload;
    },
  },
});

export default MessageSlice;
export const { updateReceiverId, updateSenderId, updateMessageReceiverUserName } =
  MessageSlice.actions;
