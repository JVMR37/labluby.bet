import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CartItem from "../models/CartItem";

export interface CartState {
  items: Array<CartItem>;
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
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeItem: (state, action) => {},
    clearCart: () => {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
