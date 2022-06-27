import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [],
  totalItems: 0,
  totalPrice: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.totalPrice += action.payload.price;
      state.totalItems++;
      state.selectedItems.push(action.payload);
    },
    removeItemFromCart(state, action) {
      state.totalPrice -= action.payload.price;
      state.totalItems--;
      state.selectedItems.splice(
        state.selectedItems.findIndex(
          (product) => product.id === action.payload.id
        ),
        1
      );
    },
    checkoutOnClick(state) {
      state.selectedItems = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeItemFromCart, checkoutOnClick } =
  cartSlice.actions;
export default cartSlice.reducer;
