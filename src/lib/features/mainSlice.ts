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

const initialState: {
  countries: CountryType[];
  allCountries: CountryType[];
  search: string;
  region: string[];
} = {
  countries: [],
  allCountries: [],
  search: "",
  region: [],
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    filterData: (state) => {
      let newData = current(state).allCountries;
      // search
      if (state.search) {
        newData = newData.filter(
          (item: CountryType) =>
            item?.name?.common
              ?.toLowerCase()
              ?.includes(state.search.toLowerCase()) ||
            item?.name?.official
              ?.toLowerCase()
              ?.includes(state.search.toLowerCase())
        );
      }

      // region
      if (current(state).region.length > 0) {
        newData = newData.filter((item) => {
          if (
            current(state).region.findIndex(
              (region) => region?.toLowerCase() === item.region?.toLowerCase()
            ) !== -1
          ) {
            return item;
          }
        });
      }

      state.countries = newData;
    },
    initialData: (state, action) => {
      state.countries = action.payload;
      state.allCountries = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;

      mainSlice.caseReducers.filterData(state);
    },
    setRegionFilter: (state, action) => {
      state.region = [...state.region, action.payload];
      mainSlice.caseReducers.filterData(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { initialData, setSearch, setRegionFilter } = mainSlice.actions;

export default mainSlice.reducer;
