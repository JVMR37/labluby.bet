import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import Game from "../models/Game";
import SavedGame from "../models/SavedGame";

export enum GameStatus {
  Loading,
  Loaded,
  Error,
  IDLE,
}

export interface GameState {
  availableGames: Array<Game>;
  selectedGame?: Game;
  selectedNumbers: Array<number>;
  status: GameStatus;
  savedGames: Array<SavedGame>;
}

const initialState: GameState = {
  availableGames: [],
  selectedNumbers: [],
  savedGames: [],
  status: GameStatus.IDLE,
};

export const loadGames = createAsyncThunk(
  "auth/loadGames",
  async (_, thunkApi) => {
    const response = require("../assets/games.json");

    if (!response) {
      return thunkApi.rejectWithValue("Não foi possível carregar os jogos !");
    }

    const games = response.types.map(
      (game: any) =>
        new Game(
          game.type,
          game.description,
          game.range,
          game.price,
          game["max-number"],
          game.color,
          game.minCartValue
        )
    );

    return games;
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

      console.log(state.selectedGame);
    },

    selectNumber: (state, action: PayloadAction<number>) => {
      if (action.payload) {
        state.selectedNumbers.push(action.payload);
      }
    },

    removeNumber: (state, action: PayloadAction<number>) => {
      const numberIndex = state.selectedNumbers.findIndex(
        (number) => number === action.payload
      );
      if (numberIndex !== -1) {
        state.selectedNumbers.splice(numberIndex, 1);
      }
    },

    clearSelectedNumbers: (state) => {
      state.selectedNumbers = [];
    },

    randomlySelectNumbers: (state) => {
      while (state.selectedNumbers.length < state.selectedGame!.maxNumber) {
        console.log("=========== randomlySelectNumbers ===========");
        const possibleNumber = Math.ceil(
          Math.random() * (state.selectedGame!.range - 1)
        );
        console.log(possibleNumber);
        if (
          !state.selectedNumbers.some(
            (selectedNumber) => possibleNumber === selectedNumber
          )
        ) {
          state.selectedNumbers.push(possibleNumber);
        }
      }
    },

    saveGames: (state, action: PayloadAction<Array<SavedGame>>) => {
      Object.assign(state.savedGames, action.payload);
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

export const {
  selectGame,
  selectNumber,
  clearSelectedNumbers,
  removeNumber,
  randomlySelectNumbers,
  saveGames,
} = gameSlice.actions;
export const selectAvailableGames = (state: RootState) =>
  state.game.availableGames;
export const getSelectedNumbers = (state: RootState) =>
  state.game.selectedNumbers;

export const getSavedGames = (state: RootState) => state.game.savedGames;

export const getSelectedGame = (state: RootState) => state.game.selectedGame;

export default gameSlice.reducer;
