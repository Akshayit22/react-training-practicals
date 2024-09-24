import { createSlice } from "@reduxjs/toolkit";

export const StockSlice = createSlice({
  name: "stock",
  initialState: [],
  reducers: {
    BuyStock: (state, action) => {
      state.push(action.payload);
    },
    SellStock: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { BuyStock, SellStock } = StockSlice.actions;

export default StockSlice.reducer;
