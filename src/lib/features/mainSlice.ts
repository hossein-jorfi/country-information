import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  search: "",
  region: [],
};

export const counterSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    initialData: (state, action) => {
      state.countries = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { initialData } = counterSlice.actions;

export default counterSlice.reducer;
