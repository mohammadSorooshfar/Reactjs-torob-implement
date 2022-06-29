import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  products: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
    },
    getProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { saveUser, getProducts } = cartSlice.actions;
export default cartSlice.reducer;
