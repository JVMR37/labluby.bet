import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from ".";
import User from "../models/User";
import {
  loginInAPI,
  registerUserInAPI,
  resetPasswordInAPI,
} from "../datasource/authDataSource";

export enum AuthStatus {
  Loading,
  Logged,
  Error,
  IDLE,
}
export interface AuthState {
  userId: string | null;
  userToken: string | null;
  userName: string | null;
  userEmail: string | null;

  status: AuthStatus;
  isLoggedIn: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  userId: null,
  userToken: null,
  userName: null,
  userEmail: null,

  status: AuthStatus.IDLE,
  isLoggedIn: false,
  isLoading: false,
};

export interface LoginProps {
  email: string;
  password: string;
}

export interface RegisterProps {
  name: string;
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async (props: LoginProps, thunkApi) => {
    const response = await loginInAPI(props.email, props.password);

    if (!response) {
      return thunkApi.rejectWithValue("Não foi possível fazer o Login !");
    }

    return { ...response.data };
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (props: RegisterProps) => {
    const response = await registerUserInAPI(
      props.name,
      props.email,
      props.password
    );
    // The value we return becomes the `fulfilled` action payload
    return { ...response.data };
  }
);

export const sendLinkToResetPass = createAsyncThunk(
  "auth/sendLinkToResetPass",
  async (email: string) => {
    const response = await resetPasswordInAPI(email);

    return { ...response.data };
  }
);

export const updateAuthStatusAfterTime = createAsyncThunk<
  AuthStatus,
  AuthStatus
>("auth/updateStatus", async (newStatus: AuthStatus = AuthStatus.IDLE) => {
  return new Promise<AuthStatus>((resolve) => {
    setTimeout(() => resolve(newStatus), 3000);
  }).then((value) => value);
});

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
      state.status = AuthStatus.Loading;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.status = AuthStatus.Error;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      const user = action.payload;

      if (user) {
        state.userId = user.id;
        state.userToken = user.id;
        state.userName = user.name;
        state.userEmail = user.email;

        state.status = AuthStatus.Logged;
        state.isLoggedIn = true;
      }
    });

    builder.addCase(updateAuthStatusAfterTime.fulfilled, (state, action) => {
      console.log(action.payload);
      state.status = action.payload;
    });
  },
});

export const selectIsLoggedInValue = (state: RootState) =>
  state.auth.status === AuthStatus.Logged;

export const selectAuthStatusValue = (state: RootState) => state.auth.status;

export const selectUserData = (state: RootState) => {
  return {
    id: state.auth.userId,
    email: state.auth.userEmail,
    name: state.auth.userName,
  };
};

export const { logout } = authSlice.actions;

export default authSlice.reducer;
