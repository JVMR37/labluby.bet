import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import User from "../models/User";

export interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },

    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const selectIsLoggedInValue = (state: RootState) =>
  state.auth.isLoggedIn;

export const selectUser = (state: RootState) => state.auth.user;

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
