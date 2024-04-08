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
  population: {
    from: string;
    to: string;
  };
} = {
  countries: [],
  allCountries: [],
  search: "",
  region: [],
  population: { from: "", to: "" },
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
      if (action.payload?.split(" ")[0] === "delete") {
        state.region = current(state).region.filter(
          (item) => item !== action.payload?.split(" ")[1]
        );
      } else if (!current(state).region.includes(action.payload)) {
        state.region = [...state.region, action.payload];
      }

      mainSlice.caseReducers.filterData(state);
    },
    setPopulationFilter: (state, action: PopulationActionType) => {
      state.population[action.payload.prop] = action.payload.value;
      console.log(current(state).population)
    },
  },
});

type PopulationActionType = {
  payload: {
    prop: keyof { from: string; to: string };
    value: string;
  };
  type: string;
};

export const { initialData, setSearch, setRegionFilter, setPopulationFilter } =
  mainSlice.actions;

export default mainSlice.reducer;
