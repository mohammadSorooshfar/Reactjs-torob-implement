import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  products: [],
  selectedProduct: {},
  selectedProductDetails: {},
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
    addSelectedProductDetails: (state, action) => {
      state.selectedProductDetails = action.payload;
    },
  },
});

export const {
  saveUser,
  getProducts,
  addSelectedProduct,
  addSelectedProductDetails,
} = cartSlice.actions;
export default cartSlice.reducer;
