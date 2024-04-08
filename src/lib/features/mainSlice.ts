import { createSlice, current } from "@reduxjs/toolkit";
import { CountryType } from "@/constants/types";

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
      // population
      if (state.population.from !== "" && state.population.from !== "") {
        newData = newData.filter((item) => {
          if (
            item.population >= +state.population.from &&
            item.population <= +state.population.to
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
      if (action.payload.prop === "clear") {
        state.population = initialState.population;
      } else {
        state.population[action.payload.prop] = action.payload.value;
      }

      mainSlice.caseReducers.filterData(state);
    },
  },
});

type PopulationActionType = {
  payload: {
    prop: keyof { from: string; to: string } | "clear";
    value: string;
  };
  type: string;
};

export const { initialData, setSearch, setRegionFilter, setPopulationFilter } =
  mainSlice.actions;

export default mainSlice.reducer;
