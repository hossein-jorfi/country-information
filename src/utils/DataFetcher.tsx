import { ReactNode } from "react";
import DataDispatcher from "./DataDispatcher";

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
  const data: [] = await getData();
  return (
    <>
      <DataDispatcher data={data} />
      {children}
    </>
  );
};

export default DataFetcher;
