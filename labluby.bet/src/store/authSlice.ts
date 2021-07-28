import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from ".";
import User from "../models/User";
import { loginInAPI } from "../datasource/authDataSource";

export interface AuthState {
  userId: string | null;
  userToken: string | null;
  userName: string | null;
  userEmail: string | null;

  isLoggedIn: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  userId: null,
  userToken: null,
  userName: null,
  userEmail: null,

  isLoggedIn: false,
  isLoading: false,
};

export interface LoginProps {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async (props: LoginProps) => {
    const response = await loginInAPI(props.email, props.password);
    // The value we return becomes the `fulfilled` action payload
    return { ...response.data };
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      const user = action.payload;

      if (user) {
        state.userId = user.id;
        state.userToken = user.id;
        state.userName = user.name;
        state.userEmail = user.email;

        state.isLoggedIn = true;
      }
    });
  },
});

export const selectIsLoggedInValue = (state: RootState) =>
  state.auth.isLoggedIn;

export const selectUserData = (state: RootState) => {
  return {
    id: state.auth.userId,
    email: state.auth.userEmail,
    name: state.auth.userName,
  };
};

export const { logout } = authSlice.actions;

export default authSlice.reducer;
