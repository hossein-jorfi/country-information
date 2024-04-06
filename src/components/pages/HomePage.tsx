"use client";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store";
import { CountryType } from "@/constants/types";
import CountryCard from "../elements/CountryCard";
import Filter from "../modules/Filter";
import Countries from "../modules/Countries";

type HomePageProps = {
  data: CountryType[];
};

const HomePage = ({ data }: HomePageProps) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <Filter data={data} />
      <Countries />
    </Provider>
  );
};

export default HomePage;
