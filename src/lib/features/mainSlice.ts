import { createSlice, current } from "@reduxjs/toolkit";

type CountryType = {
  region: string;
  name: {
    common: string;
    official: string;
    native: {
      common: string;
      official: string;
    };
  };
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  flag: string;
};

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
        (item: CountryType) =>
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
    setRegionFilter: (state, action) => {
      console.log(action.payload)
    }
  },
});

// Action creators are generated for each case reducer function
export const { initialData, setSearch, setRegionFilter } = mainSlice.actions;

export default mainSlice.reducer;
