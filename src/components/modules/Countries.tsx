"use client";
import { useSelector } from "react-redux";
import CountryCard from "../elements/CountryCard";
import { RootState } from "@/lib/store";

const Countries = () => {
  const countries = useSelector((state: RootState) => state.main.countries);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
      {countries?.map((item: any, index) => {
        return (
          <CountryCard
            key={item?.name?.common || index}
            {...item}
            name={{
              ...item.name,
              native: {
                official: item?.name?.nativeName
                  ? item?.name?.nativeName[
                      Object?.keys(item?.name?.nativeName || {})[0]
                    ].official
                  : "-",
                common: item?.name?.nativeName
                  ? item?.name?.nativeName[
                      Object?.keys(item?.name?.nativeName || {})[0]
                    ].common
                  : "-",
              },
            }}
          />
        );
      })}
    </div>
  );
};

export default Countries;
