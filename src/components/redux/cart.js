import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  userFavorites: [],
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
    saveUserFavorites: (state, action) => {
      state.userFavorites = action.payload;
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
  saveUserFavorites,
  getProducts,
  addSelectedProduct,
  addSelectedProductDetails,
} = cartSlice.actions;
export default cartSlice.reducer;
