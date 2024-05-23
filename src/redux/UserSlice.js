import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      userType: "member",
      userId: "",
      userName: "Gunes",
      userPassword: "",
    },
  },
  reducers: {
    updateUserType(state, action) {
      state.userInfo.userType = action.payload;
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
export const { updateUserType, updateUserName, updateUserPassword } =
  UserSlice.actions;
