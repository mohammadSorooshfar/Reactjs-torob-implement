import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  products: [],
  selectedProduct: {},
  selectedProductShops: [],
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
    addSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    addSelectedProductShops: (state, action) => {
      state.selectedProductShops = action.payload;
    },
  },
});

export const {
  saveUser,
  getProducts,
  addSelectedProduct,
  addSelectedProductShops,
} = cartSlice.actions;
export default cartSlice.reducer;
