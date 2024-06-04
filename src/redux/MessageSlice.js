import { createSlice } from "@reduxjs/toolkit";

export const MessageSlice = createSlice({
  name: "message",
  initialState: {
    messageSenderId: "",
    messageReceiverId: "",
    messageReceiverUserName: "",
    messages: [],
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
    setMessages(state, action) {
      state.messages = action.payload;
    },
    addMessage(state, action) {
      state.messages.push(action.payload);
    },
  },
});

export default MessageSlice;
export const {
  updateReceiverId,
  updateSenderId,
  updateMessageReceiverUserName,
  setMessages,
  addMessage,
} = MessageSlice.actions;
