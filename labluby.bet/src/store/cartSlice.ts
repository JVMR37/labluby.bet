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
    removeItem: (state, action: PayloadAction<number>) => {
      const cartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (cartItemIndex !== -1) {
        state.totalPrice -= state.items[cartItemIndex].price;
        state.items.splice(cartItemIndex, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export const selectCartItens = (state: RootState) => state.cart.items;
export const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice;

export default cartSlice.reducer;
