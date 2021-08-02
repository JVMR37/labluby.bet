import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Game from "../models/Game";

export enum GameStatus {
  Loading,
  Loaded,
  Error,
  IDLE,
}

export interface GameState {
  availableGames: Array<Game>;
  selectedGame?: Game;
  status: GameStatus;
}

const initialState: GameState = {
  availableGames: [],
  status: GameStatus.IDLE,
};

export const loadGames = createAsyncThunk(
  "auth/loadGames",
  async (_, thunkApi) => {
    const response = require("../assets/games.json");

    if (!response) {
      return thunkApi.rejectWithValue("Não foi possível carregar os jogos !");
    }

    return response.types;
  }
);

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    selectGame: (state, action: PayloadAction<string>) => {
      state.selectedGame = state.availableGames.find((value) => {
        return value.type === action.payload;
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loadGames.pending, (state) => {
      console.log("=========== Loading Games ===========");

      state.status = GameStatus.Loading;
    });

    builder.addCase(loadGames.rejected, (state) => {
      state.status = GameStatus.Error;
    });

    builder.addCase(loadGames.fulfilled, (state, action) => {
      console.log("=========== Games Loaded ===========");

      state.availableGames = action.payload;
      state.selectedGame = state.availableGames[0];
      state.status = GameStatus.Loaded;
    });
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
