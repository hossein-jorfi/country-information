import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  allCountries: [],
  search: "",
  region: [],
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    filterData: (state, action) => {
      state.countries = current(state).allCountries.filter(
        (item) =>
          item?.name?.common
            ?.toLowerCase()
            ?.includes(state.search.toLowerCase()) ||
          item?.name?.official
            ?.toLowerCase()
            ?.includes(state.search.toLowerCase())
      );
    },
    initialData: (state, action) => {
      state.countries = action.payload;
      state.allCountries = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;

      mainSlice.caseReducers.filterData(state, action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { initialData, setSearch } = mainSlice.actions;

export default mainSlice.reducer;
