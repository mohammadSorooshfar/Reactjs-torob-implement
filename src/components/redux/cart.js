import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { saveUser } = cartSlice.actions;
export default cartSlice.reducer;
