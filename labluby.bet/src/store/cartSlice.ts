import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import SavedGame from "../models/SavedGame";

export interface CartState {
  items: Array<SavedGame>;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<SavedGame>) => {
      state.items.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeItem: (state, action) => {},
    clearCart: () => {},
  },
});

export const cartActions = cartSlice.actions;

export const selectCartItens = (state: RootState) => state.cart.items;
export const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice;

export default cartSlice.reducer;
