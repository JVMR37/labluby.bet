import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import Game from "../models/Game";
import SavedGame from "../models/SavedGame";
import ApiDatasource from "../datasource/apiDatasource";

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
    const response = await ApiDatasource.Instance.loadGames();

    if (response instanceof Error) {
      return thunkApi.rejectWithValue("Não foi possível carregar os jogos !");
    }

    return response.data;
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

    selectNumber: (state, action: PayloadAction<number>) => {
      if (
        action.payload &&
        state.selectedNumbers.length < state.selectedGame!.maxNumber
      ) {
        state.selectedNumbers.push(action.payload);
      } else {
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
        const possibleNumber = Math.ceil(
          Math.random() * state.selectedGame!.range
        );

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
      state.savedGames = [...action.payload, ...state.savedGames];

      state.savedGames.sort(
        (gameA, gameB) => gameB.createdAt.getTime() - gameA.createdAt.getTime()
      );
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
