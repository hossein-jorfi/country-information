"use client";
import { CountryType } from "@/constants/types";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DetailPage = ({ urlName }: { urlName: string }) => {
  const countries = useSelector((state: RootState) => state.main.allCountries);
  const [country, setCountry] = useState<CountryType | undefined | null>(null);

  useEffect(() => {
    const countryData = countries.find(
      (item) => item.navigateString === urlName.toLowerCase()
    );

    setCountry(countryData);
  }, [countries, urlName]);

  return (
    <div
      className="
      p-5
      border-opacity-50 rounded-lg border-gray-100 border-2
      flex flex-col justify-between
      bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-gray-300
      mb-6 space-y-3"
    >
      {country === undefined && <p>Country Not Found</p>}
      {country && <div>Detail</div>}
    </div>
  );
};

export default DetailPage;
