import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      userType: "member",
      userId: "",
      userName: "",
      userPassword: "",
    },
  },
  reducers: {
    updateUserType(state, action) {
      state.userInfo.userType = action.payload;
    },
    updateUserInformation(state, action) {
      const { userName, userPassword } = action.payload;
      state.userInfo.userName = userName;
      state.userInfo.userPassword = userPassword;
    },
    updateUserName(state, action) {
      state.userInfo.userName = action.payload;
    },
    updateUserPassword(state, action) {
      state.userInfo.userPassword = action.payload;
    },
  },
});

export default UserSlice;
export const { updateUserType, updateUserName, updateUserPassword, updateUserInformation } =
  UserSlice.actions;
