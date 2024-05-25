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
    userFavorites: {},
  },
  reducers: {
    updateUserType(state, action) {
      state.userInfo.userType = action.payload;
    },
    updateUserInformation(state, action) {
      const { userName, userPassword, userId } = action.payload;
      state.userInfo.userName = userName;
      state.userInfo.userPassword = userPassword;
      state.userInfo.userId = userId;
    },
    updateUserName(state, action) {
      state.userInfo.userName = action.payload;
    },
    updateUserPassword(state, action) {
      state.userInfo.userPassword = action.payload;
    },
    updateUserFavorites(state, action) {
      const { favKey, favValue } = action.payload;
      if (state.userFavorites[favKey]) {
        if (Array.isArray(state.userFavorites[favKey])) {
          const index = state.userFavorites[favKey].indexOf(favValue);
          if (index > -1) {
            state.userFavorites[favKey].splice(index, 1);
          } else {
            state.userFavorites[favKey].push(favValue);
          }
        } else {
          if (state.userFavorites[favKey] === favValue) {
            delete state.userFavorites[favKey];
          } else {
            state.userFavorites[favKey] = [
              state.userFavorites[favKey],
              favValue,
            ];
          }
        }
      } else {
        state.userFavorites[favKey] = [favValue];
      }
    },
  },
});

export default UserSlice;
export const {
  updateUserType,
  updateUserName,
  updateUserPassword,
  updateUserInformation,
  updateUserFavorites,
} = UserSlice.actions;
