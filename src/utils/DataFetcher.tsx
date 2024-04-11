import { ReactNode } from "react";
import DataDispatcher from "./DataDispatcher";
import { CountryType } from "@/constants/types";

async function getData() {
  const revalidate = 3600 * 24; // update data every 24 hour
  const res = await fetch("https://restcountries.com/v3.1/all", {
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const DataFetcher = async ({ children }: { children: Readonly<ReactNode> }) => {
  const data: CountryType[] = await getData();
  const editedData = await data.map((item) => {
    let navigateString = item.name.common.toLowerCase();
    if (item.name.common.includes(" ")) {
      navigateString = navigateString.split(" ").join("_");
    }
    return {
      ...item,
      navigateString,
    };
  });
  return (
    <>
      <DataDispatcher data={editedData} />
      {children}
    </>
  );
};

export default DataFetcher;
